"use client";

export default function PricingCTASection() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ================= TOP MOCK PANEL ================= */}
      <div className="relative z-10 mx-auto mt-16 w-[92%] sm:w-[90%] lg:w-[80%]">
        
      </div>

      {/* ================= GRADIENT CTA ================= */}
      <div className="relative mt-[-80px] sm:mt-[-120px] bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-400 py-20 sm:py-28">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-150px] h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full bg-pink-300/40 blur-[140px]" />
        </div>

        <div className="relative mx-auto w-[92%] sm:w-[90%] lg:w-[80%]">
          <h2 className="max-w-xl font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-black">
            Ready to simplify how you work with AI?
          </h2>

          <p className="mt-4 max-w-xl text-sm sm:text-base leading-6 text-black/70">
            Start using Workflow.ai and experience effortless AI — across
            models, teams, and projects.
          </p>

          <button
            className="
              mt-6 sm:mt-8
              inline-flex items-center gap-2
              rounded-full bg-black px-6 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:scale-105 hover:bg-zinc-800
              active:scale-95
            "
          >
            Get started for free →
          </button>
        </div>
      </div>
    </section>
  );
}
