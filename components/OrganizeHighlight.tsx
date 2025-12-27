"use client";

export default function OrganizeHighlight() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* ===== BACKGROUND GRADIENT ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-400 opacity-90 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* ===== TOP HEADING ===== */}
        <h2 className="font-serif text-[42px] leading-tight tracking-tight text-black md:text-[48px]">
          Built for individuals
          <br />
          Ready for organizations.
        </h2>

        {/* ===== MAIN CARD ===== */}
        <div className="relative mt-16 rounded-[28px] bg-white px-10 py-14 shadow-xl ring-1 ring-black/5">
          {/* Badge */}
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-red-500">
            ORGANIZE
          </p>

          {/* Card heading */}
          <h3 className="text-center text-[28px] font-semibold leading-tight text-black md:text-[34px]">
            Quickly access
            <br />
            what you need frequently
          </h3>

          {/* ===== TAG ROW ===== */}
          <div className="mx-auto mt-14 flex max-w-[760px] flex-wrap items-center justify-center gap-3">
            <Tag label="Important Notes" color="bg-yellow-400" className="-rotate-30" />
            <Tag label="Project References" color="bg-blue-400" className="rotate-4" />
            <Tag label="Article selection" color="bg-zinc-300" className="-rotate-4" />
            <Tag label="My vacation" color="bg-pink-400" className="rotate-6" />
            <Tag label="Code Snippets" color="bg-purple-400" className="-rotate-12" />
            <Tag label="Read Later" color="bg-red-400" />
            <Tag label="Email Templates" color="bg-green-400" className="rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== TAG COMPONENT (ENHANCED) ===== */
function Tag({
  label,
  color,
  className,
}: {
  label: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`
        group relative
        flex items-center gap-2
        rounded-full bg-zinc-100 px-4 py-2
        text-sm font-medium text-zinc-800
        shadow-sm ring-1 ring-black/5
        whitespace-nowrap

        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:scale-[1.06]
        hover:shadow-lg
        hover:bg-white

        active:scale-[0.98]

        ${className}
      `}
    >
      {/* subtle glow on hover */}
      <div
        className="
          pointer-events-none absolute inset-0
          rounded-full
          opacity-0
          blur-md
          transition-opacity duration-300
          group-hover:opacity-60
        "
        style={{ background: "linear-gradient(90deg,#a5b4fc,#c4b5fd,#93c5fd)" }}
      />

      {/* dot */}
      <span
        className={`
          relative z-10 h-3 w-3 rounded-full ${color}
          transition-transform duration-300
          group-hover:scale-110
        `}
      />

      {/* text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {label}
      </span>
    </div>
  );
}
