/**
 * Tactile key-press feedback for primary pointer presses.
 *
 * Two single-key samples cut from a CC0 mechanical-keyboard typing recording
 * (Dustin Davis, Wikimedia Commons) alternate with a little pitch variation
 * so rapid clicking doesn't sound like a machine gun. Web Audio keeps the
 * latency low enough to feel like part of the click itself.
 */
const SAMPLES = ["/media/sfx/key-press.wav", "/media/sfx/key-press-2.wav"];
const VOLUME = 0.34;

type AudioCtor = typeof AudioContext;

let ctx: AudioContext | null = null;
let buffers: AudioBuffer[] = [];
let cursor = 0;
let loading: Promise<void> | null = null;
let armed = false;

/** Decode both samples once, up front — no gesture needed just to decode. */
function load(): Promise<void> {
  if (loading) return loading;
  loading = (async () => {
    const Ctor: AudioCtor | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: AudioCtor })
        .webkitAudioContext;
    if (!Ctor) return;
    const context = new Ctor();
    const decoded = await Promise.all(
      SAMPLES.map(async (src) => {
        const res = await fetch(src);
        return context.decodeAudioData(await res.arrayBuffer());
      })
    );
    ctx = context;
    buffers = decoded;
  })().catch(() => {
    /* no audio support — clicks simply stay silent */
  });
  return loading;
}

/**
 * Listen for primary presses anywhere on the page. Capture phase so the
 * feedback fires even when a handler stops propagation. Returns a cleanup.
 */
export function armClickSound(): () => void {
  if (armed) return () => {};
  armed = true;
  void load();

  const onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0 || !ctx || buffers.length === 0) return;
    if (ctx.state === "suspended") void ctx.resume();
    const source = ctx.createBufferSource();
    source.buffer = buffers[cursor++ % buffers.length];
    source.playbackRate.value = 0.95 + Math.random() * 0.1;
    const gain = ctx.createGain();
    gain.gain.value = VOLUME;
    source.connect(gain).connect(ctx.destination);
    source.start();
  };

  window.addEventListener("pointerdown", onPointerDown, true);
  return () => {
    window.removeEventListener("pointerdown", onPointerDown, true);
    armed = false;
  };
}
