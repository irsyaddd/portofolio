"use client";

import React from "react";
import GridLayout from "react-grid-layout";

import { useMounted } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Contacts from "./contacts";

import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { ThemeToggle } from "./theme-toogle";
import FancyButton from "./fancy-button";
import BookingTicket from "./booking-ticket";
import Receipt from "./receipt";
import { BackgroundColor, TextColor } from "@/types/tailwind";
import ClueCatch from "./cluecatch";

type Props = {
  title: string;
  block_config: {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    static?: boolean;
    isResizable?: boolean;
  };
  bgColor?: BackgroundColor;
  textColor?: TextColor;
  project_content?: React.ReactNode;
};

const projects: Props[] = [
  {
    title: "Fancy Button",
    block_config: { i: "PRJ-1", x: 0, y: 0, w: 1, h: 6, isResizable: false },
    project_content: <FancyButton />,
  },
  {
    title: "Some UI Exploration",
    block_config: { i: "PRJ-2", x: 1, y: 0, w: 2, h: 10, isResizable: false },
    project_content: <BookingTicket />,
  },
  {
    title: "Contact",
    block_config: { i: "CONTACT", x: 3, y: 0, w: 1, h: 4, isResizable: false },
    project_content: <Contacts />,
  },
  {
    title: "See More",
    block_config: { i: "SeeMore", x: 3, y: 0, w: 1, h: 2, isResizable: false },
  },
  {
    title: "",
    block_config: {
      i: "darkomode-toggle",
      x: 3,
      y: 0,
      w: 1,
      h: 4,
      isResizable: false,
    },
    project_content: <ThemeToggle />,
  },
  {
    title: "Another UI Exploration",
    block_config: { i: "PRJ-3", x: 0, y: 0, w: 1, h: 10, isResizable: false },
    project_content: <Receipt />,
  },
  {
    title: "ClueCatch",
    block_config: { i: "PRJ-4", x: 1, y: 1, w: 2, h: 6, isResizable: false },
    project_content: <ClueCatch />,
  },
  {
    title: "Lernit LMS",
    block_config: { i: "PRJ-5", x: 3, y: 1, w: 1, h: 6, isResizable: false },
  },
];

export default function ProjectsGrid() {
  const isMounted = useMounted();

  const children = React.useMemo(() => {
    return projects.map((val) => {
      return (
        <div
          key={val.block_config.i}
          className={cn(
            "group border z-50 overflow-hidden dark:border-white/10 dark:bg-zinc-800 rounded-sm shadow-sm project-text relative",
            val.bgColor ?? "bg-white"
          )}
          data-grid={val.block_config}
        >
          {val.project_content}
          <span
            className={cn(
              "group-hover:text-indigo-500 transition-colors duration-100 ease-in max-w-24",
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
