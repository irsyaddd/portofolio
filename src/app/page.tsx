import Introduction from "@/components/introduction";
import ProjectsGrid from "@/components/projects-grid";

export default async function IndexPage() {
  return (
    <div className="container max-w-6xl">
      <Introduction />
      <ProjectsGrid />
    </div>
  );
}
