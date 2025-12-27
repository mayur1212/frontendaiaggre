"use client";

import Image from "next/image";

export default function TeamSamePageSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[75%]">

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-3">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/icons/leftsideimage.png"
              alt="Team collaboration"
              width={300}
              height={180}
              className="rounded-2xl"
            />
          </div>

          {/* CENTER — TITLE + TEXT */}
          <div className="text-center">
            <h2 className="font-serif text-4xl leading-tight text-black md:text-5xl">
              Your team,
              <br />
              literally on the
              <br />
              same page.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-zinc-600">
              Invite teammates into the same chat and collaborate in real time —
              reviewing outputs, refining prompts, and aligning decisions without
              copy-paste chaos.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/icons/rightsideimage.png"
              alt="Shared workspace"
              width={300}
              height={180}
              className="rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
