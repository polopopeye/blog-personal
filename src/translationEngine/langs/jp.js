import { lang } from './default';

const theme = {
  'theme-dark': 'Theme Dark',
  'theme-default': 'Theme Default',
  'theme-funny': 'Theme Funny',
};

const app = {
  sryNotFound: '結果がありません...',
  edit: '記事を編集する',
  fetching: '記事を読み込んでいます...',
  moreLink: '記事全文を見る',
  connect: '接続',
  home: '始める',
  tech: '使用したテクノロジー',
  search: '探す...',
  developed: 'Kenneth Suarez によって開発されました  ',
  lookCode: 'githubでこのサイトのコードを見てください',
  yearsOfExperience: '積年の経験 ',
  learnedOn: '学習した',
  descriptionField: '説明',
  personalProjects: '個人プロジェクト',
  downloadAsPdf: 'PDFとしてダウンロード',
};

const tech = {
  react:
    '私のお気に入りのテクノロジーの1つであり、フロントエンドについて話すときの最初のオプションです。',
  angular:
    '私の主な選択肢ではありませんが、私はグーグルによって開発されたこの技術が好きで、今では基本的な方法を使用することを好みます人気によって反応します',

  bootstrap:
    '私はブートストラップCSSを使用するのが大好きです。最近は、Tailwindが好きですが、CSSを気にせずにアプリをすばやく開発したい場合は、Tailwindを使用することがあります。',

  cloudflare:
    '私は、追加のセキュリティレイヤー、DDosシールド、追加のanalisys、および優れたDNSマネージャーのためのcloudflareが大好きです。ほとんどの企業がそれについて知らないのは悲しいことですが、',

  codeigniter:
    'PHPを使用してアプリを構築することについて話すとき、使いやすく、多くの可能性があります。',

  cypress:
    '統合テストとフロントエンドレンダリングをテストする場合の最初のオプション、',

  firebase:
    'FirestoreのようなFirebaseのスタックを使用し、GoogleCloudServerを利用するのが大好きです',

  gatsby:
    'nextJSでGatsbyを使用するのが大好きなのは、フロントエンドで使用する私のお気に入りのフレームワークの1つであり、使いやすく、graphQLのような多くの可能性があります。',

  googleCloud:
    'スケーラビリティとパフォーマンスにより、Googleプラットフォームのすべての環境の利点が好きです。',

  heroku:
    'バックエンドについて話すとき、herokuのサーバーは私たちを自由とスケーラビリティに導きます ',

  jest: 'ユニットテストの最初のオプションは、',

  laravel:
    '使用するのに最もプロフェッショナルで強力なフレームワークであるPHPを使用して開発する必要がある場合の、私の最初のオプション',

  mongodb: 'スケーラビリティのため、ファイアストア以外の私のお気に入りのDB',

  mysql: '私が学んだ最初のデータベースエンジン、私はそれが好きです',

  nestjs:
    'nodeJSを使用したバックエンドの最初のオプション、背後にあるすべてのインフラストラクチャが好きで、APIの可能性がたくさんあります',

  nextjs: '反応、多くの可能性と自由を備えたフロントエンドの最初のオプション',
  nodejs:
    'GoLangを使用すると、バックエンドに最適な技術であると思います。これを最初に使用するオプションは、',

  sanityjs:
    '小さなプロジェクトのためのdbエンジンのような良いオプション、そして開発するための簡単で速い方法（私の最初のオプションではありませんが、私はそれが好きです）、',

  tailwind:
    'cssフレームワークとして使用する最初のオプション、主にパフォーマンス、モバイルファースト、テーマのスケーラビリティ、',

  tensorflowjs:
    '「私は機械学習が大好きで、すべてAIに関連しています。このテクノロジーで未来を見たいと思っています。ウェブ開発に適用されるテンソルフローは、本当にエキサイティングです！」、',

  threejs:
    'キャンバスを使用してインタラクティブなWebサイトを作成するための便利なツール、および他のツールとの相互作用。これを使用するプロジェクトによって大きく異なります。それ以外の場合は、Unityを使用しますが、それでも便利です。',
  typescript:
    '私はTSが大好きです。これは、seriusプロジェクトを開発するための最初のオプションであり、JavaScriptのようなものですが、超能力を備えています。',

  webgl:
    'インタラクティブなウェブサイトを作るためのフルテクノロジー。私の最初の選択肢ではありませんが、ウェブサイト開発の小規模な開発に役立ちます。',

  wordpress:
    '私はこの技術と、プラグインとテーマを開発および統合するための簡単な環境が大好きで、現在は使用していません... nextJS、nestJSなどのTypescript技術を使用することを好みます。',

  golang:
    'nodeJSの後のバックエンドで私のお気に入りの言語の1つは、非常に高速でシンプル<3、',
};

