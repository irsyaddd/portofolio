import React from "react";

export default function ClueCatch() {
  return (
    <div className="group center-absolute">
      <div className="flex relative w-44 h-44 p-4">
        <div className="h-full w-full -translate-x-2 -rotate-6 group-hover:-translate-x-6 absolute inset-0 rounded-md bg-white transition-transform duration-300 ease-in-out group-hover:-rotate-[10deg] shadow-sm border" />
        <div className="h-full w-full translate-x-1 group-hover:translate-x-4 absolute inset-0 rounded-md bg-white transition-transform duration-300 ease-in-out group-hover:rotate-[2deg] shadow-sm border z-10" />
        <div className="h-full w-full translate-x-4 rotate-6 group-hover:translate-x-12 absolute inset-0 rounded-md bg-white transition-transform duration-300 ease-in-out group-hover:rotate-[10deg] shadow-sm z-20 border" />
      </div>
    </div>
  );
}
