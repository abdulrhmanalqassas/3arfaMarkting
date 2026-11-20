import Link from "next/link";
import { homePath } from "@/shared/navigation/site-routes";

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <h1 className="text-4xl font-semibold mb-6">Page not found</h1>
      <Link href={homePath} className="text-amber-300 underline">Return to Arafa Agency</Link>
    </main>
  );
}
