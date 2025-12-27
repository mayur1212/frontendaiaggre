"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export function TypingAnimation({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(children.slice(0, i + 1));
        i++;
        if (i === children.length) clearInterval(interval);
      }, 40);
    }, delay);

    return () => clearTimeout(timeout);
  }, [children, delay]);

  return <span className={className}>{text}</span>;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-block opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}

export function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-black p-4 font-mono text-sm text-white">
      {children}
    </div>
  );
}
