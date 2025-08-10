"use client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: string[]) => {
  return twMerge(clsx(classes));
};

export const getTheme = (): "dark" | "light" => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } else {
    return "light";
  }
};
