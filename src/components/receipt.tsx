import { cn } from "@/lib/utils";
import React from "react";

export default function Receipt({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border h-[320px] rounded-sm dark:text-black p-4 shadow-sm hover:shadow-md w-64 bg-white transition-all duration-200 ease-in-outn will-change-transform",
        className
      )}
      {...props}
    >
      Receipt
    </div>
  );
}
