import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import type * as Redocusaurus from "redocusaurus";

const config: Config = {
  title: "Zwerm3 Documentation",
  tagline: "Audio streaming and triggering",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://zwerm3-docs.onrender.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aifoon", // Usually your GitHub org/user name.
  projectName: "zwerm3", // Usually your repo name.

  onBrokenLinks: "ignore",
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
          docItemComponent: "@theme/ApiItem",
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "zwerm3-api",
        docsPluginId: "classic",
        config: {
          jacktrip: {
            specPath: "http://localhost:3000/api-yaml",
            outputDir: "docs/for-developers/zwerm3-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: true,
              sidebarCollapsed: true,
            },

            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    image: "img/aifoon-zwerm-social-card.jpg",
    languageTabs: [
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
        variant: "native",
      },
    ],
    navbar: {
      title: "Zwerm3",
      logo: {
        alt: "Zwerm3 Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   position: "left",
        //   sidebarId: "forUsersSidebar",
        //   label: "For Users",
        // },
        // {
        //   type: "docSidebar",
        //   position: "left",
        //   sidebarId: "forDevelopersSidebar",
        //   label: "Technical Docs",
        // },
        {
          type: "custom-latestRelease",
          position: "right",
        },
        {
          href: "https://github.com/aifoon",
          label: "GitHub",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Architecture",
              to: "/docs/for-developers/architecture",
            },
            {
              label: "zwerm3-jack",
              to: "/docs/for-developers/zwerm3-jack/introduction",
            },
            {
              label: "zwerm3-api",
              to: "/docs/for-developers/zwerm3-api/introduction",
            },
            {
              label: "kweenb",
              to: "/docs/for-developers/kweenb/introduction",
            },
            {
              label: "pd-bee",
              to: "/docs/for-developers/pd-bee/introduction",
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
