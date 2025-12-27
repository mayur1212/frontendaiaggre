"use client";

export default function CTASection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 md:py-20">
      
      {/* CONTENT WRAPPER (90% width) */}
      <div className="mx-auto w-[90%] text-center">
        
        {/* Text block */}
        <p className="mx-auto max-w-none text-sm leading-6 text-zinc-500 sm:text-base md:text-lg">
          All your AI conversations, finally in one place.
          <br />
          Access GPT (all models), Claude, Grok, and more — from a single, shared workspace.
          <br />
          <span className="md:whitespace-nowrap">
            Collaborate with your team, organise conversations into projects, and stay in control of usage.
          </span>
        </p>

        {/* CTA Button */}
        <div className="mt-7 sm:mt-8 flex justify-center">
          <button
            className="
              inline-flex items-center gap-2
              rounded-full bg-black px-6 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-zinc-800 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-black/30
            "
          >
            Get started for free
            <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
