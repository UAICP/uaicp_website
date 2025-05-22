import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UAICP - Universal AI Communication Protocol',
  tagline: 'Open specification for universal AI system communication and interoperability',
  favicon: 'img/favicon.ico',

  url: 'https://uaicp.org',
  baseUrl: '/',

  organizationName: 'UAICP',
  projectName: 'uaicp_website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/UAICP/uaicp_specification/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'v1.0.0 (Draft)',
              badge: true,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/UAICP/uaicp_website/edit/main/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/uaicp-social-card.svg',
    navbar: {
      title: 'UAICP',
      logo: {
        alt: 'UAICP Logo',
        src: 'img/uaicp_icon_32.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'specSidebar',
          position: 'left',
          label: 'Specification',
        },
        {
          type: 'docSidebar',
          sidebarId: 'integrationSidebar',
          position: 'left',
          label: 'Integration',
        },
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Examples',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/UAICP/uaicp_specification',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Specification',
              to: '/docs/specification',
            },
            {
              label: 'Integration Guides',
              to: '/docs/integration-guides',
            },
            {
              label: 'Examples',
              to: '/docs/examples',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/UAICP',
            },
            {
              label: 'Community Forum',
              href: 'https://community.uaicp.org',
            },
            {
              label: 'Slack',
              href: 'https://uaicp.slack.com',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Contributing',
              to: '/docs/governance/contributing',
            },
            {
              label: 'Governance',
              to: '/docs/governance/overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UAICP Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'typescript', 'python', 'bash'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY', 
      indexName: 'uaicp',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
