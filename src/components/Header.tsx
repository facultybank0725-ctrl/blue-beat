export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs tracking-[0.2em] text-blue-400 font-medium uppercase">株式会社</span>
          <span className="text-xl font-bold tracking-tight text-gray-900">ブルービート</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500 tracking-wide">
          <a href="#services" className="hover:text-gray-900 transition-colors">サービス</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">会社概要</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">お問い合わせ</a>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors tracking-wide"
        >
          無料相談
        </a>
      </div>
    </header>
  );
}
