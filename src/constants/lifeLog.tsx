type WorkItem = {
  title: string;
  description: string;
  icon: any; // emoji or lucide-react icon
};

const icon = <img src="/icons/verified.svg" alt="Algochurn" />;

export const changelog: Record<string, WorkItem[]> = {
  "2024": [
    {
      title: "Launched CoderRoute 🚀",
      description:
        "Released CoderRoute, a platform for developers to practice coding challenges with real-time feedback.",
      icon: icon,
    },
    {
      title: "500+ Users on Algochurn 🥜",
      description: "Algochurn crossed 500 users and continues to grow rapidly.",
      icon: icon,
    },
  ],
  "2023": [
    {
      title: "300+ Users on Algochurn 🥜",
      description: "Algochurn crossed 300 users and I couldn't be any happier.",
      icon: icon,
    },
    {
      title: "Spoke at DevCon 🎤",
      description:
        "Shared insights on building scalable frontend architectures.",
      icon: icon,
    },
  ],
  "2022": [
    {
      title: "Started working on Moonbeam 😍",
      description:
        "Joined Moonbeam as a front-end developer. Building a Chrome extension was both fun and challenging.",
      icon: icon,
    },
    {
      title: "Algochurn crosses 200 users 🥜",
      description:
        "Helping 200+ registered users and 14,000+ monthly visitors.",
      icon: icon,
    },
    {
      title: "Built and launched Algochurn 🪴",
      description:
        "Created a platform to practice DS Algo and front-end skills for interviews.",
      icon: icon,
    },
  ],
};
