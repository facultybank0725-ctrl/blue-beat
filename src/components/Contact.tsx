export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-blue-600 font-medium mb-5">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            まずは無料相談から
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            AI経理・AI顧問サービスについて、お気軽にご相談ください。<br />初回1時間、無料です。
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition text-gray-800 placeholder-gray-300"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition text-gray-800 placeholder-gray-300"
                  placeholder="株式会社〇〇"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition text-gray-800 placeholder-gray-300"
                placeholder="example@company.co.jp"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                ご興味のあるサービス
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition text-gray-500">
                <option value="">選択してください</option>
                <option>AI経理</option>
                <option>AI顧問</option>
                <option>法人設立・海外進出支援</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">
                ご相談内容
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition resize-none text-gray-800 placeholder-gray-300"
                placeholder="お気軽にご記入ください"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors tracking-wide text-sm"
            >
              無料相談を申し込む
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
