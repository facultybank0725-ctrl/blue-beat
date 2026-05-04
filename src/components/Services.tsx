import Image from "next/image";

const services = [
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    title: "AI経理",
    subtitle: "記帳・請求・経費を自動化",
    description:
      "領収書や請求書をAIが自動で読み取り、仕訳・記帳まで一括処理。月次決算を最短3日で。経理の手間を大幅に削減し、本業に集中できる環境をつくります。",
    features: ["領収書・請求書のAI自動読取", "自動仕訳・記帳", "月次レポート自動生成", "クラウド会計ソフト連携"],
    price: "2社限定 50万円",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    title: "AI顧問",
    subtitle: "財務戦略・資金調達をサポート",
    description:
      "AIによるリアルタイム財務分析と、専門家の知見を組み合わせた顧問サービス。キャッシュフロー改善から資金調達まで、経営の羅針盤としてそばにいます。",
    features: ["AIリアルタイム財務分析", "キャッシュフロー改善提案", "資金調達支援（調達額の3%）", "月1回の経営相談（30分〜）"],
    price: "月額 3万円〜",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "法人設立・海外進出支援",
    subtitle: "起業から海外展開まで",
    description:
      "法人設立の手続きから、海外進出の戦略立案まで。AIを活用した市場分析と経験豊富なコンサルタントが、最適なルートをご一緒に考えます。",
    features: ["法人設立手続き支援", "海外市場AIリサーチ", "事業計画書作成サポート", "補助金・助成金情報提供"],
    price: "初回相談 無料（1時間）",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            サービス
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            経営者の「もっと楽に」を、<br />AIで実現します。
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            面倒な経理・財務業務はAIに任せて、経営者が本業に集中できる仕組みを提供します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-white/80">{service.subtitle}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <p className={`font-bold text-sm ${service.price.includes("限定") ? "text-red-600" : "text-blue-700"}`}>
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
