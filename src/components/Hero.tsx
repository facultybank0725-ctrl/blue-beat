import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end pb-24 overflow-hidden bg-gray-950">
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=85"
        alt="AI technology"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

      {/* 縦書き装飾 */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.4em] text-white/20 uppercase font-light [writing-mode:vertical-rl]">
          AI Accounting & Advisory
        </span>
        <div className="w-px h-24 bg-white/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <p className="text-[11px] tracking-[0.4em] text-blue-400 uppercase font-light mb-8">
            AI × 経理 × 財務顧問
          </p>
          <h1 className="text-7xl md:text-[96px] font-bold text-white leading-[0.95] tracking-tight mb-10">
            AIが、<br />
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              人を豊かにする。
            </em>
          </h1>
          <div className="flex items-end justify-between flex-wrap gap-8">
            <p className="text-sm text-white/40 leading-loose font-light max-w-md">
              煩雑な経理作業をAIに任せて、<br />
              経営者が本当に大切なことに向き合える時間を。
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="bg-blue-500 text-white text-[11px] font-medium px-8 py-4 tracking-[0.2em] uppercase hover:bg-blue-400 transition-colors duration-300"
              >
                無料相談を予約する
              </a>
              <a href="#services" className="text-[11px] text-white/40 tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
                Services →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* スクロール */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