const cv = {
  basicInformationTittle: '基本情報',
  contactDetails: 'コンタクト',
  phoneNumberField: '電話',
  emailField: 'Eメール',
  githubField: 'Github',
  LinkedInField: 'LinkedIn',
  LanguagesTittle: '言語',
  highLang: 'ネイティブ',
  normalLang: '高い',
  lowLang: 'バイリンガル',
  description1:
    '情熱的な FullStack 開発者として、私の専門知識は API の作成と開発に及び、プロジェクトのプロトタイピングに強い関心を持っています。 私は、迅速かつ効果的な概念化のためにスプリント デザインなどの手法を採用し、あらゆる詳細に深く取り組みます。 完全なプロジェクト開発を扱うことができ、チームワークとさまざまな設定で重要な意思決定を行った経験があります。 私のアプローチは、アジャイルの実践と、TDD、GIT などの健全なテクニック、およびカンバンやスクラムなどの方法論に基づいており、常にスケーラビリティと効率に重点を置いています。',
  year: '年',
  years: '年',
  wordpressDesc: 'プラグイン、テーマ、スクリプトの開発',

  techs: '私のお気に入りのテクノロジーは',
  techSub: 'また、他のテクノロジーを使用して作業および開発しました。',
  techSub2: 'あなたは私が使ったすべての技術を見ることができます：',

  experience: '経験',

  january: '1月',
  february: '2月',
  march: '3月',
  april: '4月',
  may: '5月',
  june: '6月',
  july: '7月',
  august: '8月',
  september: '9月',
  october: '10月',
  november: '11月',
  december: '12月',

  currentlly: '今働いています',

  job1desc:
    'Sirastudio では、特定のプラグインやテーマの作成を含む、カスタム WordPress および PrestaShop Web サイトの開発に重点を置きました。 また、WordPress 用に最適化されたサーバーをセットアップし、PHP スクリプトを開発して、クライアントに包括的な Web ソリューションを提供しました。',
  job2desc:
    '私は、中小企業のオンライン プレゼンス向上の支援に重点を置いたプログラミング代理店、Hard Monkey PC を設立しました。 私のサービスには、Web デザインと開発、デジタル マーケティング、カスタム WordPress サイトとプラグイン開発が含まれていました。 また、LiquidNet Ltd.と協力して専用サーバーの作成と販売を担当し、ReactやNodeJSなどのJavaScriptテクノロジーに加えて、LaravelやCodeIgniterなどのフレームワークを使用したPHPを使用したWebサイトの開発も担当しました。',
  job3desc:
    'Ibermática では、ThreeJS、WebGL、NodeJS を使用して 1d3a S.L 用の 3D 仮想スポーツ ボードを作成しました。 私の仕事はクライアントから肯定的なフィードバックを獲得し、プロジェクトの開発と拡大を継続するための直接的な取り組みにつながりました。 これには、より複雑な側面やその他の関連アプリケーションへの取り組みが含まれます。',
  job4desc: 'フルスタック開発者',
  job4desc1:
    '1d3a SL では、JS、NodeJS、および PHP を使用した API とアプリケーションの統合に従事しました。 私は、サッカー クラブ バルセロナなどのチームが使用する、スポーツ戦略用の 3D 仮想ホワイトボードを開発しました。 さらに、コーチ向けのビデオ編集ツールを作成し、スポーツ チームを管理するためのアプリへのこのテクノロジーの統合をサポートしました。',
  job5desc: 'フルスタック開発者、Node JS、Reactコンサルタント',
  job5desc1:
    'AXA では、アジアとヨーロッパで広く使用されているチャットボット管理アプリケーションとダッシュボードの導入、開発、拡張を主導しました。 Microsoft のオープンソース AI ツールである NLP.js を利用して、チャットボットの毎日のバックアップ システムと、直感的なユーザー パスウェイの視覚化とリアルタイムの問題検出のための革新的なダッシュボード グラフを開発しました。 このダッシュボードは、モバイルやソーシャル ネットワークなどのさまざまなプラットフォームでの通話や自動チャットなど、さまざまなグローバルな用途に不可欠でした。',
  job6desc: 'フルスタック開発者',
  job6desc1: 'ドイツの銀行のウェブサイト開発。',
  job7desc: 'フルスタック開発者',
  job7desc1:
    'Embat Technologies では、Embat アプリの新しい機能とモジュール、特に企業保有およびシナリオ予測のための財務管理モジュールの作成に重点を置きました。 私の仕事には、React の開発、包括的な Storybook の作成、およびさまざまなタイプの応答性が高く最適化されたチャート用の Recharts の利用が含まれていました。 財務データの視覚化と多様なグラフ作成のためのモジュール式テーブルを構築し、VirtualDOM を通じて効率的なパフォーマンスを確保しました。 さらに、Google Cloud Functions を使用してバックエンドを開発し、全体的な機能とスケーラビリティを強化しました。',
  job8desc: 'フルスタック開発者',
  job8desc1:
    'Union Avatars では、FullStack 開発者として、3D アバター モデル コンバーターのフロントエンドを React で、バックエンドを Python で開発することに取り組みました。 アバター アニメーションをプレビューおよび選択するための 3D ビューアをフロントエンドに実装しました。これは、OpenSea で NFT を表示するためにも使用されました。 私は、Datadog RUM および Google Analytics との分析システムの統合に貢献しました。 Vue で開発したアバターとコスチューム セレクターの最適化とデバッグに参加し、React への移行、Zustand、SSR などの改善の実装、Storybook UI の開発を支援しました。',
  job9desc: 'フルスタック開発者',
  job9desc1:
    'バックエンドでは Strapi と Azure Functions、フロントエンドでは React を使用して、メトリクス プラットフォームのバックオフィスの主要な機能を開発しました。 ユーザー監視用に Microsoft Graph API を統合することに加えて、PDF レポート モジュールと Highcharts を使用したダッシュボードを実装しました。',

  footercvmsg:
    '私のGithub「polopopeye」または私のブログkennethsuarez.esの個人プロジェクト',

  educationTitle: '教育',
  education1: 'マイクロコンピュータシステムおよびローカルネットワークの技術者',
  education2:
    '私はエストニアで Cyber​​ Security MSC を開始しましたが、私が最も好きな Web 開発にもっと集中することにしました。',
};

export const jp = {
  translation: {
    titleDevPosition: 'フルスタック開発者',
    tooHotPerson: '暑すぎる人...',
    createNewArticle: '新しい記事を作成する',
    notLoggedIn: '接続または登録して記事を作成してください...',
    publishAnsw: '投稿を公開しますか？',
    publish: 'はい！ 新しい投稿を作成する',
    'tech.title': 'テクノロジー ',
    'articles.title': '論文 ',
    'curriculum.title': 'カリキュラム ',
    'dashboard.title': 'ダッシュボード ',
    'create.title': '作成 ',
    selectTheme: 'テーマを選択',
    // General
    selectLanguage: '言語',
    ...theme,
    ...lang,
    ...cv,
    ...app,
    ...tech,
  },
};
