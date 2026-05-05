import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
          end: "top 40%",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-section-gap px-margin-edge w-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden min-h-[1000px] border-t border-white/5" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#0a0a0a] to-[#0a0a0a] opacity-70 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-20 relative z-10">
        <span className="font-label-caps text-neutral-500 tracking-[0.4em] block">THE NEXT CHAPTER</span>
        <h2 
          ref={titleRef}
          className="text-[10vw] md:text-[140px] font-serif text-white leading-[0.8] tracking-tighter mix-blend-diff"
        >
          Mari Ciptakan<br/><i className="font-light">Sesuatu yang</i><br/>Luar Biasa.
        </h2>
        <p className="font-body-lg text-neutral-400 max-w-2xl text-xl font-light leading-[1.6] mt-6">
          Hubungi kami untuk mendiskusikan proyek Anda berikutnya, kolaborasi editorial, atau pertanyaan terkait layanan fotografi kami.
        </p>
        <a 
          href="https://wa.me/6281389522061" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-16 py-8 mt-12 border border-white/30 text-white bg-transparent font-label-caps text-xs tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 ease-in-out backdrop-blur-sm"
        >
          TERTARIK JASA KAMI?
        </a>
      </div>
    </section>
  );
}
