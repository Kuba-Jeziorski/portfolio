import Heading from "@/app/components/ui/heading";
import ProjectsListing from "./projects-listing";

export default function ProjectsContainer() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Heading variant="h1">Projects</Heading>
      <ProjectsListing />
    </div>
  );
}
