import { Metadata } from "next";
import ProjectsContainer from "../features/projects/presentation/projects-container";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio | Projects",
  description: "List of projects",
};

export default function ProjectsPage() {
  return <ProjectsContainer />;
}
