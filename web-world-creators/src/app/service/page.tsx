const SERVICE_DETAILS_LIST = [
  {
    id: 1,
    title: '1. Web開発',
    details: [
      {
        id: 11,
        title: 'カスタムWebサイト開発',
        description:
          'クライアントのビジネスニーズに合わせたオーダーメイドのウェブサイトを開発。最新のウェブ技術を使用し、SEO最適化、高速ローディング、モバイル対応を実現。',
      },
      {
        id: 12,
        title: 'eコマースソリューション',
        description:
          '効果的なオンラインストアの設計と開発。ユーザーフレンドリーなショッピング体験、安全な決済システム、在庫管理機能を提供',
      },
    ],
  },
  {
    id: 2,
    title: '2. モバイルアプリ開発',
    details: [
      {
        id: 13,
        title: 'iOS/Androidアプリ開発',
        description:
          'ネイティブおよびクロスプラットフォームのアプリ開発。ユーザーのニーズに合わせたカスタマイズ可能な機能と、直感的な操作性を実現。',
      },
      {
        id: 14,
        title: 'アプリメンテナンス＆サポート',
        description: 'アプリの定期的なアップデート、バグ修正、パフォーマンス向上のためのサポートを提供。',
      },
    ],
  },
  {
    id: 3,
    title: '3. UI/UXデザイン',
    details: [
      {
        id: 15,
        title: 'ユーザー中心のデザイン',
        description:
          'ユーザーリサーチとフィードバックを基にしたデザインプロセス。直感的で使いやすいインターフェースを実現。',
      },
      {
        id: 16,
        title: 'プロトタイピング＆ユーザーテスト',
        description:
          'インタラクティブなプロトタイプの作成と実際のユーザーによるテストを通じて、最適なユーザーエクスペリエンスを追求。',
      },
    ],
  },
  {
    id: 4,
    title: '4. デジタルマーケティング',
    details: [
      {
        id: 17,
        title: 'SEO',
        description: 'ウェブサイトの検索エンジン最適化を実施し、オーガニックトラフィックの増加を目指す。',
      },
      {
        id: 18,
        title: 'ソーシャルメディアマーケティング',
        description: 'ターゲットオーディエンスに合わせたソーシャルメディア戦略の策定と実行。',
      },
    ],
  },
];

export default function Service() {
  return (
    <div className="mx-auto max-w-[960px] px-4">
      <h2 className="text-2xl font-bold text-blue-700 py-8">SERVICE</h2>
      <div className="flex flex-col w-full py-4">
        {SERVICE_DETAILS_LIST.map((serviceDetails) => (
          <div key={serviceDetails.id} className="space-y-4 py-4 border-b border-blue-100">
            <h3 className="text-lg">{serviceDetails.title}</h3>
            {serviceDetails.details.map((detail) => (
              <div key={detail.title} className="bg-blue-50 rounded p-4 shadow">
                <p className="text-base font-bold mb-2">{detail.title}</p>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
