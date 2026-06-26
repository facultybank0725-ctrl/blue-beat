'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  const inputClass = "w-full text-sm text-white placeholder-white/20 bg-transparent focus:outline-none py-2 border-b border-white/10 focus:border-blue-400 transition-colors duration-300";

  return (
    <section id="contact" className="relative bg-gray-950 text-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 py-28">
        <div className="grid md:grid-cols-2 gap-20">

          {/* 左 */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-blue-400/60 font-light mb-6">Contact</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
              まずは、<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                無料相談から。
              </span>
            </h2>
            <p className="text-sm text-white/50 font-light leading-loose mb-16">
              AI経理・AI顧問サービスについて、<br />
              お気軽にご相談ください。初回1時間、無料です。
            </p>
            <div className="space-y-8">
              {[
                { label: "所在地", value: "〒410-0022 静岡県沼津市大岡403-1\n101" },
                { label: "メール", value: "takashi.aoyagi@blue-beat.co.jp" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/8 pt-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 font-light">{item.label}</p>
                  <p className="text-sm text-white/60 font-light whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右 フォーム */}
          <div className="relative rounded-none md:rounded-xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' }}>
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-400 text-2xl">✓</span>
                </div>
                <p className="text-2xl font-bold text-white mb-4">送信完了しました</p>
                <p className="text-sm text-white/40 font-light">お問い合わせありがとうございます。<br />担当者よりご連絡いたします。</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {[
                  { label: "お名前", name: "name", type: "text", placeholder: "山田 太郎", required: true },
                  { label: "会社名", name: "company", type: "text", placeholder: "株式会社〇〇", required: false },
                  { label: "メールアドレス", name: "email", type: "email", placeholder: "example@company.co.jp", required: true },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/30 font-light mb-3">
                      {field.label}{field.required && <span className="text-blue-400 ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-white/30 font-light mb-3">
                    ご興味のあるサービス
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                    style={{ color: form.service ? 'white' : 'rgba(255,255,255,0.2)' }}
                  >
                    <option value="" style={{ background: '#111827' }}>選択してください</option>
                    <option style={{ background: '#111827' }}>AI経理</option>
                    <option style={{ background: '#111827' }}>AI顧問</option>
                    <option style={{ background: '#111827' }}>法人設立・海外進出支援</option>
                    <option style={{ background: '#111827' }}>その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-white/30 font-light mb-3">
                    ご相談内容
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="お気軽にご記入ください"
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">送信に失敗しました。しばらくしてから再度お試しください。</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="relative w-full overflow-hidden group text-[11px] font-medium py-5 tracking-[0.3em] uppercase disabled:opacity-50 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: 'white' }}
                >
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">{status === 'loading' ? '送信中...' : '送信する'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
