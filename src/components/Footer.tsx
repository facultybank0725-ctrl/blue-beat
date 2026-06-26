export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[9px] tracking-[0.3em] text-white/20 uppercase font-light">株式会社</span>
              <span className="text-sm font-semibold tracking-wider text-white">ブルービート</span>
            </div>
            <p className="text-[10px] text-white/20 tracking-[0.3em] font-light uppercase">AI makes people rich.</p>
          </div>

          <div className="grid grid-cols-3 gap-16 text-[11px]">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-light mb-5">Services</p>
              <ul className="space-y-3 font-light">
                <li><a href="#services" className="text-white/40 hover:text-white transition-colors tracking-wide">AI経理</a></li>
                <li><a href="#services" className="text-white/40 hover:text-white transition-colors tracking-wide">AI顧問</a></li>
                <li><a href="#services" className="text-white/40 hover:text-white transition-colors tracking-wide">法人設立支援</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-light mb-5">Company</p>
              <ul className="space-y-3 font-light text-white/40">
                <li><a href="#about" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-light mb-5">Access</p>
              <ul className="space-y-2 font-light text-white/30 leading-relaxed">
                <li>〒410-0022</li>
                <li>静岡県沼津市</li>
                <li>大岡403-1 101</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/15 font-light tracking-[0.2em]">
            © {new Date().getFullYear()} 株式会社ブルービート. All rights reserved.
          </p>
          <p className="text-[10px] text-white/10 font-light tracking-widest uppercase">
            AI Accounting & Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
