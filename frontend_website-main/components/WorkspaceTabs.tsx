"use client";

import { useState } from "react";

type TabId = "workspace" | "discussions" | "docs";

export default function WorkspaceTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("workspace");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= TABS HEADER ================= */}
        <div className="grid grid-cols-3 border-b border-zinc-200 text-center">

          {/* TAB 1 */}
          <button
            onClick={() => setActiveTab("workspace")}
            className={`group relative pb-6 transition-all duration-300
              ${
                activeTab === "workspace"
                  ? "text-black"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
          >
            <div
              className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg
              transition-all duration-300
              ${
                activeTab === "workspace"
                  ? "bg-black text-white shadow-md"
                  : "bg-zinc-200 text-zinc-500 group-hover:-translate-y-0.5"
              }`}
            >
              @
            </div>

            <p className="text-sm font-semibold">
              Centralized Workspace
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Everything your team needs, in one shared place.
            </p>

            {activeTab === "workspace" && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-black animate-underline" />
            )}
          </button>

          {/* TAB 2 */}
          <button
            onClick={() => setActiveTab("discussions")}
            className={`group relative pb-6 transition-all duration-300
              ${
                activeTab === "discussions"
                  ? "text-black"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
          >
            <div
              className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg
              transition-all duration-300
              ${
                activeTab === "discussions"
                  ? "bg-black text-white shadow-md"
                  : "bg-zinc-200 text-zinc-500 group-hover:-translate-y-0.5"
              }`}
            >
              💬
            </div>

            <p className="text-sm font-semibold">
              Built-in Discussions
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Discuss and resolve ideas right where the work happens.
            </p>

            {activeTab === "discussions" && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-black animate-underline" />
            )}
          </button>

          {/* TAB 3 */}
          <button
            onClick={() => setActiveTab("docs")}
            className={`group relative pb-6 transition-all duration-300
              ${
                activeTab === "docs"
                  ? "text-black"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
          >
            <div
              className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg
              transition-all duration-300
              ${
                activeTab === "docs"
                  ? "bg-black text-white shadow-md"
                  : "bg-zinc-200 text-zinc-500 group-hover:-translate-y-0.5"
              }`}
            >
              📄
            </div>

            <p className="text-sm font-semibold">
              Collaborative AI Docs
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Create and refine AI outputs together.
            </p>

            {activeTab === "docs" && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-black animate-underline" />
            )}
          </button>
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="mt-16">

          {activeTab === "workspace" && (
            <div
              key="workspace"
              className="max-w-3xl text-zinc-800 animate-fade-up"
            >
              <p className="text-sm leading-6">
                It happened{" "}
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-blue-600">
                  20/12/2020, 04:23
                </span>
                . Let’s debug this together{" "}
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-blue-600">
                  Laurence
                </span>
                .
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Here are some action items to divide the work and tackle this issue
                as soon as possible. Let me know if you have any questions!
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3 transition-colors hover:text-black">
                  <input type="checkbox" checked readOnly />
                  <span>
                    Look at http response rates{" "}
                    <span className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-600">
                      Laurence
                    </span>
                  </span>
                </li>

                <li className="flex items-center gap-3 transition-colors hover:text-black">
                  <input type="checkbox" />
                  <span className="text-zinc-600">
                    Investigate logs for billing api{" "}
                    <span className="text-blue-600">@Mjl</span>
                  </span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "discussions" && (
            <p
              key="discussions"
              className="max-w-2xl text-sm leading-6 text-zinc-600 animate-fade-up"
            >
              Start conversations directly in context. Mention teammates,
              resolve threads, and keep decisions tied to the work.
            </p>
          )}

          {activeTab === "docs" && (
            <p
              key="docs"
              className="max-w-2xl text-sm leading-6 text-zinc-600 animate-fade-up"
            >
              Collaborate on AI-generated documents, refine outputs together,
              and keep everything versioned and searchable.
            </p>
          )}
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.35s ease-out;
        }

        @keyframes underline {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-underline {
          animation: underline 0.3s ease-out;
          transform-origin: left;
        }
      `}</style>
    </section>
  );
}
