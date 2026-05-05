import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.service-item');
      items.forEach((item) => {
        gsap.from(item.querySelector('.service-content'), {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0a0a0a]" id="expertise" ref={containerRef}>
      {/* Title Header */}
      <div className="py-24 px-margin-edge border-b border-white/5 mx-auto max-w-container-max">
        <h2 className="text-[12vw] md:text-headline-editorial font-serif text-white tracking-tighter leading-[0.8] mb-12 mix-blend-diff">Portfolio<br/>of Services</h2>
      </div>

      <div className="flex flex-col">
        {/* Service 1: Portrait */}
        <div className="service-item min-h-screen grid grid-cols-1 md:grid-cols-2 relative border-b border-white/5 group">
          <div className="h-[60vh] md:h-screen sticky top-0 overflow-hidden grayscale contrast-125">
            <img 
              src="/images/portrait.png" 
              alt="Portrait Service" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-2000"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif opacity-5 text-white pointer-events-none select-none">01</div>
          </div>
          <div className="flex items-center justify-center p-12 md:p-24 service-content">
            <div className="max-w-md">
              <span className="font-label-caps text-neutral-500 tracking-[0.4em] mb-8 block">FINE ART</span>
              <h3 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9]">Potret<br/>Jiwa</h3>
              <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12">
                Menangkap kedalaman karakter dan emosi melalui potret hitam putih yang intens. Pendekatan minimalis untuk menghilangkan distraksi.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2: Editorial */}
        <div className="service-item min-h-screen grid grid-cols-1 md:grid-cols-2 relative group">
          <div className="flex items-center justify-center p-12 md:p-24 order-2 md:order-1 service-content">
            <div className="max-w-md text-right">
              <span className="font-label-caps text-neutral-500 tracking-[0.4em] mb-8 block">COMMERCIAL</span>
              <h3 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.9]">Narasi<br/>Visual</h3>
              <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12">
                Menciptakan narasi visual yang kuat untuk publikasi dan brand tingkat tinggi. Fokus pada komposisi dramatis dan gaya sophisticated.
              </p>
            </div>
          </div>
          <div className="h-[60vh] md:h-screen sticky top-0 overflow-hidden grayscale contrast-125 order-1 md:order-2">
            <img 
              src="/images/fashion.png" 
              alt="Editorial Service" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-2000"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif opacity-5 text-white pointer-events-none select-none">02</div>
          </div>
        </div>
      </div>
    </section>
  );
}
