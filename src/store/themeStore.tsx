"use client";

import { create } from "zustand";

export const useThemeStore = create<{
  isDark: boolean;
  toggleTheme: () => void;
}>((set) => ({
  isDark:
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark",

  toggleTheme: () => {
    if (typeof window !== "undefined") {
      document.querySelector("html")?.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        localStorage.getItem("theme") === "dark" ? "light" : "dark"
      );
    }
    set((state) => ({
      isDark: !state.isDark,
    }));
  },
}));
