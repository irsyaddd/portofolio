export interface ContactListProps {
  link: string;
  label: string;
  icon: React.ReactNode;
}

export interface ProjectsProps {
  title: string;
  image: React.ReactNode;
  content: string;
  created_at: string;
}

export interface ProjectListProps {
  projects: ProjectsProps[];
}
