import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vue,
  shopify,
  wordpress,
  mongodb,
  python,
  angular,
  sql,
  git,
  nextjs,
  threejs,
  kjsce,
  book,
  mstar,
  threader,
  shippr,
  chatSpace,
  spot,
  spot2,
  sotq,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "紹介",
  },
  {
    id: "work",
    title: "業務",
  },
  {
    id: "contact",
    title: "接触",
  },
];

const services = [
  {
    title: "フロントエンド開発者",
    icon: web,
  },
  {
    title: "バックエンド開発者",
    icon: backend,
  },
  {
    title: "WordPress開発者",
    icon: mobile,
  },
  {
    title: "Python開発者",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "フロントエンド開発者",
    company_name:
      "JustSystems",
    icon: kjsce,
    iconBg: "#383E56",
    date: "2018年7月～2019年5月",
    points: [
      "HTML、CSS、およびJavaScriptを使用してレスポンシブWebサイトを開発および維持し、ユーザーのエンゲージメントが25％増加しました。",
      "UXデザイナーやバックエンドの開発者と協力して新機能を実装し、Webサイトのパフォーマンスを向上させることで、ページの読み込み速度が15％向上しました。",
    ],
  },
  {
    title: "フルスタック開発者",
    company_name: "JTB Corporation",
    icon: book,
    iconBg: "#E6DEDD",
    date: "2019年6月～2022年7月",
    points: [
      "私はフルスタック開発者として、さまざまなプログラミング言語とフレームワークの専門知識を活用してスケーラブルなWebアプリケーションを作成しました。 効率的でユーザーフレンドリーなソリューションを提供することで、さまざまな産業分野で顧客のニーズをうまく満たすことができます。",
      "フルスタック開発者としての役割を果たしながら、私は多機能チームと緊密に協力して要件を分析し、データベース構造を設計し、強力なフロントエンドとバックエンド機能を実装しました。 このようなコラボレーション方式は、シームレスなユーザー体験を提供し、最終的にはビジネスパフォーマンスの向上に貢献しました。",
    ],
  },
  {
    title: "フルスタックCMS開発者",
    company_name: "JTEKT",
    icon: mstar,
    iconBg: "#E6DEDD",
    date: "2022年8月～現在",
    points: [
      "PHP、JavaScript、MySQLを活用してコンテンツ管理を簡素化し、直感的なユーザーインターフェイスを作成するカスタムCMSソリューションの開発とメンテナンスを推進しました。",
      "高度な機能を実装し、パフォーマンスを最適化し、問題をすばやく解決するために、さまざまな機能を実行するチームとのシームレスなコラボレーションを促進し、Webサイトの機能を向上させ、比類のないユーザーエクスペリエンスを提供しました。",
    ],
  },
];

const awards = [
  {
    award: spot2,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Jun 2023",
  },
  {
    award: spot,
    name: "SPOT Award",
    company: "Morningstar",
    image: mstar,
    height: "full",
    date: "Feb 2022",
  },
  {
    award: sotq,
    name: "Star of the Quarter Award",
    company: "Morningstar",
    image: mstar,
    height: "1/2",
    date: "Jan 2023",
  }
];

const projects = [
  {
    name: "Threader",
    description:
      "Pioneered Threaderは、ユーザーが短いメッセージを投稿して対話できる革新的なソーシャルメディアプラットフォームです。",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent",
      },
      {
        name: "clerk",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "vercel",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: threader,
    source_code_link: "https://github.com/NirajBhavnani/Threader",
  },
  {
    name: "Shippr",
    description:
      "お支払い機能を備えた完全に反応する最新のフルスタックEコマースアプリケーションを開発してデプロイしました。",
    tags: [
      {
        name: "WordPress platform",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: shippr,
    source_code_link: "https://github.com/NirajBhavnani/Shippr",
  },
  {
    name: "ChatSpace",
    description:
      "認証システムを使用してライブチャットルームWebアプリケーションを構築およびデプロイしました。",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongDB",
        color: "bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent",
      },
      {
        name: "Socket.IO",
        color: "bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent",
      },
    ],
    image: chatSpace,
    source_code_link: "https://github.com/NirajBhavnani/ChatSpace",
  }
];

export { services, technologies, experiences, awards, projects };
