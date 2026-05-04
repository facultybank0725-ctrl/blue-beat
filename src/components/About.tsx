import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-28">
        {/* ヘッダー */}
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-light">About</p>
          <p className="text-xs text-white/60 font-light tracking-wide">株式会社ブルービート</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* 大見出し */}
          <div className="md:col-span-7">
            <blockquote className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-12">
              「売上は伸びているのに、<br />
              <span className="text-white/60">なぜかお金が足りない」</span>
            </blockquote>
            <p className="text-sm text-white/75 leading-loose font-light mb-6 max-w-xl">
              そんな経営者の声を何度も聞いてきました。問題は売上ではなく、キャッシュフローの管理にあることがほとんどです。
            </p>
            <p className="text-sm text-white/75 leading-loose font-light max-w-xl">
              私たちブルービートは、AIを活用した経理・財務サービスで、中小企業が本来の力を発揮できる環境をつくります。東京都目黒区を拠点に、全国の経営者をサポートしています。
            </p>

            {/* 数字 */}
            <div className="grid grid-cols-4 gap-0 mt-16 border-t border-white/10 pt-10">
              {[
                { value: "80%", label: "経理工数削減" },
                { value: "3日", label: "月次決算" },
                { value: "3%", label: "調達手数料" },
                { value: "無料", label: "初回相談" },
              ].map((stat) => (
                <div key={stat.label} className="pr-6 border-r border-white/10 last:border-0">
                  <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="text-[10px] text-white/60 mt-1.5 tracking-widest uppercase font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 画像 */}
          <div className="md:col-span-5">
            <div className="relative h-[480px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="ブルービート"
                fill
                className="object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>
            <div className="mt-6 text-[11px] text-white/50 font-light leading-relaxed tracking-wide">
              <p>〒153-0061</p>
              <p>東京都目黒区中目黒3-19-7 パークプレイス中目黒</p>
              <p className="mt-1">takashi.aoyagi@blue-beat.co.jp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
