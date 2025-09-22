export default function About() {
  return (
    <main className="container mx-auto min-h-screen p-8 sm:p-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">
          About Me
        </h1>
        <div className="prose dark:prose-invert text-lg">
          <p>
            [Your professional bio. Talk about your experience, your passion for web development, and what drives you.]
          </p>
          <p>
            [Talk about your technical skills. What technologies do you use? e.g., React, Node.js, TypeScript, Python, etc.]
          </p>
          <p>
            [Add a personal touch. What are your hobbies or interests outside of coding?]
          </p>
        </div>
      </div>
    </main>
  );
}