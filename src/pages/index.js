import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Featured Categories (top 3)
const FeaturedCategories = [
  {
    title: 'Mi cuenta',
    link: '/docs/mi-cuenta/',
    description: 'Gestiona tu perfil, acceso y contraseña de forma rápida y segura.',
    image: '/img/categories/mi-cuenta.svg',
  },
  {
    title: 'Pedidos y envíos',
    link: '/docs/pedidos-y-envíos/',
    description: 'Todo sobre compras, seguimiento, opciones de entrega y recogida en tienda.',
    image: '/img/categories/pedidos-envios.svg',
  },
  {
    title: 'Pagos',
    link: '/docs/pagos/',
    description: 'Métodos aceptados, seguridad, solución de problemas y facturación electrónica.',
    image: '/img/categories/pagos.svg',
  },
];

// Other Categories
const OtherCategories = [
  {
    title: 'Cambios y garantías',
    link: '/docs/cambios-y-garantías/',
    description: 'Políticas de devolución, procesos y centros de servicio para tu tranquilidad.',
    image: '/img/categories/cambios-garantias.svg',
  },
  {
    title: 'Productos',
    link: '/docs/productos/',
    description: 'Consulta especificaciones, disponibilidad y opiniones de otros compradores.',
    image: '/img/categories/productos.svg',
  },
  {
    title: 'Instalaciones',
    link: '/docs/instalaciones/',
    description: 'Servicios gratuitos y pagos para instalar tus productos adquiridos.',
    image: '/img/categories/instalaciones.svg',
  },
  {
    title: 'Ofertas y Promociones',
    link: '/docs/ofertas-y-promociones/',
    description: 'Descubre Gana 50, hiperofertas y productos exclusivos.',
    image: '/img/categories/ofertas.svg',
  },
  {
    title: 'Contacto',
    link: '/docs/contacto/',
    description: 'Chats, formularios, horarios de atención y ubicación de tiendas.',
    image: '/img/categories/contacto.svg',
  },
  {
    title: 'Políticas y Privacidad',
    link: '/docs/políticas-y-privacidad/',
    description: 'Términos, privacidad, tratamiento de datos y compromiso ético.',
    image: '/img/categories/politicas.svg',
  },
  {
    title: 'Pines',
    link: '/docs/pines/',
    description: 'Descubre como utilizar los pines comprados en Alkosto.',
    image: '/img/categories/pines.svg',
  },
];

function CategoryCard({ title, link, description, image, featured }) {
  return (
    <Link to={link} className={`${styles.categoryCard} ${featured ? styles.featuredCard : ''}`}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
}

function HeroHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* Background pattern */}
        <div className={styles.heroPattern}></div>
      </div>
      <div className={styles.heroContent}>
        <img src="/img/alkosto-logo-white.svg" alt="Alkosto" className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>Centro de ayuda</h1>
        <p className={styles.heroSubtitle}>
          Busca respuestas o navega por las categorías para resolver tus dudas.
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Ingresa una palabra clave o una pregunta"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>¿Tienes dudas? Te ayudamos</h2>
        <p className={styles.contactDescription}>
          Si no encontraste lo que buscabas, nuestro equipo de soporte está listo para ayudarte.
        </p>
        <div className={styles.contactButtons}>
          <Link to="/docs/contacto/" className={styles.contactButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Chat en línea
          </Link>
          <Link to="/docs/contacto/" className={`${styles.contactButton} ${styles.contactButtonSecondary}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Llámanos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Centro de Ayuda"
      description="Centro de ayuda y soporte de Alkosto. Encuentra respuestas a tus preguntas.">
      <HeroHeader />
      <main className={styles.main}>
        {/* Featured Categories */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Categorías destacadas</h2>
            <div className={styles.featuredGrid}>
              {FeaturedCategories.map((category, idx) => (
                <CategoryCard key={idx} {...category} featured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Otras Categorías</h2>
            <div className={styles.categoriesGrid}>
              {OtherCategories.map((category, idx) => (
                <CategoryCard key={idx} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </Layout>
  );
}
