"use client";

import Image from "next/image";

export default function FullPictureSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div
        className="
          mx-auto
          w-[92%]
          sm:w-[90%]
          lg:w-[80%]
          text-center
        "
      >
        {/* Top floating icons pill */}
        <div
  className="
    group
    mx-auto mb-10
    flex w-fit items-center gap-6
    rounded-full bg-white
    px-10 py-4
    shadow-md ring-1 ring-black/5
    transition-all duration-500
    hover:shadow-xl
    hover:ring-indigo-500/20
  "
>
  {[
    "/icons/openai.png",
    "/icons/perplexity.png",
    "/icons/clouldai.png",
    "/icons/icon1.png",
    "/icons/icon2.png",
    "/icons/vector.png",
  ].map((src, i) => (
    <div
      key={i}
      className="
        relative
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:scale-[1.25]
        hover:z-10
        hover:drop-shadow-[0_18px_30px_rgba(99,102,241,0.45)]
      "
    >
      {/* soft glow */}
      <div
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-indigo-400/30
          blur-lg
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <Image
        src={src}
        alt="AI Model"
        width={26}
        height={26}
        className="
          opacity-70
          transition-opacity duration-300
          hover:opacity-100
        "
      />
    </div>
  ))}

  <span className="ml-3 text-sm text-zinc-400 transition-colors group-hover:text-zinc-500">
    Soon
  </span>
</div>


        {/* Heading */}
        <h2
          className="
            font-serif
            text-[34px]
            leading-tight
            tracking-tight
            text-black
            sm:text-[40px]
            md:text-[46px]
          "
        >
          Ditch the tabs,
          <br />
          get the full picture.
        </h2>

        {/* Sub text */}
        <p
          className="
            mx-auto mt-6
            max-w-2xl
            text-sm
            leading-6
            text-zinc-500
            sm:text-base
          "
        >
          Workflow.ai keeps your AI work structured, searchable, and collaborative —
          so insights don’t get lost across tools, screenshots, or personal accounts.
        </p>
      </div>
    </section>
  );
}
