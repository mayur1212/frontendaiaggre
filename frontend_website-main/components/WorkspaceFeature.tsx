"use client";

export default function WorkspaceFeature() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Gradient Card */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 p-10 text-white shadow-xl">

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-black">
                One workspace. Every model.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/70">
                Switch between AI models instantly — without losing context,
                history, or collaborators.
              </p>

              <ul className="mt-4 space-y-1 text-sm text-black/70">
                <li>• Unified chat interface</li>
                <li>• Model switching inside the same conversation</li>
                <li>• Shared visibility across teams</li>
              </ul>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-800">
                  Try it out →
                </button>

                <button className="inline-flex items-center gap-2 rounded-full bg-white/30 px-5 py-2 text-sm font-semibold text-black backdrop-blur hover:bg-white/40">
                  Subscribe →
                </button>
              </div>
            </div>

            {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
<div className="relative flex items-center justify-center">

  {/* Bubble 1 (BACK – left & higher) */}
  <div
    className="
      absolute right-32 top-6
      z-10
      max-w-[260px]
      -rotate-3
      rounded-2xl
      bg-white
      px-6 py-4
      text-[15px] font-medium text-zinc-900
      leading-snug
      shadow-[0_14px_36px_rgba(0,0,0,0.18)]
    "
  >
    <div>Help me make this</div>
    <div>project map,</div>
    <div className="mt-1 font-semibold">Claude!</div>
  </div>

  {/* Bubble 2 (FRONT – lower & overlapping) */}
  <div
    className="
      absolute right-8 top-20
      z-20
      rotate-2
      max-w-[260px]
      rounded-2xl
      bg-white
      px-6 py-4
      text-[15px] font-medium text-zinc-900
      shadow-[0_18px_44px_rgba(0,0,0,0.22)]
    "
  >
    Help me research,
    <br />
    <span className="font-semibold">Gemini!</span>
  </div>

  {/* Input pill */}
  <div
    className="
      mt-44 w-full max-w-md
      rounded-full
      bg-gradient-to-r from-pink-300/70 to-indigo-300/70
      px-8 py-4
      text-center
      text-sm font-semibold text-white
      shadow-xl
      backdrop-blur-md
    "
  >
    Ask or request…
  </div>

</div>




          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
