"use client";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  return (
    <nav className="navbar">
      <button className="btn btn-primary" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>
      <h1>Page Title</h1>
    </nav>
  );
}
