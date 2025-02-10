import "@/styles/_globals.scss";
import BootstrapClient from "@/components/BootstrapClient";
import LayoutWrapper from "@/components/LayoutWrapper";
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
        <LayoutWrapper>{children}</LayoutWrapper> {/* ✅ Alleen de content wisselt */}
      </body>
    </html>
  );
}
