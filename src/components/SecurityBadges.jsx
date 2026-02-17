import React from 'react';

/**
 * SecurityBadges Component
 * 
 * Displays trust indicators and security certifications for payment pages.
 * 
 * Usage in MDX:
 * import SecurityBadges from '@site/src/components/SecurityBadges';
 * <SecurityBadges />
 * <SecurityBadges variant="compact" />
 * <SecurityBadges variant="inline" />
 */

const badges = [
  {
    id: 'ssl',
    icon: '🔐',
    title: 'Conexión Segura',
    description: 'Certificado SSL de 256 bits',
    color: '#059669',
  },
  {
    id: 'pci',
    icon: '🛡️',
    title: 'PCI DSS',
    description: 'Estándar de seguridad de datos',
    color: '#0033A0',
  },
  {
    id: 'antifraud',
    icon: '🔍',
    title: 'Antifraude',
    description: 'Validación en tiempo real',
    color: '#7c3aed',
  },
  {
    id: 'privacy',
    icon: '👤',
    title: 'Datos Protegidos',
    description: 'No almacenamos tu tarjeta',
    color: '#dc2626',
  },
];

const SecurityBadges = ({ variant = 'full' }) => {
  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    fullContainer: {
      backgroundColor: '#f0fdf4',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #bbf7d0',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '20px',
    },
    headerIcon: {
      fontSize: '24px',
    },
    headerTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#166534',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '16px',
    },
    badge: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '16px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
    },
    badgeIcon: {
      fontSize: '32px',
      marginBottom: '8px',
    },
    badgeTitle: {
      fontSize: '13px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    badgeDescription: {
      fontSize: '11px',
      color: '#6b7280',
    },
    compactContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '12px 16px',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    },
    compactIcon: {
      fontSize: '20px',
      color: '#059669',
    },
    compactText: {
      fontSize: '13px',
      color: '#374151',
    },
    inlineContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      flexWrap: 'wrap',
      padding: '16px',
    },
    inlineBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      color: '#6b7280',
    },
  };

  if (variant === 'inline') {
    return (
      <div style={{ ...styles.container, ...styles.inlineContainer }}>
        {badges.map(badge => (
          <div key={badge.id} style={styles.inlineBadge}>
            <span>{badge.icon}</span>
            <span>{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div style={{ ...styles.container, ...styles.compactContainer }}>
        <span style={styles.compactIcon}>🔒</span>
        <span style={styles.compactText}>
          <strong>Compra 100% Segura</strong> - SSL · PCI DSS · Antifraude
        </span>
      </div>
    );
  }

  return (
    <div style={{ ...styles.container, ...styles.fullContainer }}>
      <div style={styles.header}>
        <span style={styles.headerIcon}>✅</span>
        <span style={styles.headerTitle}>Tu compra está protegida</span>
      </div>

      <div style={styles.grid}>
        {badges.map(badge => (
          <div key={badge.id} style={styles.badge}>
            <div style={styles.badgeIcon}>{badge.icon}</div>
            <div style={{ ...styles.badgeTitle, color: badge.color }}>
              {badge.title}
            </div>
            <div style={styles.badgeDescription}>{badge.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityBadges;
