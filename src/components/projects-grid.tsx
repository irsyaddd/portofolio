"use client";

import React from "react";
import GridLayout from "react-grid-layout";

import { useMounted } from "@/lib/hooks";
import { cn } from "@/lib/utils";

import { projects } from "@/data";
import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { useRouter } from "next/navigation";

export default function ProjectsGrid() {
  const isMounted = useMounted();
  const router = useRouter();

  const children = React.useMemo(() => {
    return projects.map((val) => {
      return (
        <div
          data-grid={val.block_config}
          key={val.block_config.i}
          className={cn(
            "group/grid-item border z-50 overflow-hidden",
            "dark:border-white/10 dark:bg-zinc-800 rounded-sm",
            "shadow-sm project-text relative cursor-pointer",
            val.bgColor ?? "bg-white"
          )}
        >
          {val.project_content}
          <span
            className={cn(
              "group-hover/grid-item:text-indigo-500",
              "transition-colors duration-100 ease-in max-w-24",
              val.textColor
            )}
          >
            {val.title}
          </span>
        </div>
      );
    });
  }, []);

  return (
    <div
      className={cn(
        isMounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        "transition-[opacity,_transform] duration-700 delay-150"
      )}
    >
      <GridLayout
        className="layout"
        useCSSTransforms={false}
        containerPadding={[0, 0]}
        resizeHandles={["nw", "se"]}
        cols={4}
        rowHeight={30}
        maxRows={120}
        width={1088}
      >
        {children}
      </GridLayout>
    </div>
  );
}
