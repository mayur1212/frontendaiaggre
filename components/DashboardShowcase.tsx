"use client";

import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-300 via-purple-400 to-indigo-500 blur-[160px] opacity-70" />
      </div>

      {/* 80% width container */}
      <div className="mx-auto w-[70%]">
        <div className="relative mx-auto w-full rounded-[22px]">
          <Image
            src="/icons/banner1.png"
            alt="Dashboard preview"
            width={1800}
            height={1100}
            className="w-full rounded-[16px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
