"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  type: string;
  text: string;
  href: string;
  icon: React.ReactNode;
};

export default function Nav() {
  const params = usePathname();

  const navItems: NavItem[] = [
    {
      type: "to-tailwind",
      text: "To Tailwind",
      href: "/",
      icon: (
        <svg
          className="h-4 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L3 21H21L12 2ZM12 6.3L17.24 18H6.76L12 6.3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      type: "from-tailwind",
      text: "From Tailwind",
      href: "/from-tailwind",
      icon: (
        <svg
          className="h-4 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22L21 3H3L12 22ZM12 17.7L6.76 6H17.24L12 17.7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="w-full">
      <div className="flex w-full justify-center overflow-clip rounded-md border border-neutral-700 sm:w-fit">
        {navItems.map((item) => (
          <Link
            key={item.type}
            href={item.href}
            className={`flex flex-grow items-center justify-center p-3 text-white transition-all duration-200 ease-in-out ${params === item.href ? `bg-neutral-800` : ""}`}
          >
            <div className="flex items-center gap-1">
              {item.icon}
              <span>{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
