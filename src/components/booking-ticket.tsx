import { cn } from "@/lib/utils";
import React from "react";
import SmileySVG from "./smiley-svg";

export default function BookingTicket({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-[58%] h-[20rem] flex flex-col gap-5 items-center justify-center text-center bottom-3 dark:text-black rounded-sm p-4 transition-all duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      <SmileySVG />
    </div>
  );
}
