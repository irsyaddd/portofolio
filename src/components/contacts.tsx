import { Button } from "@/components/ui/button";
import { contacts } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Contacts() {
  return (
    <Contact className="flex gap-4">
      {contacts.map((item, index) => (
        <Button variant="outline" size={"icon"} key={index} asChild>
          <Link href={item.link}>
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </Link>
        </Button>
      ))}
    </Contact>
  );
}

function Contact({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, "flex gap-4")} {...props}>
      {children}
    </div>
  );
}
