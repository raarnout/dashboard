"use client";

import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useSidebar } from "@/context/SidebarContext";

export default function Sidebar() {
  const { isOpen } = useSidebar();
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <h2>📊 Dashboard</h2>
      <ul>
        <li><Link href="/">🏠 Home</Link></li>
        <li><Link href="/analytics">📈 Analytics</Link></li>
        <li><Link href="/settings">⚙️ Settings</Link></li>
      </ul>
    </aside>
  );
}
