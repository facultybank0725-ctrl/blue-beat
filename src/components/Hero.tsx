export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            AI × 経営 × 財務
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            AIが、<br />
            <span className="text-blue-600">人を豊かにする。</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
            最先端のAI技術で経理業務を自動化し、財務戦略をサポート。
            経営者の時間とお金を守り、本当に大切なことに集中できる環境をつくります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-center shadow-lg shadow-blue-200"
            >
              無料相談を予約する
            </a>
            <a
              href="#services"
              className="border-2 border-blue-200 text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-center"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
