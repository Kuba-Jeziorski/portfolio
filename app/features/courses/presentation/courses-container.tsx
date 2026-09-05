import Heading from "@/app/components/ui/heading";
import CoursesListing from "./courses-listing";

export default function CoursesContainer() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Heading variant="h1">Courses</Heading>
      <CoursesListing />
    </div>
  );
}
