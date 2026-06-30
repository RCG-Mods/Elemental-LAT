"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/config/site";
import { VolumeOnIcon, VolumeOffIcon } from "./icons";

const STORAGE_KEY = "elemental-sfx-muted";
const INTERACTIVE = "a, button, [role='button'], [data-sfx]";

/**
 * Global UI sound effects: a soft hover tone on interactive elements and a
 * click sound. Includes a persisted mute toggle and skips hover audio on
 * touch devices. Audio only plays after the first user gesture (browser rule).
 */
export function SoundFx() {
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(muted);
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);

  // Restore preference.
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") setMuted(true);
  }, []);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    const click = new Audio(asset("/sfx/click.mp3"));
    const hover = new Audio(asset("/sfx/hover.wav"));
    click.volume = 0.35;
    hover.volume = 0.2;
    click.preload = "auto";
    hover.preload = "auto";
    clickRef.current = click;
    hoverRef.current = hover;

    const canHover =
      window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? false;

    const play = (el: HTMLAudioElement | null) => {
      if (!el || mutedRef.current) return;
      try {
        el.currentTime = 0;
        void el.play();
      } catch {
        /* autoplay blocked until first gesture — ignore */
      }
    };

    const closestInteractive = (t: EventTarget | null) =>
      t instanceof Element ? t.closest(INTERACTIVE) : null;

    const onClick = (e: MouseEvent) => {
      if (closestInteractive(e.target)) play(clickRef.current);
    };

    const onOver = (e: MouseEvent) => {
      if (!canHover) return;
      const el = closestInteractive(e.target);
      if (!el) return;
      const from =
        e.relatedTarget instanceof Element
          ? e.relatedTarget.closest(INTERACTIVE)
          : null;
      // Only play when actually entering a new interactive element.
      if (el !== from) play(hoverRef.current);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  const toggle = () => {
    setMuted((m) => {
      const next = !m;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        /* ignore storage errors */
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? "Activar sonidos" : "Silenciar sonidos"}
      aria-pressed={muted}
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background/70 text-white backdrop-blur-xl transition-colors duration-200 hover:border-white/35 hover:bg-white/10 cursor-pointer"
    >
      {muted ? (
        <VolumeOffIcon className="h-5 w-5 text-muted" />
      ) : (
        <VolumeOnIcon className="h-5 w-5 text-teal" />
      )}
    </button>
  );
}
