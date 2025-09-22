import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 border-b border-foreground/10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold hover:text-foreground/70 transition-colors">
          Soham Purao
        </Link>
        <ul className="flex gap-4 sm:gap-6 font-mono">
          <li>
            <Link href="/" className="text-sm hover:text-foreground/70 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm hover:text-foreground/70 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-sm hover:text-foreground/70 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm hover:text-foreground/70 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}