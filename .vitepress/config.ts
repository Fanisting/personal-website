import { getPosts, getPostLength } from "./theme/serverUtils";
import { buildBlogRSS } from "./theme/rss";

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

async function config() {
  return {
    lang: "en-US",
    title: "Xuhang Fan",
    description: "Home of Xuhang Fan",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/svg",
          href: "/horse.svg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "Xuhang Fan",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of Xuhang Fan",
        },
      ],
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/rice.svg",
      avator:'/avatar.png',
      search: {
        provider: 'local'
      },
      docsDir: "/",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 5,
      postLength: await getPostLength(),
      nav: [
        {
          text: "🏡Home",
          link: "/",
        },
        {
          text: "🔖Tags",
          link: "/tags",
        },
        {
          text: "🗄️Archives",
          link: "/archives",
        },
        {
          text: "📃CV",
          // link: "https://drive.google.com/file/d/1DTB_pZsupBRffIftEOd4_VWLS5DQKTiK/view?usp=sharing",
          link: "/cv",
        },
        {
          text: "📃About Me",
          link: "/about",
        },
        // {
        //   text: "🔥RSS",
        //   link: "https://clark-cui.top/feed.xml",
        // },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/Fanisting" },
        // { icon: "twitter", link: "https://twitter.com/qingshuihe1" },
        {
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>',
          },
          link: "mailto:xuhang.fan@duke.edu",
        },
      ],
      // outline: 2, //设置右侧aside显示层级
      aside: false,
    },
    buildEnd: buildBlogRSS,
    markdown: {
      config: (md) => {
        md.use(require("markdown-it-mathjax3"));
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        },
      },
    },
  };
}


export default config();
