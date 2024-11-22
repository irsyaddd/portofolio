import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function FancyButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const downloadLink = 'https://drive.google.com/uc?export=download&id=1xybAOngpDJdOAtGeSbBZNDR--ZjCXlzh'
  const viewLink = 'https://drive.google.com/file/d/1xybAOngpDJdOAtGeSbBZNDR--ZjCXlzh/view?usp=sharing'
  return (
    <div className={cn(className,"dark:bg-black/20 bg-black p-[.1rem] rounded-md")}>
      <Button  className="bg-[#1d1f23] relative overflow-hidden drop-shadow-lg shadow-black/20 dark:text-white border-t-[1.5px] border-t-white/30 active:border-t-white/0 tracking-tighter">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 w-full h-full active:hidden transition duration-100 ease-in-out" />
        View Resume
      </Button>
    </div>
  );
}
