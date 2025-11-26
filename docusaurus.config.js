// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centro de Ayuda',
  tagline: 'Encuentra respuestas a tus preguntas sobre Alkosto',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: 'https://phasskamp.github.io',
  baseUrl: '/alkosto-help-center/',

  // GitHub config
  organizationName: 'phasskamp',
  projectName: 'alkosto-help-center',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/alkosto-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Alkosto',
          src: 'img/alkosto-logo-white.svg',
          srcDark: 'img/alkosto-logo-white.svg',
        },
        items: [
          {
            to: '/',
            label: 'Inicio',
            position: 'right',
          },
          {
            href: 'https://www.alkosto.com',
            label: 'Ir a Alkosto.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categorías',
            items: [
              { label: 'Mi cuenta', to: '/docs/mi-cuenta/' },
              { label: 'Pedidos y envíos', to: '/docs/pedidos-y-envíos/' },
              { label: 'Pagos', to: '/docs/pagos/' },
              { label: 'Cambios y garantías', to: '/docs/cambios-y-garantías/' },
            ],
          },
          {
            title: 'Más ayuda',
            items: [
              { label: 'Productos', to: '/docs/productos/' },
              { label: 'Instalaciones', to: '/docs/instalaciones/' },
              { label: 'Políticas', to: '/docs/políticas-y-privacidad/' },
              { label: 'Contacto', to: '/docs/contacto/' },
            ],
          },
          {
            title: 'Alkosto',
            items: [
              { label: 'Alkosto.com', href: 'https://www.alkosto.com' },
              { label: 'Facebook', href: 'https://www.facebook.com/alkosto' },
              { label: 'Instagram', href: 'https://www.instagram.com/alkosto' },
              { label: 'Twitter', href: 'https://twitter.com/alkosto' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Alkosto. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',

        // The index name to query
        indexName: 'YOUR_INDEX_NAME',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
    }),
};

export default config;
