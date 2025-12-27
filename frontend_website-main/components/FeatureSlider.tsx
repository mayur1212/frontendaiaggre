"use client";

import Image from "next/image";

const FEATURES = [
  { title: "Secure & Private", image: "/images/feature1.png" },
  { title: "Multi-Model Access", image: "/images/feature2.png" },
  { title: "Organization Management", image: "/images/feature3.png" },
  { title: "Collaborative AI", image: "/images/feature4.png" },
  { title: "Project-Based Chats", image: "/images/feature5.png" },
  { title: "Token Control", image: "/images/feature6.png" },
];

export default function FeatureSlider() {
  return (
    <section className="bg-white py-16">
  <div className="mx-auto w-[80%] max-w-7xl">

    <div
      className="
        flex gap-6 overflow-x-auto pb-6
        scroll-smooth snap-x snap-mandatory
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >

          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="
                group snap-start min-w-[260px]
                rounded-2xl bg-white
                ring-1 ring-black/5
                shadow-sm
                transition-all duration-500 ease-out
                hover:-translate-y-2
                hover:shadow-2xl
                hover:ring-indigo-400/40
                animate-fade-up
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >

             {/* TITLE BELOW IMAGE */}
              <div className="p-4">
                <h3
                  className="
                    text-sm font-semibold text-zinc-900
                    transition-colors duration-300
                    group-hover:text-indigo-600
                  "
                >
                  {item.title}
                </h3>

                {/* animated accent bar */}
                <div
                  className="
                    mt-2 h-1.5 w-10 rounded-full
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                    transition-all duration-500
                    group-hover:w-16
                  "
                />
              </div>
              {/* IMAGE */}
              <div className="relative h-36 w-full overflow-hidden rounded-t-2xl bg-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="260px"
                  className="
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />

                {/* glow overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
