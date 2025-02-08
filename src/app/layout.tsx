import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Een krachtig Next.js 15 dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <SidebarProvider>
          <MainLayout>{children}</MainLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
