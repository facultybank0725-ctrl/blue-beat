export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-light">株式会社</span>
          <span className="text-base font-semibold tracking-widest text-white uppercase">Bluebeat</span>
        </div>
        <nav className="hidden md:flex items-center gap-12 text-[11px] font-medium text-white/60 tracking-[0.2em] uppercase">
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-white border border-white/30 px-6 py-2.5 hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          無料相談
        </a>
      </div>
    </header>
  );
}
