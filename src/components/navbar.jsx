"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React, { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  return (
    <div className="h-full flex justify-between items-center px-4 sm:p8-6 md:px-12 lg:px-20 xl:px-48 transition-all duration-300">
      <div>
        <Link href="/">
          <div className="flex flex-row font-semibold gap-1 bg-black p-2  text-white justify-center items-center">
            <span className="flex justify-center p-1">Sumit</span>
            <span className="bg-white rounded-lg p-1 text-black flex justify-center">
              Mandal
            </span>
          </div>
        </Link>
      </div>
      {/* Smaller screen */}

      <button
        className="md:hidden w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setSidebarIsActive((prev) => !prev)}
      >
        <div
          className={`${
            sidebarIsActive ? "bg-white" : "bg-black"
          } w-10 h-1 bg-black rounded-lg`}
        ></div>
        <div
          className={`${
            sidebarIsActive ? "bg-white" : "bg-black"
          } w-10 h-1 rounded-lg`}
        ></div>
        <div
          className={`${
            sidebarIsActive ? "bg-white" : "bg-black"
          } w-10 h-1  rounded-lg`}
        ></div>
      </button>

      {sidebarIsActive && (
        <div className="fixed inset-0 w-screen h-screen bg-black text-white flex justify-center items-center flex-col gap-5 text-2xl">
          {links.map((link) => {
            return (
              <Link
                className={`${
                  path === link.url
                    ? "bg-orange-700  px-8 rounded-full"
                    : "px-4"
                } py-2 `}
                key={link.url}
                href={link.url}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      )}

      {/* Medium and above screen */}
      <div className="hidden md:flex h-10 justify-center items-center">
        {links.map((link) => {
          return (
            <Link
              className={`${
                path === link.url
                  ? "bg-orange-700 text-white px-4 lg:px-8 rounded-full"
                  : "px-2 lg:px-4"
              } py-1 lg:py-2`}
              key={link.url}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex text-3xl gap-3 lg:gap-5">
        <Link
          className="text-blue-800 hover:shadow-2xl hover:scale-110 transition-all duration-500"
          href="https://www.linkedin.com/in/mandal-sumit/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="text-green-700 hover:shadow-2xl hover:scale-110 transition-all duration-500"
          href="https://www.hackerrank.com/profile/Benzy"
          target="_blank"
        >
          <FaHackerrank />
        </Link>
        <Link
          className="hover:shadow-2xl hover:scale-110 transition-all duration-500"
          href="https://github.com/B3nzy"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
