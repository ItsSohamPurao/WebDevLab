// src/app/projects/[projectId]/page.tsx
'use client';
import { notFound } from 'next/navigation';

const projects = [
  {
    id: 1,
    title: "News Sarcasm Detection",
    description: "Developed and deployed a complete NLP text classification system to detect sarcasm in news headlines.Achieved 94% accuracy by fine-tuning a RoBERTa transformer model, deployed as an interactive web application with FlaskAPI.",
    href: "#", // Link to the project demo or GitHub
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube embed link
  },
  {
    id: 2,
    title: "Voice controlled AI assistant for Android ",
    description: "Developed an AI-powered virtual assistant that responds to voice commands to open applications, search theweb, schedule meetings, and perform system tasks on Android. Integrated Speech Recognition, Text-to Speech (TTS), Natural Language Processing (NLP), and Flask to enable seamless interaction andcommand execution across platforms.",
    href: "#",
    videoUrl: null, // This project doesn't have a video
  },
];

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