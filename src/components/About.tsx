import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="ブルービートのコンサルタント"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-2xl">
              <p className="text-4xl font-bold tracking-tight">80%</p>
              <p className="text-xs text-blue-200 mt-1 font-light tracking-wider">経理工数の削減実績</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-blue-600 font-medium mb-6">
              About
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              「売上は伸びているのに、<br />なぜかお金が足りない」
            </h2>
            <p className="text-gray-400 leading-loose mb-5 text-sm font-light">
              そんな経営者の声を何度も聞いてきました。問題は売上ではなく、キャッシュフローの管理にあることがほとんどです。
            </p>
            <p className="text-gray-400 leading-loose mb-10 text-sm font-light">
              私たちブルービートは、AIを活用した経理・財務サービスで、中小企業が本来の力を発揮できる環境をつくります。東京都目黒区を拠点に、全国の経営者をサポートしています。
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { value: "3日", label: "月次決算の完了期間" },
                { value: "3%", label: "資金調達支援手数料" },
                { value: "30分", label: "最短相談時間" },
                { value: "無料", label: "初回法人設立相談" },
              ].map((stat) => (
                <div key={stat.label} className="border border-gray-100 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-600 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-light">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-300 space-y-1.5 font-light tracking-wide">
              <p>〒153-0061 東京都目黒区中目黒3-19-7 パークプレイス中目黒</p>
              <p>takashi.aoyagi@blue-beat.co.jp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
