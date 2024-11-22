import { cn } from "@/lib/utils";
import React from "react";

export default function LernitLMS({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-baseline gap-1", className)}>
      <p className="normal-case font-semibold tracking-tighter font-sans text-3xl">
        Lernitt
      </p>
      <div className="h-2 w-2 rounded-full bg-indigo-400" />
    </div>
  );
}
