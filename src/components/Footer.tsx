import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white font-serif uppercase tracking-widest text-[10px] w-full border-t border-white/5">
      <div className="flex flex-col items-center w-full pt-24 pb-12 px-margin-edge max-w-container-max mx-auto overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif leading-none opacity-[0.02] text-white select-none pointer-events-none whitespace-nowrap tracking-tighter">
          LUMINATION
        </div>
        
        <div className="w-full max-w-xl mx-auto mb-20 z-10 flex flex-col items-center text-center gap-10">
          <h4 className="font-label-caps text-xs tracking-[0.4em] text-neutral-400">Dapatkan update karya terbaru</h4>
          <div className="flex w-full border-b border-white/30 pb-6 group">
            <input 
              className="w-full bg-transparent border-none outline-none text-base placeholder-neutral-600 focus:ring-0 focus:border-none p-0 text-center font-body-md uppercase tracking-[0.2em] transition-colors" 
              placeholder="ALAMAT EMAIL" 
              type="email"
            />
            <button className="text-neutral-500 group-hover:text-white transition-colors duration-500 pl-8">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center z-10 mt-20 border-t border-white/10 pt-12 gap-12">
          <p className="text-neutral-600 font-label-caps tracking-[0.3em]">© 2024 PH.ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-16 font-label-caps tracking-[0.3em]">
            <a className="text-neutral-400 hover:text-white transition-colors duration-500" href="#">Instagram</a>
            <a className="text-neutral-400 hover:text-white transition-colors duration-500" href="#">LinkedIn</a>
            <a className="text-neutral-400 hover:text-white transition-colors duration-500" href="#">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
