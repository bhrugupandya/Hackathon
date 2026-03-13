import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-5">
      <div className="flex items-center justify-between rounded-full border border-border/80 bg-background/80 px-4 py-3 backdrop-blur md:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-foreground/90">
          BHRUGU PANDYA
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="#hero" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="#work" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
            Work
          </Link>
          <Link href="#experience" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#contact" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
        <Button className="h-10 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/95">
          <a href="/resume.pdf" download>Resume</a>
        </Button>
      </div>
    </nav>
  );
}
