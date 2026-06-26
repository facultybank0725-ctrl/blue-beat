'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function AnimatedStat({ value, label, suffix = '' }: { value: number | string; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const isNumber = typeof value === 'number';
  const count = useCountUp(isNumber ? value : 0, 1800, started && isNumber);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative">
      <div className="absolute -top-4 left-0 w-8 h-px bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent mb-2">
        {isNumber ? `${count}${suffix}` : value}
      </p>
      <p className="text-[10px] text-white/40 tracking-widest uppercase font-light">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-gray-950 text-white overflow-hidden">
      {/* 背景グラデーション装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 py-28">
        <div className="flex items-end justify-between mb-20 border-b border-white/8 pb-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light">About</p>
          <p className="text-xs text-white/30 font-light tracking-wide">株式会社ブルービート</p>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <blockquote className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-12">
              「売上は伸びているのに、<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                なぜかお金が足りない」
              </span>
            </blockquote>
            <p className="text-sm text-white/60 leading-loose font-light mb-6 max-w-xl">
              そんな経営者の声を何度も聞いてきました。問題は売上ではなく、キャッシュフローの管理にあることがほとんどです。
            </p>
            <p className="text-sm text-white/60 leading-loose font-light max-w-xl">
              私たちブルービートは、AIを活用した経理・財務サービスで、中小企業が本来の力を発揮できる環境をつくります。東京都を拠点に、全国の経営者をサポートしています。
            </p>

            {/* 数字 */}
            <div className="grid grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/8">
              <AnimatedStat value={80} suffix="%" label="経理工数削減" />
              <AnimatedStat value="3日" label="月次決算" />
              <AnimatedStat value={3} suffix="%" label="調達手数料" />
              <AnimatedStat value="無料" label="初回相談" />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative h-[480px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="ブルービート"
                fill
                className="object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] text-white/30 font-light leading-relaxed tracking-wide">
                  〒410-0022 静岡県沼津市大岡403-1<br />
                  101<br />
                  <span className="text-blue-400/60 mt-1 block">takashi.aoyagi@blue-beat.co.jp</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
