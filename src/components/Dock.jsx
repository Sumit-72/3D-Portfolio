import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
} from "@tabler/icons-react";



const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Email",
    icon: (
      <img 
      src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png"
      className=" text-neutral-500 dark:text-neutral-300  p-0 m-0 "
      />
    ),
    href: "mailto:shekharsumit65@gmail.com",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Sumit-72",
  },
  {
    title: "LinkedIn",
    icon: (
      <img 
      src="https://th.bing.com/th/id/OIP.ozDiSGJlUqI6815cRlJiNAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      className=" text-neutral-500 dark:text-neutral-300  p-0 m-0 "
      />
    ),
    href: "https://www.linkedin.com/in/sumit-shekhar72",
  },
  {
    title: "LeetCode",
    icon: (
      <img 
      src="https://nil1729.github.io/LEETCODE-001/images/logo.png"
      className=" text-neutral-500 dark:text-neutral-300  p-0 m-0 "
      />
    ),
    href: "https://leetcode.com/u/Sumit_72/",
  },
  {
    title: "HackerRank",
    icon: (
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
      className=" text-neutral-500 dark:text-neutral-300  p-0 m-0 "
      />
    ),
    href: "https://www.hackerrank.com/profile/shekharsumit65",
  },
];

const Dock = () => {
  return (
      <div className="flex items-center justify-center h-[5rem] w-auto shadow-2xl border m-9 mt-14 rounded-full bg-slate-400 dark:bg-background">
        <FloatingDock items={links} />
      </div>
  );
};

export default Dock;
