"use client";

import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { useBreakpoint, useMounted } from "@/lib/hooks";
import { cn } from "@/lib/utils";

import { breakpoints, projects } from "@/data";
import { lgLayout, mdLayout, smLayout } from "@/data/layout";
import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function ProjectsGrid() {
  const isMounted = useMounted();
  const { breakpoint, setBreakpoint } = useBreakpoint();
  const layouts = { lg: lgLayout, md: mdLayout, sm: smLayout };

  const children = React.useMemo(() => {
    return projects.map((val) => {
      return (
        <div
          key={val.i}
          className={cn(
            "group/grid-item border z-50 overflow-hidden",
            "dark:border-white/10 dark:bg-zinc-800 rounded-sm",
            "shadow-sm project-text relative",
            val.bgColor ?? "bg-white"
          )}
        >
          {val.project_content}
          {val.isWIP && (
            <Dialog>
              <DialogTrigger asChild className="absolute top-3 right-3 cursor-pointer">
                <Badge variant={'secondary'}>Work In Progress</Badge>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{val.title}</DialogTitle>
                  <DialogDescription>
                    {val.desc}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          <span
            className={cn(
              "group-hover/grid-item:text-indigo-500",
              "transition-colors duration-100 ease-in lg:max-w-52",
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
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        containerPadding={[0, 0]}
        rowHeight={30}
        isBounded
        isResizable={false}
        onBreakpointChange={setBreakpoint}
        isDraggable={["lg", "md"].includes(breakpoint)}
        breakpoints={breakpoints}
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
}
