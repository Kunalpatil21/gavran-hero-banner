import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NavbarRooster() {
  const id = useId().replace(/:/g, "");
  const audioRef = useRef<HTMLAudioElement>(null);
  const frameRef = useRef<number>(0);
  const raysRef = useRef<SVGSVGElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const stop = () => {
    cancelAnimationFrame(frameRef.current);
    setPlaying(false);
  };

  const syncRays = () => {
    const audio = audioRef.current;
    if (!audio || audio.paused || audio.ended) return;
    // Playback time drives the vocal pulses, so buffering pauses the effect too.
    const pulse = (Math.sin(audio.currentTime * 18) + 1) / 2;
    raysRef.current?.style.setProperty("--vocal-pulse", String(pulse));
    frameRef.current = requestAnimationFrame(syncRays);
  };

  const crow = () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    audio.currentTime = 0;
    void audio.play().catch(stop);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={crow}
      aria-label="Gavran rooster — click to hear it crow"
      title="कुकडू कू!"
      className="navbar-rooster h-[68px] w-[68px] shrink-0 rounded-full p-1 hover:bg-transparent focus-visible:ring-gold"
      data-crowing={playing}
    >
      <span className="rooster-art" aria-hidden="true">
        <svg className="rooster-picture" viewBox="0 0 768 768">
          <defs>
            <clipPath id={`${id}-head`}><path d="M530 0H768V290L620 350L535 180Z" /></clipPath>
            <clipPath id={`${id}-wing`}><path d="M390 360L640 350L600 520L420 580L350 510Z" /></clipPath>
            <mask id={`${id}-body`}>
              <path fill="white" d="M0 0H768V768H0Z" />
              <path fill="black" d="M530 0H768V290L620 350L535 180Z M390 360L640 350L600 520L420 580L350 510Z" />
            </mask>
          </defs>
          <image href="/images/rooster.png" width="768" height="768" mask={`url(#${id}-body)`} />
          <g className="rooster-head"><image href="/images/rooster.png" width="768" height="768" clipPath={`url(#${id}-head)`} /></g>
          <g className="rooster-wing"><image href="/images/rooster.png" width="768" height="768" clipPath={`url(#${id}-wing)`} /></g>
        </svg>
        {playing && (
          <svg ref={raysRef} className="rooster-vocal-rays" viewBox="0 0 64 64">
            <g fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
              <path d="M11 16L4 12" /><path d="M10 23H1" /><path d="M12 30L5 35" />
              <path d="M18 11L15 4" />
            </g>
          </svg>
        )}
      </span>
      <audio ref={audioRef} preload="none" onPlaying={() => { setPlaying(true); cancelAnimationFrame(frameRef.current); syncRays(); }} onPause={stop} onEnded={stop} onError={stop} onWaiting={stop}>
        <source src="/audio/rooster-crow.mp3" type="audio/mpeg" />
        <source src="/audio/rooster-crow.ogg" type="audio/ogg" />
      </audio>
    </Button>
  );
}