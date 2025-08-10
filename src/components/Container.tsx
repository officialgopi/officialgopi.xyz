import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full md:max-w-3xl lg:max-w-5xl mx-auto  min-h-screen relative">
      <div className=" absolute  w-px h-full bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[0px] left-[-20px]" />
      <div className=" absolute  w-px h-full bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[0px] right-[-20px]" />

      {children}
    </main>
  );
};

export default Container;
