import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center p-8 text-center bg-slate-100 dark:bg-[#020617]">
      <h1 className="mb-4 text-6xl font-bold text-gray-800 dark:text-white">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-600 dark:text-gray-300">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-gray-500 dark:text-gray-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist. Head back to
        explore my projects.
      </p>
      <Link href="/">
        <Button variant="outline" size="lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
