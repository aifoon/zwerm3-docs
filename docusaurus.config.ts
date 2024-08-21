import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Zwerm3 Docs",
  tagline: "Audio streaming and triggering",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aifoon", // Usually your GitHub org/user name.
  projectName: "zwerm3", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl:
          //   "https://github.com/aifoon/zwerm3-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "img/aifoon-zwerm-social-card.jpg",
    navbar: {
      title: "Zwerm3",
      logo: {
        alt: "Zwerm3 Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "forUsersSidebar",
          label: "For Users",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "forDevelopersSidebar",
          label: "For Developers",
        },
        {
          href: "https://github.com/aifoon/zwerm3-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "For Users",
          items: [
            {
              label: "Architecture",
              to: "/docs/for-developers/architecture",
            },
          ],
        },
        {
          title: "For Developers",
          items: [
            {
              label: "Architecture",
              to: "/docs/for-developers/architecture",
            },
            {
              label: "zwerm3-jack",
              to: "/docs/category/zwerm3-jack",
            },
            {
              label: "zwerm3-api",
              to: "/docs/category/zwerm3-api",
            },
            {
              label: "kweenb",
              to: "/docs/category/kweenb",
            },
            {
              label: "pd-bee",
              to: "/docs/category/pd-bee",
            },
          ],
        },
        {
          title: "Repositories",
          items: [
            {
              label: "zwerm3-jack",
              to: "https://github.com/aifoon/zwerm3-jack",
            },
            {
              label: "zwerm3-api",
              to: "https://github.com/aifoon/zwerm3-api",
            },
            {
              label: "kweenb",
              to: "https://github.com/aifoon/kweenb",
            },
            {
              label: "pd-bee",
              to: "https://github.com/aifoon/pd-bee",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Aifoon",
              to: "https://aifoon.org",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} aifoon VZW`,
    },
    prism: {
      theme: prismThemes.duotoneLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
