import Link from "next/link";

export default function NotFoundPage() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }
  