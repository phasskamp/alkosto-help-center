import React, { useState } from 'react';

/**
 * TrackingWidget Component
 * 
 * A mini order tracking form that can be embedded directly in help center articles.
 * Provides quick access to order tracking without leaving the page.
 * 
 * Usage in MDX:
 * import TrackingWidget from '@site/src/components/TrackingWidget';
 * <TrackingWidget />
 */

const TrackingWidget = ({ 
  variant = 'default', // 'default', 'compact', 'inline'
  trackingUrl = 'https://www.alkosto.com/sigue-tu-pedido'
}) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      // Open tracking page with order number
      window.open(`${trackingUrl}?order=${encodeURIComponent(orderNumber)}`, '_blank');
    } else {
      // Just open tracking page
      window.open(trackingUrl, '_blank');
    }
  };

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: variant === 'compact' ? 'transparent' : '#f0f7ff',
      borderRadius: '16px',
      padding: variant === 'compact' ? '0' : '24px',
      border: variant === 'compact' ? 'none' : '1px solid #d0e3ff',
      marginTop: variant === 'inline' ? '0' : '24px',
      marginBottom: variant === 'inline' ? '0' : '24px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      backgroundColor: '#0033A0',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
    },
    titleGroup: {
      flex: 1,
    },
    title: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#0033A0',
      margin: 0,
      marginBottom: '4px',
    },
    subtitle: {
      fontSize: '13px',
      color: '#666',
      margin: 0,
    },
    form: {
      display: 'flex',
      gap: '12px',
      flexWrap: variant === 'inline' ? 'nowrap' : 'wrap',
    },
    inputWrapper: {
      flex: 1,
      minWidth: '200px',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      paddingLeft: '44px',
      fontSize: '14px',
      border: inputFocused ? '2px solid #0033A0' : '2px solid #e0e0e0',
      borderRadius: '10px',
      outline: 'none',
      transition: 'all 0.2s ease',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    },
    inputIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '18px',
      color: inputFocused ? '#0033A0' : '#999',
      transition: 'color 0.2s ease',
    },
    button: {
      padding: '14px 24px',
      backgroundColor: '#0033A0',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      whiteSpace: 'nowrap',
    },
    buttonHover: {
      backgroundColor: '#002580',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0, 51, 160, 0.3)',
    },
    helpText: {
      fontSize: '12px',
      color: '#666',
      marginTop: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    link: {
      color: '#0033A0',
      textDecoration: 'none',
      fontWeight: '500',
    },
    // Compact variant styles
    compactForm: {
      display: 'flex',
      gap: '8px',
    },
    compactInput: {
      flex: 1,
      padding: '10px 12px',
      fontSize: '13px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      outline: 'none',
    },
    compactButton: {
      padding: '10px 16px',
      backgroundColor: '#0033A0',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: '500',
      cursor: 'pointer',
    },
  };

  const [buttonHovered, setButtonHovered] = useState(false);

  if (variant === 'compact') {
    return (
      <form style={styles.compactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Número de pedido"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          style={styles.compactInput}
        />
        <button type="submit" style={styles.compactButton}>
          Rastrear
        </button>
      </form>
    );
  }

  return (
    <div style={styles.container}>
      {variant !== 'inline' && (
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            🔍
          </div>
          <div style={styles.titleGroup}>
            <h4 style={styles.title}>Rastrear mi Pedido</h4>
            <p style={styles.subtitle}>Ingresa tu número de pedido o factura</p>
          </div>
        </div>
      )}

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputWrapper}>
          <span style={styles.inputIcon}>📦</span>
          <input
            type="text"
            placeholder="Ej: 123456789 o F-001234567"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            style={styles.input}
          />
        </div>
        <button 
          type="submit" 
          style={{
            ...styles.button,
            ...(buttonHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          <span>Consultar Estado</span>
          <span>→</span>
        </button>
      </form>

      {variant !== 'inline' && (
        <p style={styles.helpText}>
          <span>💡</span>
          <span>
            Encuentra tu número de pedido en el{' '}
            <a href="#" style={styles.link}>correo de confirmación</a>
            {' '}que te enviamos al comprar.
          </span>
        </p>
      )}
    </div>
  );
};

export default TrackingWidget;
