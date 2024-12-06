import { Button } from "@/components/ui/button";
import { contacts } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Contacts({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex", className)}>
      {contacts.map((item, index) => (
        <Button variant="ghost" key={index} size={"icon"}>
          <Link href={item.link}>
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
