import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BehindTheLens() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the main container
      gsap.to(".parallax-content", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-section-gap px-margin-edge bg-[#0a0a0a] overflow-hidden" 
      id="about"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Large Decorative Text Background */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <span className="text-[40vw] font-serif leading-none whitespace-nowrap">VISION</span>
        </div>

        {/* Left Column: Asymmetrical Images */}
        <div className="md:col-span-7 relative h-[600px] md:h-[900px] parallax-content">
          <div className="absolute top-0 right-0 w-3/4 h-full overflow-hidden border border-white/5 grayscale contrast-125 z-10">
            <img 
              ref={mainImgRef}
              src="/images/about.png" 
              alt="Artistic Vision" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-20 -left-10 w-1/2 h-2/3 overflow-hidden border border-white/10 z-20 shadow-2xl grayscale contrast-150">
            <img 
              src="/images/nature.png" 
              alt="Detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text & Editorial Detail */}
        <div className="md:col-span-5 relative z-30 pt-20 md:pt-0">
          <h2 
            ref={titleRef}
            className="text-[10vw] md:text-8xl font-serif text-white tracking-tighter leading-[0.8] mb-12 mix-blend-diff"
          >
            Behind<br/>the Lens
          </h2>
          
          <div className="flex flex-col gap-8 border-l border-white/20 pl-8 ml-4">
            <span className="font-label-caps text-neutral-500 tracking-[0.4em] text-xs">THE PHILOSOPHY</span>
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              Mengeksplorasi batas antara realitas dan abstraksi melalui komposisi dan pencahayaan yang cermat, menciptakan visual yang memancing pikiran.
            </p>
            <div className="w-12 h-[1px] bg-white/40 mt-4"></div>
            <p className="text-neutral-500 text-sm italic">"Setiap bayangan menceritakan sebuah rahasia yang tidak bisa diungkapkan oleh cahaya saja."</p>
          </div>
        </div>

      </div>
    </section>
  );
}
