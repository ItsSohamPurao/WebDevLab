// src/app/about/gallery/page.tsx
import Image from 'next/image';

const photos = [
    { id: 1, src: "/WhatsApp Image 2025-09-23 at 23.16.54_8d8c1c5c.jpg", alt: "Soham's Photo 1" },
    { id: 2, src: "/WhatsApp Image 2025-09-23 at 23.16.55_3cd8b0ea.jpg", alt: "Soham's Photo 2" },
    { id: 3, src: "/WhatsApp Image 2025-09-23 at 23.16.55_f6fd37e7.jpg", alt: "Soham's Photo 3" },
    { id: 4, src: "/WhatsApp Image 2025-09-23 at 23.16.56_76c5f9df.jpg", alt: "Soham's Photo 4" },
    { id: 5, src: "/WhatsApp Image 2025-09-23 at 23.16.56_716d363e.jpg", alt: "Soham's Photo 5" },
    { id: 6, src: "/20250620_182931.jpg", alt: "Soham's Photo 5" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto min-h-screen p-8 sm:p-12">
      <h1 className="text-5xl sm:text-7xl font-mono uppercase glitch-text mb-8" data-text="Gallery">
        Gallery
      </h1>
      <div className="columns-2 md:columns-3 gap-4">
        {photos.map((photo) => (
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
    </div>
  );
}