import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

export default function Receipt({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, 'text-2xl font- tracking-tight normal-case')} {...props}>
      <p className="font-bold">FRONTEND</p>
      <p className="font-semibold">FRONTEND</p>
      <p className="font-medium">FRONTEND</p>
      <p className="font-normal">FRONTEND</p>
      <p className="font-light">FRONTEND</p>
      <p className="font-extralight text-black/70 dark:text-white/70">FRONTEND</p>
      <p className="font-thin text-black/60 dark:text-white/60">FRONTEND</p>
    </div>
  );
}
