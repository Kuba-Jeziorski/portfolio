import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/layout/navigation";

export const metadata: Metadata = {
  title: "Kuba-Jeziorski Portfolio",
  description: "Personal portfolio website for Kuba-Jeziorski",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full w-full flex flex-col bg-canvas-background text-primary-text pt-nav-height">
        <Navigation />
        <div className="w-full p-6">
          <div className="w-full max-w-375 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
