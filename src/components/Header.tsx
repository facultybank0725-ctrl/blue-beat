export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700">BlueBeat</span>
          <span className="text-xs text-blue-400 font-medium mt-1">株式会社</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">サービス</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">会社概要</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">お問い合わせ</a>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          無料相談
        </a>
      </div>
    </header>
  );
}
