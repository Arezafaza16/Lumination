import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BehindTheLens from './components/BehindTheLens';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Ensure scroll trigger refreshes after everything is loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);
    // Also refresh after a short delay to account for dynamic content/fonts
    const timer = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <section className="isolate"><Hero /></section>
        <section className="isolate"><BehindTheLens /></section>
        <section className="isolate"><Gallery /></section>
        <section className="isolate"><Services /></section>
        <section className="isolate"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

