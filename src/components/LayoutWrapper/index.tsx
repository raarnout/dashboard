"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main">
        <nav className="navbar">
          <button className="btn btn-primary" onClick={toggleSidebar}>
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>
          <h1>Page Title</h1>
        </nav>
        <main className="content">{children}</main>
        <footer className="footer">© 2024 Company Name</footer>
      </div>
    </div>
  );
}
