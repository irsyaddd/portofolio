import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

export default function Receipt({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border rounded-sm dark:text-black p-3 w-[58%] h-[20rem]",
        "shadow-sm hover:shadow-md bg-white transition-all",
        "duration-200 ease-in-outn will-change-transform",
        className
      )}
      {...props}
    >
      <div className="py-3 px-2.5 flex justify-between items-start">
        <div>
          <p className="font-medium tracking-tight">Order #98745</p>
          <p className="text-xs text-muted-foreground">
            Oct 29, 2024 | $478.80
          </p>
        </div>
        <Badge className="flex gap-2 rounded-full bg-teal-100 shadow-none" variant={'default'}>
          <CheckCircle2 size={14} color="#10b981" />
          Badge
        </Badge>
      </div>
    </div>
  );
}
