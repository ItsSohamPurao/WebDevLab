import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-5rem)] p-8 text-center">
      <div>
        <h1 
          className="text-6xl sm:text-8xl font-mono uppercase glitch-text mb-4"
          data-text="Soham Purao"
        >
          Soham Purao
        </h1>
        <p className="text-xl sm:text-2xl text-cyan-300 mb-10 max-w-3xl mx-auto">
          I am student in DJ Sanghvi College of Engineering, pursuing B.Tech in AIML. Other than academics I enjoy working out , photography and gaming.
        </p>
        <div className="flex gap-6 justify-center">
          <Link href="/projects" className="btn btn-primary">
            See My Work
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
