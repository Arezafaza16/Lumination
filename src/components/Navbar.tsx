import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // Scroll progress for background transition
    const onScroll = () => {
      if (window.scrollY > 20) {
        navRef.current?.classList.add('bg-[#0a0a0a]/95', 'backdrop-blur-xl', 'py-4');
        navRef.current?.classList.remove('py-6', 'bg-[#0a0a0a]/80');
      } else {
        navRef.current?.classList.remove('bg-[#0a0a0a]/95', 'backdrop-blur-xl', 'py-4');
        navRef.current?.classList.add('py-6', 'bg-[#0a0a0a]/80');
      }
    };

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center-ish intersection
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about', 'projects', 'expertise', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      ref={navRef}
      className="bg-[#0a0a0a]/80 backdrop-blur-sm text-white font-serif uppercase tracking-[0.3em] text-[10px] font-light w-full top-0 fixed z-50 border-b border-white/5 transition-all duration-500 py-6"
      id="top-nav"
    >
      <div className="flex justify-between items-center w-full px-margin-edge max-w-container-max mx-auto">
        <a href="#hero" className="text-xl font-serif tracking-tighter text-white select-none hover:opacity-70 transition-opacity">
          PH.ARCHIVE
        </a>
        
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`pb-1 transition-all duration-500 relative group ${
                activeSection === link.id 
                  ? 'text-white' 
                  : 'text-neutral-500 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-500 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>
        
        <a 
          href="#contact"
          className="hidden sm:block px-8 py-3 border border-white/30 text-white font-label-caps text-[10px] hover:bg-white hover:text-black transition-all duration-700 tracking-widest backdrop-blur-sm uppercase"
        >
          INQUIRE
        </a>
      </div>
    </nav>
  );
}
