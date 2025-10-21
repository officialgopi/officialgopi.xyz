import React from "react";

const Seperator = ({
  topMarginInPx = 0,
  bottomMarginInPx = 0,
}: {
  topMarginInPx?: number;
  bottomMarginInPx?: number;
}) => {
  return (
    <div
      style={{
        marginTop: `${topMarginInPx}px`,
        marginBottom: `${bottomMarginInPx}px`,
      }}
      className="relative w-full"
    >
      <div className="relative  z-[10] w-screen   h-[50px]  translate-x-[-50%] left-[50%] border-y border-y-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
    </div>
  );
};

export default Seperator;
