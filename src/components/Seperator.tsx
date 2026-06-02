import React from "react";

interface SeperatorProps {
  topMarginInPx?: number;
  bottomMarginInPx?: number;
  label?: string; // Added label property
}

export default function Seperator({
  topMarginInPx = 0,
  bottomMarginInPx = 0,
  label, // Destructured here
}: SeperatorProps) {
  return (
    <div
      style={{
        marginTop: `${topMarginInPx}px`,
        marginBottom: `${bottomMarginInPx}px`,
      }}
      className="relative w-full overflow-visible
        [--pattern-fg:rgba(0,0,0,0.06)] dark:[--pattern-fg:rgba(255,255,255,0.08)]"
    >
      {/* Viewport-safe matrix ribbon layout line */}
      <div
        aria-hidden="true"
        className="w-[100vw] relative left-1/2 right-1/2 -translate-x-1/2 h-[50px] z-0 select-none pointer-events-none
          border-y border-[var(--pattern-fg)] 
          bg-[linear-gradient(135deg,_var(--pattern-fg)_1px,_transparent_1px)] 
          bg-[size:10px_10px]"
      />

      {/* Monospace System Badge Label */}
      {label && (
        <div className="absolute top-1/2 left-4 md:left-0 -translate-y-1/2 z-10 flex items-center select-none pointer-events-none">
          <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-400 dark:text-neutral-500 bg-white dark:bg-[#0a0a0b] px-2 py-0.5 border border-neutral-200/60 dark:border-neutral-800/60 rounded uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
