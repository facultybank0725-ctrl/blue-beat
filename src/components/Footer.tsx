export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <p className="text-xl font-bold text-white mb-2">株式会社ブルービート</p>
            <p className="text-sm">AIが人を豊かにする。</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-white font-medium mb-3">サービス</p>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">AI経理</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI顧問</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">法人設立・海外進出支援</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-medium mb-3">会社情報</p>
              <ul className="space-y-2 text-sm">
                <li>〒153-0061 東京都目黒区中目黒3-19-7 パークプレイス中目黒</li>
                <li>takashi.aoyagi@blue-beat.co.jp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} 株式会社ブルービート. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
