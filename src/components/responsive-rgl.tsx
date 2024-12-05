"use client";

import { mdLayout, smLayout } from "@/data/layout";
import { useBreakpoint } from "@/lib/hooks";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../styles/custom-rgl.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function ResponsiveRGL() {
  const { breakpoint, setBreakpoint } = useBreakpoint();
  const layouts = { md: mdLayout, sm: smLayout };
  return (
    <ResponsiveGridLayout
      className="my-2 font-mono"
      layouts={layouts}
      containerPadding={[0, 0]}
      rowHeight={30}
      isBounded
      isResizable={false}
      onBreakpointChange={setBreakpoint}
      isDraggable={["lg", "md"].includes(breakpoint)}
      breakpoints={{ lg: 1199, md: 799, sm: 374, xs: 319, xxs: 0 }}
      cols={{ lg: 12, md: 4, sm: 2, xs: 2, xxs: 2 }}
    >
      <div key="resume" className="project-text rounded-sm p-2 bg-red-400">
        Resume
      </div>
      <div key="contact" className="project-text rounded-sm p-2 bg-teal-400">
        Contact
      </div>
      <div key="booking-ticket-ui" className="project-text rounded-sm p-2 bg-purple-400">
        Booking Ticket UI
      </div>
      <div key="clue-catch" className="project-text rounded-sm p-2 bg-yellow-400">
        ClueCatch
      </div>
      <div key="see-more" className="project-text rounded-sm p-2 bg-pink-400">
        See More
      </div>
      <div key="dark-mode" className="project-text rounded-sm p-2 bg-indigo-400">
        Dark Mode
      </div>
      <div key="another-ui-expo" className="project-text rounded-sm p-2 bg-indigo-400">
        Another UI Exploration
      </div>
      <div key="lernitt" className="project-text rounded-sm p-2 bg-indigo-400">
        Lernitt
      </div>
    </ResponsiveGridLayout>
  );
}
