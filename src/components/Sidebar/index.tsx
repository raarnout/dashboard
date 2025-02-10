"use client";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Sidebar Menu</h5>
      </div>
      <div className="offcanvas-body">
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li> <Link href="/settings">Settings</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </div>
    </aside>
  );
}
