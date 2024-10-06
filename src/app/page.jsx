import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col xl:w-[85vw] lg:mx-auto lg:flex-row gap-10 justify-center items-center mt-20">
      {/* Image Container */}
      <div className="w-full flex justify-center items-center p-2 lg:p-0">
        <Image
          src="/bg-icons/Homepage.gif"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
      {/* Text Container */}
      <div className="w-full p-5 xl:p-0 flex flex-col gap-5">
        <h1 className="text-4xl lg:text-5xl font-mono font-semibold">
          Hi, I&apos;m Sumit
        </h1>
        <p className="text-xl">
          A passionate Full-Stack Developer with a focus on building dynamic and
          user-friendly web applications. With a deep understanding of both
          frontend and backend technologies, I thrive on turning complex
          problems into elegant, scalable solutions. Whether it's designing
          responsive interfaces or optimizing backend performance, I&apos;m
          always excited to learn, innovate, and push the boundaries of
          technology. I enjoy collaborating with teams to create seamless
          digital experiences and constantly seek new challenges to enhance my
          skills.
        </p>
        <p className="text-xl">Let’s create something amazing together!</p>
        <div className="flex gap-8 mt-5">
          <Link
            className="p-2 border bg-orange-700 opacity-90 hover:opacity-100 text-white text-xl font-mono rounded flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300"
            href={"/portfolio"}
          >
            View My Work
          </Link>
          <Link
            className="p-2 border text-orange-600 border-orange-500 text-xl flex items-center justify-center hover:bg-orange-700 rounded hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            href={"/contact"}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
