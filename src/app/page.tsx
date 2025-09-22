import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen p-8 sm:p-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">
          [Your Name or Title]
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8">
          [Your one-sentence professional summary. What do you do? e.g., "I'm a full-stack developer specializing in React, Next.js, and building high-performance web applications."]
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors font-medium h-12 px-6 inline-flex items-center"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors font-medium h-12 px-6 inline-flex items-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}