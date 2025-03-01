import Link from "next/link";
import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">
            © 2025 Kavan Vavadiya. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground">
            Experience
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}