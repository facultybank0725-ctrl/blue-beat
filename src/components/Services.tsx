import Image from "next/image";

const services = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    title: "AI経理",
    subtitle: "Accounting Automation",
    description:
      "領収書や請求書をAIが自動で読み取り、仕訳・記帳まで一括処理。月次決算を最短3日で完了。経理の手間を大幅に削減し、本業に集中できる環境をつくります。",
    features: ["領収書・請求書のAI自動読取", "自動仕訳・記帳", "月次レポート自動生成", "クラウド会計ソフト連携"],
    price: "2社限定 ¥500,000",
    limited: true,
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    title: "AI顧問",
    subtitle: "Financial Advisory",
    description:
      "AIによるリアルタイム財務分析と、専門家の知見を組み合わせた顧問サービス。キャッシュフロー改善から資金調達まで、経営の羅針盤としてそばにいます。",
    features: ["AIリアルタイム財務分析", "キャッシュフロー改善提案", "資金調達支援（調達額の3%）", "月1回の経営相談（30分〜）"],
    price: "月額 ¥30,000〜",
    limited: false,
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "法人設立・海外進出支援",
    subtitle: "Business Development",
    description:
      "法人設立の手続きから、海外進出の戦略立案まで。AIを活用した市場分析と経験豊富なコンサルタントが、最適なルートをご一緒に考えます。",
    features: ["法人設立手続き支援", "海外市場AIリサーチ", "事業計画書作成サポート", "補助金・助成金情報提供"],
    price: "初回相談 無料（1時間）",
    limited: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      {/* セクションヘッダー */}
      <div className="max-w-7xl mx-auto px-8 pt-28 pb-16 flex items-end justify-between border-b border-gray-100">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-4">Services</p>
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">私たちが提供する<br />3つのサービス</h2>
        </div>
        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs text-right hidden md:block">
          面倒な経理・財務業務はAIに任せて、<br />経営者が本業に集中できる仕組みを。
        </p>
      </div>

      {/* サービスリスト */}
      <div className="max-w-7xl mx-auto px-8">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`grid md:grid-cols-2 gap-0 border-b border-gray-100 group ${i % 2 === 1 ? "" : ""}`}
          >
            {/* 画像 */}
            <div className={`relative h-72 md:h-96 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gray-900/20" />
              <span className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-white/60 uppercase font-light">
                {service.num}
              </span>
              {service.limited && (
                <span className="absolute top-6 right-6 bg-red-500 text-white text-[10px] font-medium px-3 py-1 tracking-widest uppercase">
                  限定2社
                </span>
              )}
            </div>

            {/* テキスト */}
            <div className={`flex flex-col justify-center px-12 py-12 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-[10px] tracking-[0.3em] text-blue-500 uppercase font-light mb-3">{service.subtitle}</p>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-5">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-loose font-light mb-8">{service.description}</p>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs text-gray-500 font-light tracking-wide">
                    <div className="w-4 h-px bg-blue-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <p className={`text-sm font-semibold tracking-wide ${service.limited ? "text-red-500" : "text-blue-600"}`}>
                  {service.price}
                </p>
                <a href="#contact" className="text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-gray-900 transition-colors">
                  詳しく →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
