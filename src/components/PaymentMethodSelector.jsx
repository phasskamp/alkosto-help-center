import React, { useState } from 'react';

/**
 * PaymentMethodSelector Component
 * 
 * An interactive component that helps users understand and choose
 * the best payment method for their needs.
 * 
 * Usage in MDX:
 * import PaymentMethodSelector from '@site/src/components/PaymentMethodSelector';
 * <PaymentMethodSelector />
 */

const paymentMethods = [
  {
    id: 'credit',
    name: 'Tarjeta de Crédito',
    icon: '💳',
    color: '#0033A0',
    bgColor: '#f0f7ff',
    description: 'Visa, Mastercard, American Express, Diners',
    features: ['Cuotas disponibles', 'Confirmación inmediata', 'Cuotas sin interés en promociones'],
    idealFor: 'Compras grandes en cuotas',
    link: '/docs/pagos/opciones-de-pago#tarjetas-de-credito',
  },
  {
    id: 'debit',
    name: 'Tarjeta Débito',
    icon: '💳',
    color: '#059669',
    bgColor: '#ecfdf5',
    description: 'Débito directo de tu cuenta bancaria',
    features: ['Pago inmediato', 'Sin cuotas', 'Todas las tarjetas Visa/MC débito'],
    idealFor: 'Pago único con tarjeta',
    link: '/docs/pagos/opciones-de-pago#tarjetas-debito',
  },
  {
    id: 'pse',
    name: 'PSE',
    icon: '🏦',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    description: 'Transferencia desde tu banco',
    features: ['No necesitas tarjeta', 'Más de 20 bancos', 'Confirmación inmediata'],
    idealFor: 'Pago sin tarjeta desde tu banco',
    link: '/docs/pagos/pago-pse-paso-a-paso',
  },
  {
    id: 'cash',
    name: 'Efectivo',
    icon: '💵',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    description: 'Efecty, Baloto, SuRed',
    features: ['Sin cuenta bancaria', 'Paga en puntos físicos', '48 horas para pagar'],
    idealFor: 'Quienes prefieren efectivo',
    link: '/docs/pagos/pago-en-efectivo',
  },
  {
    id: 'alkosto',
    name: 'Crédito Alkosto',
    icon: '🏷️',
    color: '#dc2626',
    bgColor: '#fef2f2',
    description: 'Nuestra tarjeta de crédito exclusiva',
    features: ['Cuotas fijas', 'Promociones exclusivas', 'Fácil solicitud'],
    idealFor: 'Clientes frecuentes de Alkosto',
    link: '/docs/pagos/credito-alkosto-financiacion',
  },
  {
    id: 'addi',
    name: 'ADDI',
    icon: '📱',
    color: '#ec4899',
    bgColor: '#fdf2f8',
    description: 'Compra ahora, paga después',
    features: ['Sin tarjeta de crédito', '3-4 cuotas', 'Aprobación inmediata'],
    idealFor: 'Cuotas sin tarjeta de crédito',
    link: '/docs/pagos/opciones-de-pago#addi',
  },
];

const PaymentMethodSelector = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '12px',
      marginBottom: '24px',
    },
    card: {
      padding: '16px',
      borderRadius: '12px',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textAlign: 'center',
    },
    cardIcon: {
      fontSize: '32px',
      marginBottom: '8px',
    },
    cardName: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    cardDescription: {
      fontSize: '11px',
      color: '#6b7280',
    },
    detailPanel: {
      borderRadius: '16px',
      padding: '24px',
      marginTop: '16px',
      border: '2px solid',
    },
    detailHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
    },
    detailIcon: {
      fontSize: '40px',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: '12px',
    },
    detailTitle: {
      fontSize: '20px',
      fontWeight: '700',
    },
    detailDescription: {
      fontSize: '14px',
      opacity: 0.8,
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 0',
      fontSize: '14px',
    },
    idealFor: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: '8px',
      fontSize: '14px',
      marginBottom: '16px',
    },
    learnMore: {
      display: 'inline-block',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
    hint: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '16px',
    },
  };

  const selected = selectedMethod ? paymentMethods.find(m => m.id === selectedMethod) : null;

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {paymentMethods.map(method => (
          <div
            key={method.id}
            style={{
              ...styles.card,
              backgroundColor: (selectedMethod === method.id || hoveredMethod === method.id) 
                ? method.bgColor 
                : '#f9fafb',
              borderColor: selectedMethod === method.id ? method.color : 'transparent',
              transform: hoveredMethod === method.id ? 'translateY(-2px)' : 'none',
              boxShadow: hoveredMethod === method.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
            }}
            onClick={() => setSelectedMethod(method.id)}
            onMouseEnter={() => setHoveredMethod(method.id)}
            onMouseLeave={() => setHoveredMethod(null)}
          >
            <div style={styles.cardIcon}>{method.icon}</div>
            <div style={{ ...styles.cardName, color: method.color }}>{method.name}</div>
            <div style={styles.cardDescription}>{method.description}</div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          style={{
            ...styles.detailPanel,
            backgroundColor: selected.bgColor,
            borderColor: selected.color,
          }}
        >
          <div style={styles.detailHeader}>
            <div style={styles.detailIcon}>{selected.icon}</div>
            <div>
              <div style={{ ...styles.detailTitle, color: selected.color }}>
                {selected.name}
              </div>
              <div style={{ ...styles.detailDescription, color: selected.color }}>
                {selected.description}
              </div>
            </div>
          </div>

          <ul style={styles.featuresList}>
            {selected.features.map((feature, i) => (
              <li key={i} style={styles.featureItem}>
                <span style={{ color: selected.color }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div style={styles.idealFor}>
            <span>💡</span>
            <strong>Ideal para:</strong> {selected.idealFor}
          </div>

          <a
            href={selected.link}
            style={{
              ...styles.learnMore,
              backgroundColor: selected.color,
              color: '#fff',
            }}
          >
            Ver más información →
          </a>
        </div>
      )}

      {!selected && (
        <p style={styles.hint}>
          👆 Selecciona un método de pago para ver más detalles
        </p>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
