import React from "react";
import { IconType } from "react-icons";

const IconCard = ({ Icon, alt }: { Icon: IconType; alt: string }) => {
  return (
    <div className="relative w-[100px] h-[100px] border overflow-hidden group rounded-sm border-neutral-500/50 hover:scale-95 transition cursor-pointer">
      <Icon className="w-full h-full    p-4" />
      <div className="absolute w-full h-full flex items-end p-2 justify-center top-0 left-0  translate-y-[100px] group-hover:translate-y-0 transition duration-300 text-center bg-gradient-to-b from-transparent to-neutral-950 dark:to-neutral-200 dark:text-neutral-900 text-white text-sm  font-bold">
        <span>{alt}</span>
      </div>
    </div>
  );
};

export default IconCard;
