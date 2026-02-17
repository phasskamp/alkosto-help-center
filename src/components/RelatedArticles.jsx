import React from 'react';

/**
 * RelatedArticles Component
 * 
 * Shows related articles at the end of help center content.
 * Improves navigation and helps users find relevant information.
 * 
 * Usage in MDX:
 * import RelatedArticles from '@site/src/components/RelatedArticles';
 * <RelatedArticles articles={[
 *   { title: "Article Title", link: "/docs/path", icon: "📦" },
 * ]} />
 */

const RelatedArticles = ({ articles = [], title = "Artículos relacionados" }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      marginTop: '48px',
      paddingTop: '32px',
      borderTop: '1px solid #e5e7eb',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '16px',
    },
    icon: {
      fontSize: '20px',
    },
    title: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      margin: 0,
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    article: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      textDecoration: 'none',
      color: '#1f2937',
      transition: 'all 0.15s ease',
      border: '1px solid transparent',
    },
    articleIcon: {
      fontSize: '20px',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '6px',
      flexShrink: 0,
    },
    articleTitle: {
      flex: 1,
      fontSize: '14px',
      fontWeight: '500',
    },
    arrow: {
      fontSize: '16px',
      color: '#9ca3af',
      transition: 'all 0.15s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.icon}>📚</span>
        <h4 style={styles.title}>{title}</h4>
      </div>
      
      <div style={styles.list}>
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            style={styles.article}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f7ff';
              e.currentTarget.style.borderColor = '#0033A0';
              const arrow = e.currentTarget.querySelector('.related-arrow');
              if (arrow) {
                arrow.style.color = '#0033A0';
                arrow.style.transform = 'translateX(4px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = 'transparent';
              const arrow = e.currentTarget.querySelector('.related-arrow');
              if (arrow) {
                arrow.style.color = '#9ca3af';
                arrow.style.transform = 'translateX(0)';
              }
            }}
          >
            <span style={styles.articleIcon}>
              {article.icon || '📄'}
            </span>
            <span style={styles.articleTitle}>
              {article.title}
            </span>
            <span className="related-arrow" style={styles.arrow}>
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

// Pre-configured related articles for common groupings
export const relatedArticlesConfig = {
  shipping: [
    { title: "¿Alkosto ofrece envío gratis?", link: "/docs/pedidos-envios/alkosto-ofrece-envio-gratis", icon: "🆓" },
    { title: "¿Puedo agendar la entrega?", link: "/docs/pedidos-envios/puedo-agendar-la-entrega", icon: "📅" },
    { title: "¿Cómo hacer seguimiento a mi pedido?", link: "/docs/pedidos-envios/como-hacer-seguimiento", icon: "🔍" },
  ],
  delivery: [
    { title: "¿Qué debo tener en cuenta al recibir?", link: "/docs/pedidos-envios/que-debo-tener-en-cuenta", icon: "✅" },
    { title: "¿Puedo autorizar a otra persona?", link: "/docs/pedidos-envios/autorizar-otra-persona", icon: "👥" },
    { title: "¿Qué pasa si no estoy en casa?", link: "/docs/pedidos-envios/no-estoy-en-casa", icon: "🏠" },
  ],
  problems: [
    { title: "¿Qué hago si mi pedido llega incompleto?", link: "/docs/pedidos-envios/pedido-incompleto", icon: "📦" },
    { title: "¿Cómo reportar un producto dañado?", link: "/docs/pedidos-envios/reportar-producto-danado", icon: "🔧" },
    { title: "Política de devoluciones y cambios", link: "/docs/pedidos-envios/devoluciones-cambios", icon: "↩️" },
  ],
  address: [
    { title: "¿Puedo cambiar la dirección de entrega?", link: "/docs/pedidos-envios/cambiar-direccion", icon: "📍" },
    { title: "Cómo agregar o editar una dirección", link: "/docs/pedidos-envios/agregar-editar-direccion", icon: "✏️" },
    { title: "Recoge en tienda", link: "/docs/pedidos-envios/recoge-en-tienda", icon: "🏪" },
  ],
  cancellation: [
    { title: "¿Cómo cancelo mi pedido?", link: "/docs/pedidos-envios/cancelar-pedido", icon: "❌" },
    { title: "Política de devoluciones y cambios", link: "/docs/pedidos-envios/devoluciones-cambios", icon: "↩️" },
    { title: "Estados del pedido", link: "/docs/pedidos-envios/estados-pedido", icon: "📊" },
  ],
};

export default RelatedArticles;
