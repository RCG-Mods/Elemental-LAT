"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { CopyIcon, CheckIcon } from "./icons";

/** Shows the FiveM connect code with a copy-to-clipboard action. */
export function ConnectCode() {
  const [copied, setCopied] = useState(false);
  const code = site.connectUrl.replace(/^https?:\/\//, "");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-sm text-muted backdrop-blur transition-colors duration-200 hover:border-white/35 hover:text-white cursor-pointer"
      aria-label={`Copiar código de conexión ${code}`}
    >
      <span className="text-white/40">connect</span>
      <span className="text-white">{code}</span>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-teal" />
      ) : (
        <CopyIcon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
      )}
    </button>
  );
}
