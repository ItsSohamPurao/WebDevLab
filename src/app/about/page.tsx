// src/app/about/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
  // CORRECT: These paths are relative to the 'public' folder.
  { id: 1, src: "/WhatsApp Image 2025-09-23 at 23.16.54_8d8c1c5c.jpg", alt: "Soham's Photo 1" },
  { id: 2, src: "/WhatsApp Image 2025-09-23 at 23.16.55_3cd8b0ea.jpg", alt: "Soham's Photo 2" },
  { id: 3, src: "/WhatsApp Image 2025-09-23 at 23.16.55_f6fd37e7.jpg", alt: "Soham's Photo 3" },
  { id: 4, src: "/WhatsApp Image 2025-09-23 at 23.16.56_76c5f9df.jpg", alt: "Soham's Photo 4" },
  { id: 5, src: "/WhatsApp Image 2025-09-23 at 23.16.56_716d363e.jpg", alt: "Soham's Photo 5" },
  { id: 6, src: "/20250620_182931.jpg", alt: "Soham's Photo 5" },
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
            Hello to my About me section
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl sm:text-5xl font-mono uppercase glitch-text mb-8" data-text="ML Passion">
          ML Passion
        </h2>
        <div className="max-w-4xl text-lg leading-relaxed space-y-4 border-l-4 border-fuchsia-500 pl-6">
          <p>
            In machine learning, I am more fond of NLP and how it has revolutionized our day to day life
          </p>
          <p>
            I know Machine Learning libraries in Python that are Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, PyTorch
          </p>
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-mono uppercase glitch-text" data-text="Photography">
            Photography
          </h2>
          <Link href="/about/gallery" className="btn btn-secondary">
            View Gallery
          </Link>
        </div>
        <div className="columns-2 md:columns-3 gap-4">
          {photos.slice(0, 3).map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid">
               <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
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