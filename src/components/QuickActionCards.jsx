import React from 'react';

/**
 * QuickActionCards Component
 * 
 * Prominent action cards for the "Pedidos y Envíos" section landing page.
 * Provides quick access to the most common user needs.
 * 
 * Usage in MDX:
 * import QuickActionCards from '@site/src/components/QuickActionCards';
 * <QuickActionCards />
 */

const actions = [
  {
    id: 'track',
    icon: '🔍',
    title: 'Rastrear mi Pedido',
    description: 'Consulta el estado actual de tu envío en tiempo real',
    link: 'https://www.alkosto.com/sigue-tu-pedido',
    external: true,
    color: '#0033A0',
    bgColor: '#f0f7ff',
  },
  {
    id: 'coverage',
    icon: '📍',
    title: 'Ver Cobertura de Envío',
    description: 'Consulta si tu municipio tiene envío gratis',
    link: 'https://www.alkosto.com/metodos-envio/envio-gratis',
    external: true,
    color: '#059669',
    bgColor: '#ecfdf5',
  },
  {
    id: 'support',
    icon: '💬',
    title: 'Contactar Soporte',
    description: 'Habla con nuestro equipo de servicio al cliente',
    link: '/docs/contacto',
    external: false,
    color: '#F7931E',
    bgColor: '#fff7ed',
  },
  {
    id: 'stores',
    icon: '🏪',
    title: 'Encontrar Tienda',
    description: 'Ubica la tienda Alkosto más cercana',
    link: 'https://www.alkosto.com/tiendas',
    external: true,
    color: '#7c3aed',
    bgColor: '#f5f3ff',
  },
];

const QuickActionCards = () => {
  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '24px 0',
    },
    header: {
      textAlign: 'center',
      marginBottom: '24px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#666',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '16px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px 20px',
      borderRadius: '16px',
      border: '2px solid transparent',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    iconContainer: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      marginBottom: '16px',
      transition: 'transform 0.2s ease',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
      transition: 'color 0.2s ease',
    },
    cardDescription: {
      fontSize: '13px',
      color: '#666',
      lineHeight: '1.4',
      marginBottom: '12px',
    },
    arrow: {
      fontSize: '18px',
      transition: 'transform 0.2s ease',
    },
    externalBadge: {
      fontSize: '10px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: '#f0f0f0',
      color: '#666',
      marginTop: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>¿Qué necesitas hacer?</h3>
        <p style={styles.subtitle}>Accesos rápidos a las acciones más comunes</p>
      </div>

      <div style={styles.grid}>
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.link}
            target={action.external ? '_blank' : '_self'}
            rel={action.external ? 'noopener noreferrer' : undefined}
            style={{
              ...styles.card,
              backgroundColor: action.bgColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = action.color;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 24px ${action.color}20`;
              const icon = e.currentTarget.querySelector('.action-icon');
              if (icon) icon.style.transform = 'scale(1.1)';
              const arrow = e.currentTarget.querySelector('.action-arrow');
              if (arrow) arrow.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              const icon = e.currentTarget.querySelector('.action-icon');
              if (icon) icon.style.transform = 'scale(1)';
              const arrow = e.currentTarget.querySelector('.action-arrow');
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}
          >
            <div 
              className="action-icon"
              style={{
                ...styles.iconContainer,
                backgroundColor: `${action.color}15`,
              }}
            >
              {action.icon}
            </div>
            <div style={{ ...styles.cardTitle, color: action.color }}>
              {action.title}
            </div>
            <div style={styles.cardDescription}>
              {action.description}
            </div>
            <span className="action-arrow" style={{ ...styles.arrow, color: action.color }}>
              →
            </span>
            {action.external && (
              <span style={styles.externalBadge}>Abre en nueva pestaña</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActionCards;
