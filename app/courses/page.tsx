import { Metadata } from "next";
import CoursesContainer from "../features/courses/presentation/courses-container";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio | Courses",
  description: "List of finished courses",
};

export default function CoursesPage() {
  return <CoursesContainer />;
}
