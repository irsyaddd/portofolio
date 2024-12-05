import ContentWrapper from "@/components/content-wrapper";
import Introduction from "@/components/introduction";
import ProjectsGrid from "@/components/projects-grid";
import ResponsiveRGL from "@/components/responsive-rgl";

export default async function IndexPage() {
  return (
    <ContentWrapper>
      <Introduction />
      <ProjectsGrid />
      {/* <ResponsiveRGL /> */}
    </ContentWrapper>
  );
}
