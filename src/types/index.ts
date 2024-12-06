import { Layout } from "react-grid-layout";
import { BackgroundColor, TextColor } from "./tailwind";
export interface ContactListProps {
  link: string;
  label: string;
  icon: React.ReactNode;
}

export type ProjectProps = {
  title: string;
  i: string;
  bgColor?: BackgroundColor;
  textColor?: TextColor;
  project_content?: React.ReactNode;
  slug?: string;
};

// export interface ProjectsProps {
//   category: number | null;
//   content: string;
//   created_at: string;
//   id: number;
//   slug: string;
//   thumbnail: string | null;
//   title: string;
// }

// export type ProjectPayload = Omit<ProjectsProps, "created_at" | "id">;

// export interface ProjectListProps {
//   projects: ProjectsProps[];
// }
