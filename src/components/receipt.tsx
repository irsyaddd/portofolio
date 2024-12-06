import { cn } from "@/lib/utils";
import React from "react";

export default function Receipt({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border rounded-sm dark:text-black p-4 w-[58%] h-[20rem]",
        "shadow-sm hover:shadow-md bg-white transition-all",
        "duration-200 ease-in-outn will-change-transform",
        className
      )}
      {...props}
    >
      Receipt
    </div>
  );
}
