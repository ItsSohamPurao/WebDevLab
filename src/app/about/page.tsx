'use client';
import Image from 'next/image';

const photos = [
  { id: 1, src: "https://placehold.co/600x400/020024/00ffff?text=Your+Photo+1", alt: "Placeholder image 1" },
  { id: 2, src: "https://placehold.co/400x600/0a0a1e/ff00ff?text=Your+Photo+2", alt: "Placeholder image 2" },
  { id: 3, src: "https://placehold.co/600x400/020024/00ffff?text=Your+Photo+3", alt: "Placeholder image 3" },
  { id: 4, src: "https://placehold.co/600x400/0a0a1e/ff00ff?text=Your+Photo+4", alt: "Placeholder image 4" },
];

export default function About() {
  return (
    <div className="container mx-auto min-h-screen p-8 sm:p-12">
      <section className="mb-16">
        <h1 className="text-5xl sm:text-7xl font-mono uppercase glitch-text mb-8" data-text="About Me">
          About Me
        </h1>
        <div className="max-w-4xl text-lg leading-relaxed space-y-4 border-l-4 border-cyan-400 pl-6">
          <p>
            [Your professional bio. Talk about your experience, your passion for web development, and what drives you.]
          </p>
          <p>
            [Talk about your technical skills. What technologies do you use? e.g., React, Node.js, TypeScript, Python, etc.]
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl sm:text-5xl font-mono uppercase glitch-text mb-8" data-text="ML Passion">
          ML Passion
        </h2>
        <div className="max-w-4xl text-lg leading-relaxed space-y-4 border-l-4 border-fuchsia-500 pl-6">
          <p>
            [Write about your passion for Machine Learning. What interests you? What kind of models have you built? Talk about specific projects, concepts (like NLP, computer vision), or your learning journey.]
          </p>
          <p>
            [Mention specific frameworks or libraries you use, like TensorFlow, PyTorch, or scikit-learn.]
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-4xl sm:text-5xl font-mono uppercase glitch-text mb-8" data-text="Photography">
          Photography
        </h2>
        <div className="columns-2 md:columns-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid">
               <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover border-2 border-transparent hover:border-cyan-400 transition-all duration-300"
               />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}