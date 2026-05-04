const stats = [
  { value: "80%", label: "経理工数の削減" },
  { value: "3日", label: "月次決算の完了期間" },
  { value: "3%", label: "資金調達支援手数料" },
  { value: "30分", label: "最短相談時間" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              会社概要
            </span>
            <h2 className="text-4xl font-bold mb-6">
              中小企業の「お金の課題」を、<br />AIで根本から解決する。
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              売上が伸びているのにキャッシュが足りない。そんな経営者の悩みに寄り添い、
              AIを活用した財務管理と戦略的なアドバイスで、持続的な成長をサポートします。
            </p>
            <p className="text-blue-100 leading-relaxed mb-8">
              静岡県沼津市を拠点に、全国の中小企業・スタートアップへサービスを提供しています。
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <p>📍 静岡県沼津市大岡403-1-101</p>
              <p>✉️ takashi.aoyagi@blue-beat.co.jp</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
