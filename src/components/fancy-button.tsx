import React from "react";
import { Button } from "./ui/button";

export default function FancyButton() {
  return (
    <div className="center-absolute">
      <Button className="bg-[#1d1f23] relative overflow-hidden drop-shadow-lg shadow-black/20 dark:text-white border-t-[1.5px] border-t-white/30">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 from-5% w-full h-full" />
        Button
      </Button>
    </div>
  );
}
