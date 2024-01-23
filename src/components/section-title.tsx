import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h3
      className={cn(className, "text-xs uppercase font-mono tracking-widest")}
      {...props}
    >
      {children}
    </h3>
  );
}
