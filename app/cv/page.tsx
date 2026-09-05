import { Metadata } from "next";
import CvContainer from "../features/cv/presentation/cv-container";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio | CV",
  description: "Basic informations about Kuba Jeziorski",
};

export default function CvPage() {
  return <CvContainer />;
}
