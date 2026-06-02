"use client";

import React from "react";
import {
  Baby,
  Trophy,
  Target,
  GraduationCap,
  Award,
  Gamepad2,
  Code2,
  Sparkles,
  Globe,
  Layers,
  Flame,
} from "lucide-react";

export interface ChangelogItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const changelog: Record<string, ChangelogItem[]> = {
  "2004": [
    {
      title: "I was born 👶",
      description: "The very first chapter of my story begins.",
      icon: (
        <Baby className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
      ),
    },
  ],
  "2010": [
    {
      title: "Cricket obsession begins 🏏",
      description: "Started watching cricket and played all day long.",
      icon: (
        <Baby className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400 shrink-0" />
      ),
    },
    {
      title: "Helicopter shot attempts ✈️",
      description: "Tried replicating the iconic MS Dhoni helicopter shot.",
      icon: (
        <Flame className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0" />
      ),
    },
    {
      title: "Academic excellence 📚",
      description: "Maintained good grades while enjoying sports.",
      icon: (
        <Award className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400 shrink-0" />
      ),
    },
  ],
  "2014": [
    {
      title: "Madridista for life ⚪",
      description: "Became a Real Madrid and Cristiano Ronaldo die-hard fan.",
      icon: (
        <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
      ),
    },
  ],
  "2015": [
    {
      title: "High school journey begins 🎓",
      description:
        "Admission in Memari VM Institution — Unit 1 for high school.",
      icon: (
        <GraduationCap className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0" />
      ),
    },
  ],
  "2020": [
    {
      title: "Academic milestone 🏅",
      description: "Scored 97.85% marks in secondary examination.",
      icon: (
        <Award className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
      ),
    },
  ],
  "2022": [
    {
      title: "Higher secondary success 🥇",
      description: "Achieved 92.8% marks in higher secondary.",
      icon: (
        <Award className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
      ),
    },
    {
      title: "Rubik's Cube enthusiast 🔄",
      description: "Fell in love with solving Rubik’s Cube.",
      icon: (
        <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
      ),
    },
    {
      title: "Gamer’s streak 🎮",
      description: "Played FIFA 19 with passion.",
      icon: (
        <Gamepad2 className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0" />
      ),
    },
    {
      title: "Competitive exam feat ✏️",
      description: "JEE Main 96.4%ile & WBJEE AIR 2059.",
      icon: (
        <Target className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0" />
      ),
    },
    {
      title: "College admission 🎓",
      description:
        "Joined Government College of Engineering and Leather Technology (CSE).",
      icon: (
        <GraduationCap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
      ),
    },
  ],
  "2023": [
    {
      title: "Coding journey begins 💻",
      description: "Started learning programming seriously.",
      icon: (
        <Code2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0" />
      ),
    },
    {
      title: "DSA grind on LeetCode 🧩",
      description: "Solved 150+ DSA problems on LeetCode.",
      icon: (
        <Target className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
      ),
    },
  ],
  "2024": [
    {
      title: "Web development journey 🌐",
      description: "Began building projects in web development.",
      icon: (
        <Globe className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400 shrink-0" />
      ),
    },
    {
      title: "Mini projects 🚀",
      description: "Built small news apps, extensions, and more.",
      icon: (
        <Layers className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
      ),
    },
    {
      title: "Chess achievement ♟️",
      description: "Reached 1680 rating on chess.com.",
      icon: (
        <Trophy className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-500 shrink-0" />
      ),
    },
  ],
  "2025": [
    {
      title: "GATE 2025 🎯",
      description: "Secured AIR 3575 in GATE exam.",
      icon: (
        <Target className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0" />
      ),
    },
    {
      title: "Major project releases 🚀",
      description: "Built RealTimeChatApp and CoderRoute.",
      icon: (
        <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
      ),
    },
    {
      title: "RTClass in progress 🏗️",
      description: "Currently building an online classroom platform.",
      icon: (
        <Code2 className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400 shrink-0" />
      ),
    },
  ],
};
