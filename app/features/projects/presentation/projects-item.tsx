import Link from "@/app/components/ui/link";
import { Project } from "../domain/model";
import Badges from "@/app/components/ui/badges";
import Heading from "@/app/components/ui/heading";

type Props = {
  project: Project;
};

export default function ProjectsItem({ project }: Props) {
  const {
    name,
    description,
    technologies,
    // image,
    date_range,
    github_url,
    live_url,
  } = project;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-400/20">
      <div className="w-full aspect-video bg-red-50"></div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-muted-text text-sm">{date_range}</p>
        <Heading variant="h3" className="mb-2">
          {name}
        </Heading>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badges badges={technologies} />
        </div>
        <p className="text-secondary-text mb-8">{description}</p>
        <div className="flex align-items-center gap-4 mt-auto">
          <Link url={github_url}>Repository</Link>
          {live_url && <Link url={live_url}>Live Demo</Link>}
        </div>
      </div>
    </div>
  );
}
