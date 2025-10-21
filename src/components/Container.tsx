import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" w-full md:max-w-3xl lg:max-w-5xl mx-auto  min-h-screen relative  [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
      {/* <div className=" absolute  w-px h-full bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[0px] left-[-20px]" />
      <div className=" absolute  w-px h-full bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[0px] right-[-20px]" /> */}
      <div className="w-full h-full px-2">{children}</div>
      <div className="absolute top-0  hidden md:flex -right-[10px] h-full w-[10px] md:w-[20px] z-[1000000000]  border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="absolute top-0 hidden md:flex -left-[10px] h-full  w-[10px] md:w-[20px]  z-[1000000000]  border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    </main>
  );
};

export default Container;
