// Example project structure. You will map over your actual project data.
const projects = [
  {
    id: 1,
    title: "[Project Title 1]",
    description: "[A brief, compelling description of what this project does, the problem it solves, and the tech used.]",
    href: "#", // Link to the project demo or GitHub
  },
  {
    id: 2,
    title: "[Project Title 2]",
    description: "[A brief, compelling description of what this project does, the problem it solves, and the tech used.]",
    href: "#",
  },
];

export default function Projects() {
  return (
    <main className="container mx-auto min-h-screen p-8 sm:p-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">
          My Work
        </h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-foreground/10 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/80">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}