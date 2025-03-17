import "@/styles/_globals.scss";
import BootstrapClient from "@/components/BootstrapClient";
import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A modern Next.js application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
