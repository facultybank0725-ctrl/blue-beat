const services = [
  {
    icon: "🤖",
    title: "AI経理",
    subtitle: "記帳・請求・経費を自動化",
    description:
      "AIが領収書・請求書を自動読み取りし、仕訳・記帳を自動化。月次決算を最短3日で完了。経理担当者の工数を最大80%削減します。",
    features: ["領収書・請求書のAI自動読取", "自動仕訳・記帳", "月次レポート自動生成", "クラウド会計ソフト連携"],
    price: "月額 3万円〜",
  },
  {
    icon: "💡",
    title: "AI顧問",
    subtitle: "財務戦略・資金調達をAIで加速",
    description:
      "AIによるリアルタイム財務分析と、専門家の知見を組み合わせた顧問サービス。キャッシュフロー改善・資金調達・経営判断をトータルサポート。",
    features: ["AIリアルタイム財務分析", "キャッシュフロー改善提案", "資金調達支援（調達額の3%）", "月1回の経営相談（30分〜）"],
    price: "月額 3万円〜",
  },
  {
    icon: "🏢",
    title: "法人設立・海外進出支援",
    subtitle: "スタートアップから海外まで",
    description:
      "法人設立の手続きから、海外進出の戦略立案まで。AIを活用した市場分析と、経験豊富なコンサルタントが最適なルートをご提案します。",
    features: ["法人設立手続き支援", "海外市場AIリサーチ", "事業計画書作成サポート", "補助金・助成金情報提供"],
    price: "初回相談 無料（1時間）",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            サービス
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AIで、経営をシンプルに。
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            面倒な経理・財務業務をAIが代行。経営者が本業に集中できる仕組みを提供します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{service.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-blue-100 pt-4">
                <p className="text-blue-700 font-bold text-sm">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
