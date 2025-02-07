"use client";

import styles from "./Navbar.module.css";
import HamburgerButton from "@/components/buttons/Hamburger";
import { useSidebar } from "@/context/SidebarContext";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <nav className={styles.navbar}>
      <HamburgerButton onClick={toggleSidebar} />
    </nav>
  );
}
