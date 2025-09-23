'use client';
import { useState } from 'react';

// Example project structure. You will map over your actual project data.
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

export default function Projects() {
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  return (
    <div className="container mx-auto min-h-screen p-8 sm:p-12">
      <h1 className="text-5xl sm:text-7xl font-mono uppercase glitch-text mb-12" data-text="My Work">
        My Work
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-cyan-400 p-6 bg-[rgba(10,25,47,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-glow),0.6)] hover:-translate-y-2 flex flex-col"
          >
            <h3 className="text-2xl font-mono uppercase text-fuchsia-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex gap-4 mt-auto">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs">
                View Site
              </a>
              {project.videoUrl && (
                <button onClick={() => setModalVideoUrl(project.videoUrl)} className="btn btn-secondary text-xs">
                  Watch Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {modalVideoUrl && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalVideoUrl(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black border-4 border-fuchsia-500 shadow-[0_0_25px_rgba(var(--secondary-glow),0.8)]" onClick={e => e.stopPropagation()}>
             <button onClick={() => setModalVideoUrl(null)} className="absolute -top-1 -right-1 h-8 w-8 bg-fuchsia-500 text-white font-mono z-10">X</button>
             <iframe
                width="100%"
                height="100%"
                src={modalVideoUrl}
                title="Project Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
