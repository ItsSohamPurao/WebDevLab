'use client';

// This component replaces the previous, simpler contact page.
// It integrates a full-background Google Maps iframe with a styled contact form overlay.

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      {/* Background Map Iframe */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Virar, Maharashtra, India&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          className="w-full h-full"
          // This filter inverts and color-shifts the map to match the dark, neon theme
          style={{ filter: 'grayscale(1) invert(1) contrast(0.8) hue-rotate(180deg) brightness(1.2)' }}
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="container px-5 py-24 mx-auto flex items-center justify-center sm:justify-end">
        <div className="lg:w-1/3 md:w-1/2 bg-black/70 backdrop-blur-md rounded-lg p-8 flex flex-col w-full relative z-10 border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20">
          
          <h2 className="text-3xl font-mono uppercase glitch-text mb-2 text-cyan-400" data-text="Contact">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-foreground/80 font-mono">
            Have a project in mind or just want to connect? Send a message.
          </p>
          
          <form>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-foreground/80 font-mono uppercase">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-background/50 rounded border border-cyan-500/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-700 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-mono"
              />
            </div>
            
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-foreground/80 font-mono uppercase">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full bg-background/50 rounded border border-cyan-500/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-700 h-32 text-base outline-none text-foreground py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-mono"
              ></textarea>
            </div>

            <button className="w-full text-black bg-cyan-400 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-300 rounded text-lg font-bold uppercase tracking-wider transition-colors duration-300">
              Send Signal
            </button>
          </form>

          <p className="text-xs text-foreground/60 mt-4 font-mono text-center">
            Replies within 24-48 business hours.
          </p>
        </div>
      </div>
    </div>
  );
}