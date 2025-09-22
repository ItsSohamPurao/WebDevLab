export default function Contact() {
  return (
    <main className="container mx-auto min-h-screen p-8 sm:p-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">
          Get in Touch
        </h1>
        <div className="prose dark:prose-invert text-lg">
          <p>
            [Write a brief call to action. e.g., "I'm currently available for freelance work and open to new opportunities. Feel free to reach out."
          </p>
          <ul className="list-none p-0">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:[your-email@example.com]">[your-email@example.com]</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="[your-linkedin-url]" target="_blank" rel="noopener noreferrer">
                [Your LinkedIn Profile]
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="[your-github-url]" target="_blank" rel="noopener noreferrer">
                [Your GitHub Profile]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}