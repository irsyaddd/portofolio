import { cn } from "@/lib/utils";
import React from "react";

export default function BookingTicket({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-[58%] h-[20rem] border bottom-3 bg-white dark:text-black shadow-sm hover:shadow-md rounded-sm p-4 scale-[0.97] hover:scale-100 transition-all duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      Booking Ticket
    </div>
  );
}
