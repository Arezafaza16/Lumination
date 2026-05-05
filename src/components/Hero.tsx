import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(bgRef.current, {
        scale: 1.2,
        duration: 2.5,
        ease: "circ.out"
      })
      .from(titleRef.current, {
        y: 60,
        opacity: 0,
        letterSpacing: "0.2em",
        duration: 1.5,
        ease: "expo.out"
      }, "-=2");

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="relative w-full h-[100vh] min-h-[900px] flex flex-col overflow-hidden" id="hero">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a] z-10"></div>
        <img 
          ref={bgRef}
          alt="High-contrast architecture" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-150"
          src="/images/hero.png"
        />
      </div>

      {/* Floating Accent Text */}
      <div className="absolute top-[15%] left-[5%] opacity-10 pointer-events-none select-none hidden md:block">
        <span className="text-8xl font-serif text-white tracking-widest uppercase">VISION</span>
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 text-center mt-[-40px]">
        <div className="overflow-hidden mb-4">
           <h1 
            ref={titleRef}
            className="text-[12vw] md:text-headline-editorial font-serif text-white uppercase tracking-tighter mix-blend-difference leading-[0.8]"
          >
            LUMINATION
          </h1>
        </div>
        <p className="mt-6 font-serif italic text-neutral-400 text-xl tracking-wide max-w-lg">
          Mengabadikan momen dengan cerita dan emosi.
        </p>
      </div>

      <div className="relative z-30 px-margin-edge pb-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
        {/* Philosophy Preview */}
        <div className="flex flex-col gap-6">
          <div className="w-12 h-[1px] bg-white/40 mb-2"></div>
          <span className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase">Behind the Lens</span>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            Mengeksplorasi batas antara realitas dan abstraksi melalui komposisi dan pencahayaan yang cermat.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
          <span className="text-[9px] tracking-[0.6em] uppercase text-neutral-500 font-bold">DISCOVER</span>
        </div>

        {/* Service Link */}
        <div className="flex flex-col items-end gap-8">
          <div className="text-right">
            <span className="text-[10px] tracking-[0.4em] text-neutral-500 block mb-2 uppercase">ESTABLISHED 2024</span>
            <h3 className="font-serif text-4xl italic text-white leading-none">Maison 24</h3>
          </div>
          <a href="#projects" className="group flex items-center gap-4 text-[10px] tracking-[0.3em] text-white">
            <span className="border-b border-white pb-1 group-hover:text-neutral-400 group-hover:border-neutral-400 transition-all duration-500">VIEW COLLECTION</span>
            <div className="w-12 h-[1px] bg-white/30 group-hover:w-24 transition-all duration-700"></div>
          </a>
        </div>
      </div>

      {/* Visual Accent Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif leading-none opacity-[0.02] text-white select-none pointer-events-none whitespace-nowrap tracking-tighter">
        ESTHETIQUE
      </div>
    </header>
  );
}
