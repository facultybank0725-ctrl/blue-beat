import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        alt="AIと経営"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-blue-300 font-medium mb-8">
            AI × 経理 × 財務顧問
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            AIが、<br />
            <span className="text-blue-400">人を豊かにする。</span>
          </h1>
          <p className="text-lg text-gray-300 leading-loose mb-12 font-light">
            煩雑な経理作業をAIに任せて、<br />
            経営者が本当に大切なことに向き合える時間を。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-white text-gray-900 font-medium px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-center tracking-wide text-sm"
            >
              無料相談を予約する
            </a>
            <a
              href="#services"
              className="border border-white/40 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-center tracking-wide text-sm"
            >
              サービスを見る →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
