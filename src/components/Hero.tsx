"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=85",
    alt: "AI technology",
  },
  {
    src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1800&q=85",
    alt: "AI robot",
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=85",
    alt: "Finance",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=85",
    alt: "Business meeting",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 700);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-end pb-24 overflow-hidden bg-gray-950">
      {/* 背景画像スライドショー */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? (fading ? 0 : 1) : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover opacity-40"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

      {/* 縦書き装飾 */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.4em] text-white/20 uppercase font-light [writing-mode:vertical-rl]">
          AI Accounting & Advisory
        </span>
        <div className="w-px h-24 bg-white/10" />
      </div>

      {/* インジケーター */}
      <div className="absolute right-8 bottom-24 flex flex-col gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(false); setCurrent(i); }}
            className={`w-px transition-all duration-300 ${i === current ? "h-8 bg-white" : "h-4 bg-white/30"}`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <p className="text-lg tracking-[0.3em] text-blue-400 font-medium mb-8">
            AI × 経理 × 財務顧問
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-10">
            AIが、<br />
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              人を豊かにする。
            </em>
          </h1>
          <div className="flex items-end justify-between flex-wrap gap-8">
            <p className="text-sm text-white/40 leading-loose font-light max-w-md">
              煩雑な経理作業をAIに任せて、<br />
              経営者が本当に大切なことに向き合える時間を。
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="bg-blue-500 text-white text-[11px] font-medium px-8 py-4 tracking-[0.2em] uppercase hover:bg-blue-400 transition-colors duration-300"
              >
                無料相談を予約する
              </a>
              <a href="#services" className="text-[11px] text-white/40 tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
                Services →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* スクロール */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
