import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pin = gsap.fromTo(triggerRef.current, 
          { x: 0 },
          {
            x: `-${PROJECTS.length * 100}vw`,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${triggerRef.current?.offsetWidth}`,
            }
          }
        );
        return () => pin.kill();
      });

      // Simple reveal animation for mobile
      mm.add("(max-width: 767px)", () => {
        const items = gsap.utils.toArray<HTMLElement>('.gallery-mobile-item');
        items.forEach((item) => {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#0a0a0a]" id="projects">
      {/* Desktop Horizontal Scroll */}
      <div 
        ref={triggerRef} 
        style={{ width: `${(PROJECTS.length + 1) * 100}vw` }}
        className="hidden md:flex h-screen items-center relative"
      >
        {/* Intro Slide */}
        <div className="h-screen w-screen flex flex-col justify-center px-margin-edge">
          <div className="max-w-container-max w-full">
             <h2 className="text-headline-editorial font-serif text-white tracking-tighter leading-[0.75] relative z-20 mix-blend-diff">
              My<br/>Work
            </h2>
            <div className="mt-12 flex flex-col items-start gap-4">
              <span className="font-label-caps text-neutral-500 tracking-[0.4em]">ARCHIVE</span>
              <span className="font-serif text-4xl text-white italic font-light">Maison 24</span>
            </div>
          </div>
        </div>

        {/* Dynamic Project Slides */}
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="h-screen w-screen flex items-center justify-center p-20">
            <div className={`relative w-full max-w-4xl group flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}>
               <div className="w-2/3 h-[65vh] overflow-hidden grayscale contrast-125 border border-white/5 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
               </div>
               <div className={`w-1/3 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="font-label-caps text-neutral-500 tracking-[0.3em] block mb-6">{project.id} / {project.category}</span>
                  <h3 className="text-6xl font-serif text-white mb-6 leading-none">{project.title}</h3>
                  <p className={`text-neutral-400 text-sm leading-relaxed ${index % 2 === 0 ? 'border-l pl-6' : 'border-r pr-6'} border-white/20`}>
                    {project.description}
                  </p>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Layout */}
      <div className="md:hidden flex flex-col gap-24 py-20 px-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-[15vw] font-serif text-white tracking-tighter leading-none mb-4">My<br/>Work</h2>
          <span className="font-label-caps text-neutral-500 tracking-[0.4em] text-xs">ARCHIVE / MAISON 24</span>
        </div>

        {PROJECTS.map((project) => (
          <div key={project.id} className="gallery-mobile-item flex flex-col gap-8">
            <div className="aspect-[4/5] overflow-hidden grayscale border border-white/5">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-neutral-500 tracking-[0.3em] text-[10px]">{project.id} / {project.category}</span>
              <h3 className="text-4xl font-serif text-white">{project.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
