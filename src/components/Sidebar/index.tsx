"use client";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Sidebar Menu</h5>
      </div>
      <div className="offcanvas-body">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
    </aside>
  );
}
