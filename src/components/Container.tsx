import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main
      className="w-full max-w-5xl mx-auto min-h-screen relative px-4 md:px-0 pt-28 pb-16
        [--pattern-fg:rgba(0,0,0,0.03)] dark:[--pattern-fg:rgba(255,255,255,0.04)]"
    >
      {/* 1. Main Global Content Viewport Slot */}
      <div className="w-full h-full relative z-10">{children}</div>

      {/* 2. Left Column Engineering Structural Track Accent */}
      {/* <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[-16px] w-4 hidden md:flex z-20 pointer-events-none select-none
          border-x border-[var(--pattern-fg)] 
          bg-[linear-gradient(135deg,_var(--pattern-fg)_1px,_transparent_1px)] 
          bg-[size:8px_8px]"
      /> */}

      {/* 3. Right Column Engineering Structural Track Accent */}
      {/* <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 right-[-16px] w-4 hidden md:flex z-20 pointer-events-none select-none
          border-x border-[var(--pattern-fg)] 
          bg-[linear-gradient(135deg,_var(--pattern-fg)_1px,_transparent_1px)] 
          bg-[size:8px_8px]"
      /> */}
    </main>
  );
}
