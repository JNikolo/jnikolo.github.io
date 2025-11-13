import Link from "next/link";

export function NavLinks() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
      <Link href="/" className="hover:text-emerald transition-colors">
        Home
      </Link>
      <Link href="/about" className="hover:text-emerald transition-colors">
        Experience
      </Link>
      <Link href="/projects" className="hover:text-emerald transition-colors">
        Projects
      </Link>
    </div>
  );
}
