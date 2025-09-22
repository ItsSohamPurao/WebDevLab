import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,30,0.8)] backdrop-blur-sm border-b-2 border-[rgb(var(--primary-glow))] shadow-[0_0_15px_rgba(var(--primary-glow),0.5)]">
      <nav className="container mx-auto flex items-center justify-between p-4 h-20">
        <Link 
          href="/" 
          className="text-2xl font-mono glitch-text"
          data-text="SOHAM"
        >
          SOHAM
        </Link>
        <ul className="flex gap-6 font-mono text-sm uppercase">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'home' ? '/' : `/${item}`}
                className="relative text-cyan-300 transition-colors duration-300 hover:text-white"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
