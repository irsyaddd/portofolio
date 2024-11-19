"use client";

import React from "react";
import GridLayout from "react-grid-layout";

import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Contacts from "./contacts";

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
  project_content?: React.ReactNode;
};

const projects: Props[] = [
  {
    title: "Fancy Button",
    block_config: { i: "PRJ-1", x: 0, y: 0, w: 1, h: 6, isResizable: true },
  },
  {
    title: "Some UI Exploration",
    block_config: { i: "PRJ-2", x: 1, y: 0, w: 1.5, h: 10, isResizable: true },
  },
  {
    title: "Contact",
    block_config: { i: "CONTACT", x: 0, y: 0, w: 1, h: 4, static: true },
    project_content: <Contacts />,
  },
  {
    title: "See More",
    block_config: { i: "SeeMore", x: 0, y: 0, w: 1, h: 2, static: true },
  },
  {
    title: "Another UI Exploration",
    block_config: { i: "PRJ-3", x: 3, y: 0, w: 1.5, h: 10, isResizable: true },
  },
  {
    title: "ClueCatch",
    block_config: { i: "PRJ-4", x: 3, y: 1, w: 1.5, h: 6, isResizable: true },
  },
  {
    title: "Lernit LMS",
    block_config: { i: "PRJ-5", x: 1, y: 1, w: 1.5, h: 6, isResizable: true },
  },
];

export default function ProjectsGrid() {
  const children = React.useMemo(() => {
    return projects.map((val) => {
      return (
        <div
          key={val.block_config.i}
          className="border dark:border-white/10 bg-white dark:bg-zinc-800 rounded-sm shadow-sm project-text relative"
          data-grid={val.block_config}
        >
          <div className="center-absolute">{val.project_content}</div>
          {val.title}
        </div>
      );
    });
  }, []);

  return (
    <GridLayout
      className="layout"
      useCSSTransforms={false}
      containerPadding={[6, 6]}
      resizeHandles={["nw", "se"]}
      cols={4}
      rowHeight={30}
      width={1088}
    >
      {children}
    </GridLayout>
  );
}
