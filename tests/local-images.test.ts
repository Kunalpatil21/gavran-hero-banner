import { expect, test } from "bun:test";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? sourceFiles(path)
      : /\.(tsx?|css)$/.test(entry.name) ? [path] : [];
  });
}

test("website images use repository-local public/images files", () => {
  const source = sourceFiles("src").map((path) => readFileSync(path, "utf8")).join("\n");
  expect(source).not.toMatch(/@\/assets\/|\.asset\.json|\/__l5e\/assets|https:\/\/i\.ytimg\.com/);
  const paths = [...source.matchAll(/["'](\/images\/[^"']+)["']/g)].map((match) => match[1]);
  expect(paths.length).toBeGreaterThan(30);
  for (const path of paths) expect(existsSync(join("public", path))).toBe(true);
  for (const id of ["EDeNjQ5jJAM", "YOp-7kMG3jk", "Vqn__N7RhHI"])
    expect(existsSync(`public/images/youtube-${id}.jpg`)).toBe(true);
});