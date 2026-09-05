import { Metadata } from "next";
import StackContainer from "../features/stack/presentation/stack-container";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio | Stack",
  description: "List of technologies and tools",
};

export default function StackPage() {
  return <StackContainer />;
}
