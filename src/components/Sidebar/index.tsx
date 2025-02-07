import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>📊 Dashboard</h2>
      <ul>
        <li><Link href="/">🏠 Home</Link></li>
        <li><Link href="/analytics">📈 Analytics</Link></li>
        <li><Link href="/settings">⚙️ Settings</Link></li>
      </ul>
    </aside>
  );
}
