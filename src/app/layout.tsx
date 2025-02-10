import "@/styles/_globals.scss";
import BootstrapClient from "@/components/BootstrapClient";
import LayoutWrapper from "@/components/LayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Sidebar",
  description: "Bootstrap Offcanvas Sidebar in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
