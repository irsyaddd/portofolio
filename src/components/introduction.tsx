"use client";

import React from "react";
import { ThemeToggle } from "./theme-toogle";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/hooks";

export default function Introduction() {
  const isMounted = useMounted();
  return (
    <Header
      className={cn(
        isMounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        "transition-[opacity,_transform] duration-700",
        "flex flex-col"
      )}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold font-mono uppercase md:text-3xl text-2xl tracking-tight">
          Irsyad Al Ghifary
        </h1>
      </div>
      <div className="dark:text-paragraph-dark text-paragraph-light my-10 md:w-1/2 text-balance">
        <p>
          Frontend developer blending{" "}
          <span className="font-artsy italic">creativity</span> and{" "}
          <span className="font-artsy italic">technical skills</span> to craft
          memorable digital experiences. Passionate about frontend learning and currently like to read and
          experiment with Three.js and Motion.
        </p>
      </div>
    </Header>
  );
}

function Header({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props} className={className}>
      {children}
    </section>
  );
}
