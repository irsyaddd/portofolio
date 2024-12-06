import { cn } from "@/lib/utils";
import React from "react";

export default function ContentWrapper({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, "container max-w-7xl")} {...props}>
      {children}
    </div>
  );
}
