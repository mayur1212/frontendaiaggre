"use client";

import Image from "next/image";

export default function PromptToProjectSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0f] py-24 sm:py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-pink-500/30 blur-[160px]" />
      </div>

      {/* 80% container */}
      <div className="mx-auto w-[80%]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE — TITLE + IMAGES */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              From Prompt
              <br />
              to Project — effortlessly.
            </h2>

            {/* Image 1 */}
            <div className="relative mt-10 max-w-xl">
              <Image
                src="/icons/shell1.png"
                alt="Project terminal preview"
                width={1400}
                height={800}
                className="w-full rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
                priority
              />
            </div>

            {/* Image 2 (SAME IMAGE BELOW) */}
            <div className="relative mt-8 max-w-xl">
              <Image
                src="/icons/shell12.png"
                alt="Project terminal preview"
                width={1400}
                height={800}
                className="w-full rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>

          {/* RIGHT SIDE — TEXT */}
          <p className="text-sm sm:text-base leading-6 text-white/70 max-w-md">
            Turn conversations into shared knowledge.
            <br />
            Add chats to projects.
            <br />
            Revise decisions and outputs anytime.
            <br />
            Keep discussions, prompts, and results together.
            <br />
            <span className="opacity-80">
              Designed for teams that think, build, and decide with AI.
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}
