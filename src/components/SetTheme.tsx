"use client";
import { useThemeStore } from "@/store/themeStore";
import React, { useEffect } from "react";

const SetTheme = () => {
  const { isDark } = useThemeStore();
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  return <></>;
};

export default SetTheme;
