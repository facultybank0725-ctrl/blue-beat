import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 背景画像 */}
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
        alt="AIと経営"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/20 backdrop-blur text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/30">
            AI × 経理 × 財務顧問
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            AIが、<br />
            人を豊かにする。
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            煩雑な経理作業をAIに任せて、<br />
            経営者が本当に大切なことに向き合える時間を。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-center shadow-xl"
            >
              無料相談を予約する
            </a>
            <a
              href="#services"
              className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-center"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
