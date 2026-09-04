export type Project = {
  name: string;
  description: string;
  technologies: string[];
  // temporary solution for image, will be replaced with a proper image component later
  image?: string;
  date_range: string;
  github_url: string;
  live_url?: string;
};
