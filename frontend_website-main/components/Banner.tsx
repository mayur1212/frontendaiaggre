"use client";

import Image from "next/image";
import { TypingAnimation, AnimatedSpan } from "@/registry/magicui/terminal";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
      {/* ===== Background glow ===== */}
      <div className="pointer-events-none absolute -top-40 left-0 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />

      {/* ===== 80% Responsive Container ===== */}
      <div className="container-app text-center">
        <div className="relative inline-block">

          {/* ================= LINE 1 ================= */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h1
              className="
                font-serif
                text-[clamp(40px,6vw,100px)]
                leading-[1.05]
                text-black
              "
            >
              <TypingAnimation>
                One conversation
              </TypingAnimation>
            </h1>

            {/* Avatar */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "900ms" }}
            >
              <div className="flex flex-col items-center animate-float">
                <Image
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Avatar"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-orange-400 bg-white"
                />
                <div className="h-8 w-[3px] bg-orange-400" />
              </div>
            </div>
          </div>

          {/* ================= LINE 2 ================= */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <h1
              className="
                font-serif
                text-[clamp(40px,6vw,100px)]
                leading-[1.05]
                text-black
              "
            >
              <TypingAnimation delay={1200}>
                Every mind,
              </TypingAnimation>
            </h1>

            {/* Avatar */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "2200ms" }}
            >
              <div className="flex flex-col items-center animate-float-delayed">
                <Image
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Avatar"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-pink-500 bg-white"
                />
                <div className="h-8 w-[3px] bg-pink-500" />
              </div>
            </div>
          </div>

          {/* ================= LINE 3 ================= */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">

            <span
              className="
                font-serif
                text-[clamp(36px,5.5vw,96px)]
                leading-[1.05]
                text-black
              "
            >
              <TypingAnimation delay={2400}>
                with
              </TypingAnimation>
            </span>

            {/* Avatar */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "3400ms" }}
            >
              <div className="flex flex-col items-center animate-float">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-purple-500 bg-white"
                />
                <div className="h-8 w-[3px] bg-purple-500" />
              </div>
            </div>

            {/* Pill */}
            <AnimatedSpan
              delay={3600}
              className="
                rounded-[18px]
                bg-blue-600
                px-6 py-2
                font-serif
                text-[clamp(28px,4vw,56px)]
                text-white
                shadow-lg
              "
            >
              Every model
            </AnimatedSpan>

            {/* Avatar */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "4500ms" }}
            >
              <div className="flex flex-col items-center animate-float-delayed">
                <Image
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="Avatar"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-blue-500 bg-white"
                />
                <div className="h-8 w-[3px] bg-blue-500" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
