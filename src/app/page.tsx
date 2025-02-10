import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our app!</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
