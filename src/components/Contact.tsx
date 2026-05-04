export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            お問い合わせ
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            まずは無料相談から
          </h2>
          <p className="text-gray-500">
            AI経理・AI顧問サービスについて、お気軽にご相談ください。初回1時間、無料です。
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
                  placeholder="株式会社〇〇"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition"
                placeholder="example@company.co.jp"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ご興味のあるサービス
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition text-gray-600">
                <option value="">選択してください</option>
                <option>AI経理</option>
                <option>AI顧問</option>
                <option>法人設立・海外進出支援</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ご相談内容
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition resize-none"
                placeholder="お気軽にご記入ください"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              無料相談を申し込む
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
