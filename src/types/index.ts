import { BackgroundColor, TextColor } from "./tailwind";
export interface ContactListProps {
  link: string;
  label: string;
  icon: React.ReactNode;
}

export type ProjectProps = {
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