'use client';
import { useState } from 'react';

type LocationState = {
  lat: number | null;
  lon: number | null;
  error: string | null;
  loading: boolean;
};

export default function Contact() {
  const [location, setLocation] = useState<LocationState>({
    lat: null,
    lon: null,
    error: null,
    loading: false,
  });

  const getLocation = () => {
    setLocation({ lat: null, lon: null, error: null, loading: true });
    if (!navigator.geolocation) {
      setLocation({ lat: null, lon: null, error: "Geolocation is not supported by your browser.", loading: false });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          error: null,
          loading: false,
        });
      },
      () => {
        setLocation({ lat: null, lon: null, error: "Unable to retrieve your location. Please enable permissions.", loading: false });
      }
    );
  };

  return (
    <div className="container mx-auto min-h-screen p-8 sm:p-12">
      <h1 className="text-5xl sm:text-7xl font-mono uppercase glitch-text mb-8" data-text="Contact">
        Contact
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed mb-8">
          [Write a brief call to action. e.g., "I'm currently available for freelance work and open to new opportunities. Let's build something cool together."]
        </p>
        <div className="space-y-4 text-xl mb-12">
           <p><strong>EMAIL:</strong> <a href="mailto:[your-email@example.com]" className="text-cyan-300 hover:text-white transition-colors">[your-email@example.com]</a></p>
           <p><strong>LINKEDIN:</strong> <a href="[your-linkedin-url]" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">/[YourProfile]</a></p>
           <p><strong>GITHUB:</strong> <a href="[your-github-url]" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white transition-colors">/[YourUsername]</a></p>
        </div>

        <div>
            <button onClick={getLocation} disabled={location.loading} className="btn btn-primary">
                {location.loading ? 'Fetching...' : 'Show My Location'}
            </button>
            {location.lat && location.lon && (
                <p className="mt-4 font-mono text-cyan-300">
                    LAT: {location.lat.toFixed(4)}, LON: {location.lon.toFixed(4)}
                </p>
            )}
            {location.error && (
                <p className="mt-4 font-mono text-red-500">
                    ERROR: {location.error}
                </p>
            )}
        </div>

      </div>
    </div>
  );
}
