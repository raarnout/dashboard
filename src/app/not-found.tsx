import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Oeps! Deze pagina bestaat niet.</p>
      <Link href="/" className={styles.button}>
        Terug naar Home
      </Link>
    </div>
  );
}
