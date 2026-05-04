export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid md:grid-cols-2 gap-20">
          {/* 左 */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-6">Contact</p>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
              まずは、<br />無料相談から。
            </h2>
            <p className="text-sm text-gray-400 font-light leading-loose mb-12">
              AI経理・AI顧問サービスについて、<br />
              お気軽にご相談ください。初回1時間、無料です。
            </p>
            <div className="space-y-6">
              {[
                { label: "所在地", value: "〒153-0061 東京都目黒区中目黒3-19-7\nパークプレイス中目黒" },
                { label: "メール", value: "takashi.aoyagi@blue-beat.co.jp" },
              ].map((item) => (
                <div key={item.label} className="border-t border-gray-100 pt-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gray-300 mb-2 font-light">{item.label}</p>
                  <p className="text-sm text-gray-600 font-light whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右 フォーム */}
          <div className="pt-16">
            <form className="space-y-8">
              {[
                { label: "お名前", type: "text", placeholder: "山田 太郎", required: true },
                { label: "会社名", type: "text", placeholder: "株式会社〇〇", required: false },
                { label: "メールアドレス", type: "email", placeholder: "example@company.co.jp", required: true },
              ].map((field) => (
                <div key={field.label} className="border-b border-gray-200 pb-2">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gray-400 font-light mb-3">
                    {field.label}{field.required && <span className="text-blue-400 ml-1">*</span>}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full text-sm text-gray-800 placeholder-gray-300 bg-transparent focus:outline-none py-1"
                  />
                </div>
              ))}

              <div className="border-b border-gray-200 pb-2">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gray-400 font-light mb-3">
                  ご興味のあるサービス
                </label>
                <select className="w-full text-sm text-gray-500 bg-transparent focus:outline-none py-1 appearance-none">
                  <option value="">選択してください</option>
                  <option>AI経理</option>
                  <option>AI顧問</option>
                  <option>法人設立・海外進出支援</option>
                  <option>その他</option>
                </select>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gray-400 font-light mb-3">
                  ご相談内容
                </label>
                <textarea
                  rows={3}
                  placeholder="お気軽にご記入ください"
                  className="w-full text-sm text-gray-800 placeholder-gray-300 bg-transparent focus:outline-none py-1 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white text-[11px] font-medium py-5 tracking-[0.3em] uppercase hover:bg-blue-600 transition-colors duration-300"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
