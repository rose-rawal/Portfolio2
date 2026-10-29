import { useCallback, useEffect, useRef, useState } from "react";
import { IconEqualizer, IconMusicOff } from "../components/icons.tsx";

type Track = {
  title: string;
  artist: string;
  src: string;
  license: string;
  page: string;
};

/**
 * Lo-fi playlist — every track is CC0 1.0 (public domain), so the site can
 * ship and loop them freely. Attribution isn't required by the licence, but
 * the credit is kept in the button tooltip and in `page` for transparency.
 */
const TRACKS: Track[] = [
  {
    title: "Chill Lofi Inspired",
    artist: "omfgdude",
    src: "/music/chill-lofi.mp3",
    license: "CC0 1.0",
    page: "https://opengameart.org/content/chill-lofi-inspired",
  },
  {
    title: "Vintage Hawaii",
    artist: "Tarush Singhal",
    src: "/music/vintage-hawaii.mp3",
    license: "CC0 1.0",
    page: "https://opengameart.org/content/vintage-hawaii",
  },
  {
    title: "Chills",
    artist: "HoliznaCC0",
    src: "/music/chills.mp3",
    license: "CC0 1.0",
    page: "https://opengameart.org/content/chills",
  },
];

const STORE_KEY = "lofi";
const TARGET_VOLUME = 0.55;
const FADE_IN = 800;
const FADE_OUT = 400;

/** Linear volume ramp; returns a cancel function for the running frame loop. */
function fade(
  audio: HTMLMediaElement,
  to: number,
  ms: number,
  onDone?: () => void
): () => void {
  const from = audio.volume;
  /* Seed the clock from the first frame: rAF timestamps can predate the
     performance.now() captured here, which would otherwise yield a negative
     fraction (and an IndexSizeError on the volume assignment). */
  let start = 0;
  let id = 0;

  const step = (now: number) => {
    if (!start) start = now;
    const t = Math.min(1, Math.max(0, (now - start) / ms));
    audio.volume = from + (to - from) * t;
    if (t < 1) {
      id = requestAnimationFrame(step);
    } else {
      audio.volume = to;
      onDone?.();
    }
  };

  id = requestAnimationFrame(step);
  return () => cancelAnimationFrame(id);
}

const readStore = () => {
  try {
    return localStorage.getItem(STORE_KEY) === "1";
  } catch {
    return false;
  }
};

const writeStore = (on: boolean) => {
  try {
    localStorage.setItem(STORE_KEY, on ? "1" : "0");
  } catch {
    /* storage unavailable — the toggle still works for this session */
  }
};

/**
 * Navbar lo-fi switch. Browsers only allow sound after a user gesture, so the
 * first press is what starts playback; the remembered preference is retried
 * silently on later visits and simply stays off if the browser refuses.
 */
export default function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const cancelFade = useRef<(() => void) | null>(null);

  /* Mirror state into a ref so handlers never read a stale value. */
  playingRef.current = playing;

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFade.current?.();
    setPlaying(false);
    playingRef.current = false;
    writeStore(false);
    cancelFade.current = fade(audio, 0, FADE_OUT, () => audio.pause());
  }, []);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFade.current?.();

    if (!audio.src) audio.src = TRACKS[index].src;
    audio.volume = 0;

    const begin = () => {
      setPlaying(true);
      playingRef.current = true;
      writeStore(true);
      cancelFade.current = fade(audio, TARGET_VOLUME, FADE_IN);
    };

    const attempt = audio.play();
    if (attempt && typeof attempt.then === "function") {
      attempt.then(begin).catch(() => {
        /* autoplay refused — leave the button off until it's pressed again */
        setPlaying(false);
        playingRef.current = false;
      });
    } else {
      begin();
    }
  }, [index]);

  const toggle = useCallback(() => {
    if (playingRef.current) stop();
    else start();
  }, [start, stop]);

  /* Advance the playlist when a track finishes. */
  const onEnded = useCallback(() => setIndex((i) => (i + 1) % TRACKS.length), []);

  /* Point the element at the current track (also runs on mount). */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = TRACKS[index].src;
    if (playingRef.current) {
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => setPlaying(false));
      }
    }
  }, [index]);

  /* Resume a preference the visitor left on, if the browser permits it. */
  useEffect(() => {
    if (!readStore()) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    const attempt = audio.play();
    if (!attempt || typeof attempt.then !== "function") return;
    attempt
      .then(() => {
        setPlaying(true);
        playingRef.current = true;
        cancelFade.current = fade(audio, TARGET_VOLUME, FADE_IN);
      })
      .catch(() => {
        /* blocked until the visitor interacts — retried on the next visit */
      });
  }, []);

  useEffect(() => () => cancelFade.current?.(), []);

  const track = TRACKS[index];

  return (
    <>
      <button
        className="header__theme header__sound"
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing
            ? `Turn lo-fi music off — now playing ${track.title}`
            : "Turn lo-fi music on"
        }
        title={
          playing
            ? `Now playing: ${track.title} — ${track.artist} (${track.license})`
            : `Lo-fi music — ${track.license} tracks, free to use`
        }
      >
        {playing ? <IconEqualizer /> : <IconMusicOff />}
      </button>
      <audio ref={audioRef} preload="none" onEnded={onEnded} />
    </>
  );
}
