import ContentWrapper from "@/components/content-wrapper";
import Introduction from "@/components/introduction";
import ProjectsGrid from "@/components/projects-grid";

export default async function IndexPage() {
  return (
    <ContentWrapper className="py-32">
      <Introduction />
      {/* <ProjectsGrid /> */}
      <p>Working on a new layout and updates, stay tune.</p>
    </ContentWrapper>
  );
}
