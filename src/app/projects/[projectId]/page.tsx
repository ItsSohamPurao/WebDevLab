// src/app/projects/[projectId]/page.tsx
'use client';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects'; // Import the projects data

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const project = projects.find(p => p.id.toString() === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto min-h-screen p-8 sm:p-12">
      <h1 className="text-5xl sm:text-7xl font-mono uppercase glitch-text mb-12" data-text={project.title}>
        {project.title}
      </h1>
      <div className="bg-[rgba(10,25,47,0.5)] p-6 border-2 border-fuchsia-400">
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        {project.videoUrl && (
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={project.videoUrl}
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}