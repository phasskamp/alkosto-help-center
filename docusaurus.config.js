// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

// Detect if we're in production (GitHub Pages) or development
const isProduction = process.env.NODE_ENV === 'production';

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
  // Use /alkosto-help-center/ for production, / for local dev
  baseUrl: isProduction ? '/alkosto-help-center/' : '/',

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
    }),
};

export default config;
