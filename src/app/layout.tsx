import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/context/SidebarContext";

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
          <div className="app">
            <Sidebar />
            <div className="main-content">
              <Navbar />
              <main className="content">{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
