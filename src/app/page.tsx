import ContentWrapper from "@/components/content-wrapper";
import Introduction from "@/components/introduction";
import ProjectsGrid from "@/components/projects-grid";

export default async function IndexPage() {
  return (
    <ContentWrapper>
      <Introduction />
      <ProjectsGrid />
    </ContentWrapper>
  );
}
