import { lang } from './default';

const theme = {
  'theme-dark': 'asd Dark',
  'theme-default': 'asd Default',
  'theme-funny': 'asd Funny',
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
    '私はバックエンドとフロントエンドの両方のテクノロジーを使って数年間プログラミングを行ってきました。両者の統合と通信、およびAPIの開発と作成を知っています。',
  description2:
    '私はアジャイル手法（TDD、GIT、スクラム、ポーカープランニング）、ワイヤーフレーミングと高解像度モックアップ、POP（プロパティ指向プログラミング）とOOP（オブジェクト指向プログラミング）を使用しています。 インフラストラクチャのスケーラビリティを向上させるために、カプセル化された方法でDTOS、エンティティ、および作業を定義するのが好きです。 DDD（ドメイン駆動設計）の原則に従う。',

  year: '年',
  years: '年',
  wordpressDesc: 'プラグイン、テーマ、スクリプトの開発',

  techs: '私のお気に入りのテクノロジーは',
  techSub: 'また、他のテクノロジーを使用して作業および開発しました。',
  techSub2: 'あなたは私が使ったすべての技術を見ることができます：',

  experience: '経験',

  january: '1月 ',
  february: '2月',
  december: '12月',
  march: '3月',
  april: '4月',

  job1desc:
    'クライアント向けのカスタムワードプレスとPrestashop（プラグインとテーマの開発）の作成、カスタムサーバーの作成、ワードプレスとPHPでのスクリプトの開発を対象としています。',
  job2desc:
    '小さなプログラミングエージェンシーの創設、クライアントのためのプロジェクトの方向性と管理、私は主に以下を行いました：',
  job2desc1: 'カスタムワードプレス',
  job2desc2: 'カスタムプラグイン',
  job2desc3: 'LiquidNetLtdと共同で専用サーバーを作成・販売。',
  job2desc4:
    'LaravelやCodeIgniterなどのフレームワークを使用したPHPでのWeb作成。',
  job2desc5:
    'ReactやNodeJSなどのフレームワークを使用したJavascriptでのWebの作成',
  job3desc:
    'ThreeJS、WebGL、およびNodeJSテクノロジーを使用した1d3aS.L用の3D仮想スポーツボードの作成。',
  job4desc: 'フルスタック開発者',
  job4desc1:
    '1d3a SLのコアのさまざまな環境向けの、JS、NodeJS、PHPでのAPIとアプリケーションの開発と統合。',
  job5desc: 'フルスタック開発者、Node JS、Reactコンサルタント',
  job5desc1:
    'チャットボットと人間の言語処理を対象とした人工知能プロジェクトの国際的なクライアント向けに、国際的なクライアント向けのWebツールの作成と開発、主にnodeJSとReact（Tailwind、Redux、OpenShift、その他のツールに加えて）での開発。',
  job5desc2:
    '展開、開発、およびスケーラビリティは国際的であり、多数のユーザーを対象としています。 主に（アジアとヨーロッパ）で使用されます',
  job6desc: 'フルスタック開発者',
  job6desc1: 'ドイツの銀行のウェブサイト開発。',
  footercvmsg:
    '私のGithub「polopopeye」または私のブログkennethsuarez.esの個人プロジェクト',
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
