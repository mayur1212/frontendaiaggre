"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
  className="
    sticky top-0 z-50 w-full
    border-b border-zinc-200/60
    bg-white
    transition-all
  "
>

      {/* FULL WIDTH CONTAINER */}
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">

        {/* LEFT — LOGO */}
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-zinc-900 transition-transform duration-300 group-hover:scale-105">
            Work
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-purple-600 transition-transform duration-300 group-hover:scale-105">
            Flow
          </span>
        </div>

        {/* CENTER — PREMIUM PILL NAV */}
        <nav className="hidden md:flex">
          <div className="relative flex items-center gap-6 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 px-7 py-2.5 text-sm font-semibold text-zinc-900 shadow-lg ring-1 ring-white/50 transition-all duration-500 hover:shadow-xl">
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-30" />

            <Link href="#features" className="relative z-10 transition hover:opacity-80">
              Features
            </Link>

            <span className="relative z-10 opacity-50">›</span>

            <Link href="#blog" className="relative z-10 transition hover:opacity-80">
              Blog
            </Link>
          </div>
        </nav>

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="hidden sm:block text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Contact
          </Link>

          <button className="group relative overflow-hidden rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Try for free →</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
          </button>
        </div>

      </div>
    </header>
  );
}
