export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "宋玉の世界",
  /** your name */
  author: "XingGuo Song",
  /** website description */
  desc: "爱技术，也爱生活！",
  /** your deployed domain */
  website: "https://songxingguo.com/blog/",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/songxingguo",
    },
    {
      name: "rss",
      href: "/blog/atom.xml",
    },
  ],
  /** your header info */
  header: {
    twitter: "@songxingguo",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Albums",
      href: "https://gallery.songxingguo.com",
    },
    {
      name: "Bicycle",
      href: "https://bicycling.songxingguo.com",
    },
    {
      name: "About",
      href: "https://resume.songxingguo.com",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [],
};
