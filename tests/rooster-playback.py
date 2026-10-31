"""Run with python3 tests/rooster-playback.py against the local preview."""
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        for width, height in [(1280, 1800), (390, 844)]:
            page = await browser.new_page(viewport={"width": width, "height": height})
            await page.goto("http://localhost:8080", wait_until="networkidle")
            audio = page.locator("audio")
            rooster = page.get_by_role("button", name="Gavran rooster — click to hear it crow")
            # Rule: no sound starts without a user's click.
            assert await audio.evaluate("a => a.paused && a.currentTime === 0")
            await rooster.click()
            await page.wait_for_function("document.querySelector('audio').currentTime > 0.2")
            # Rule: another click must not restart or overlap active playback.
            before = await audio.evaluate("a => a.currentTime")
            await rooster.click()
            assert await audio.evaluate("a => a.currentTime") >= before
            await page.wait_for_function("document.querySelector('audio').ended", timeout=15000)
            assert await audio.evaluate("a => a.paused")
            # Rule: after playback ends, another click replays from the start.
            await rooster.click()
            await page.wait_for_function("document.querySelector('audio').currentTime > 0.1")
            assert await audio.evaluate("a => !a.paused && a.currentTime < 2")
            await page.close()
            print(f"{width}px: click-only playback, no overlap, and replay passed")
        await browser.close()


asyncio.run(main())