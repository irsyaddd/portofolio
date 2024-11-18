"use client";

import React from "react";
import GridLayout from "react-grid-layout";

import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

type Props = {
  title: string;
  block_config: {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    isResizable: boolean;
  };
};

const projects: Props[] = [
  {
    title: "Fancy Button",
    block_config: { i: "PRJ-1", x: 0, y: 0, w: 4, h: 6, isResizable: true },
  },
  {
    title: "Booking Ticket Card UI",
    block_config: { i: "PRJ-2", x: 4, y: 0, w: 5, h: 10, isResizable: true },
  },
  {
    title: "Contact",
    block_config: { i: "CONTACT", x: 9, y: 0, w: 3, h: 10, isResizable: true },
  },
  {
    title: "Receipt UI",
    block_config: { i: "PRJ-3", x: 0, y: 1, w: 4, h: 10, isResizable: true },
  },
  {
    title: "ClueCatch",
    block_config: { i: "PRJ-4", x: 4, y: 1, w: 4, h: 6, isResizable: true },
  },
  {
    title: "Lernit LMS",
    block_config: { i: "PRJ-5", x: 8, y: 1, w: 4, h: 6, isResizable: true },
  },
];

export default function ProjectsGrid() {
  const children = React.useMemo(() => {
    return projects.map((val) => {
      return (
        <div
          key={val.block_config.i}
          className="border dark:border-white/10 bg-white dark:bg-zinc-800 rounded-sm shadow-sm project-text"
          data-grid={val.block_config}
        >
          {val.title}
        </div>
      );
    });
  }, []);

  return (
    <GridLayout
      className="layout"
      containerPadding={[6, 6]}
      cols={12}
      rowHeight={30}
      width={1088}
    >
      {children}
    </GridLayout>
  );
}
