"use client"; 

import { useSidebar } from "@/context/SidebarContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar(); 

  return (
    <div className="app">
      <Sidebar />
      <div className={`main-content ${isOpen ? "shrink" : ""}`}>
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
