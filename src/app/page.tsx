import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <button className="btn btn-primary">primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-danger">danger</button>
      </main>
      <footer></footer>
    </div>
  );
}
