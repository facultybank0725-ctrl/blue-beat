export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-xs tracking-[0.2em] text-gray-600 uppercase">株式会社</span>
              <span className="text-lg font-bold text-white tracking-tight">ブルービート</span>
            </div>
            <p className="text-xs text-gray-600 tracking-widest font-light">AIが人を豊かにする。</p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4">Services</p>
              <ul className="space-y-2.5 font-light">
                <li><a href="#services" className="hover:text-white transition-colors text-sm">AI経理</a></li>
                <li><a href="#services" className="hover:text-white transition-colors text-sm">AI顧問</a></li>
                <li><a href="#services" className="hover:text-white transition-colors text-sm">法人設立・海外進出支援</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4">Company</p>
              <ul className="space-y-2.5 text-xs font-light leading-relaxed">
                <li>〒153-0061</li>
                <li>東京都目黒区中目黒3-19-7</li>
                <li>パークプレイス中目黒</li>
                <li className="pt-1">takashi.aoyagi@blue-beat.co.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 text-xs text-gray-700 text-center tracking-widest font-light">
          <p>© {new Date().getFullYear()} 株式会社ブルービート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
