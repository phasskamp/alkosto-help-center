import React, { useState } from 'react';

/**
 * PaymentTroubleshooter Component
 * 
 * An interactive diagnostic tool that helps users solve payment problems.
 * 
 * Usage in MDX:
 * import PaymentTroubleshooter from '@site/src/components/PaymentTroubleshooter';
 * <PaymentTroubleshooter />
 */

const problems = [
  {
    id: 'rejected',
    question: 'Mi pago fue rechazado',
    icon: '❌',
    solutions: [
      { text: 'Verifica que los datos de la tarjeta estén correctos (número, fecha, CVV)', type: 'check' },
      { text: 'Confirma que tienes saldo o cupo disponible', type: 'check' },
      { text: 'Verifica que tu tarjeta esté habilitada para compras en línea', type: 'check' },
      { text: 'Contacta a tu banco - puede haber un bloqueo de seguridad', type: 'action' },
      { text: 'Intenta con otro método de pago', type: 'tip' },
    ],
    link: '/docs/pagos/inconvenientes-pago',
  },
  {
    id: 'double',
    question: 'Me cobraron dos veces',
    icon: '💳💳',
    solutions: [
      { text: 'Verifica en "Mis Pedidos" cuántos pedidos tienes', type: 'check' },
      { text: 'Revisa si uno de los cobros dice "Pendiente" - puede ser solo retención', type: 'check' },
      { text: 'Espera 3-5 días hábiles - las retenciones se liberan automáticamente', type: 'tip' },
      { text: 'Si después de 5 días no se libera, contáctanos con tu extracto', type: 'action' },
    ],
    link: '/docs/pagos/cobro-duplicado',
  },
  {
    id: 'no_confirm',
    question: 'Pagué pero no recibí confirmación',
    icon: '📧',
    solutions: [
      { text: 'Revisa tu carpeta de spam o correo no deseado', type: 'check' },
      { text: 'Ingresa a "Mis Pedidos" en alkosto.com para verificar', type: 'check' },
      { text: 'Revisa tu extracto bancario para confirmar el cobro', type: 'check' },
      { text: 'Si el cobro existe pero no hay pedido, contáctanos', type: 'action' },
    ],
    link: '/docs/pagos/inconvenientes-pago',
  },
  {
    id: 'pse_fail',
    question: 'El pago PSE falló pero me descontaron',
    icon: '🏦',
    solutions: [
      { text: 'Espera 30 minutos - a veces el sistema tarda en sincronizar', type: 'tip' },
      { text: 'Revisa "Mis Pedidos" - el pedido puede haberse creado', type: 'check' },
      { text: 'Si después de 24-48 horas no hay reversión, contacta a tu banco', type: 'action' },
      { text: 'Si el banco confirma el débito, contáctanos con el comprobante', type: 'action' },
    ],
    link: '/docs/pagos/pago-pse-paso-a-paso#problemas-comunes',
  },
  {
    id: 'page_error',
    question: 'La página de pago no carga',
    icon: '🌐',
    solutions: [
      { text: 'Desactiva el bloqueador de pop-ups en tu navegador', type: 'check' },
      { text: 'Intenta en otro navegador (Chrome, Firefox, Edge)', type: 'tip' },
      { text: 'Verifica tu conexión a internet', type: 'check' },
      { text: 'Intenta desde otro dispositivo', type: 'tip' },
      { text: 'Limpia el caché y cookies del navegador', type: 'check' },
    ],
    link: '/docs/pagos/inconvenientes-pago',
  },
  {
    id: 'cash_issue',
    question: 'Pagué en efectivo pero no se confirma',
    icon: '💵',
    solutions: [
      { text: 'Espera 4-6 horas - el sistema tarda en sincronizar', type: 'tip' },
      { text: 'Verifica que la referencia de pago era correcta', type: 'check' },
      { text: 'Confirma que pagaste el monto exacto', type: 'check' },
      { text: 'Guarda tu recibo de pago como comprobante', type: 'check' },
      { text: 'Si después de 24 horas no hay confirmación, contáctanos con el recibo', type: 'action' },
    ],
    link: '/docs/pagos/pago-en-efectivo',
  },
];

const PaymentTroubleshooter = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
    },
    problemList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    problemButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 16px',
      backgroundColor: '#f9fafb',
      border: '2px solid transparent',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textAlign: 'left',
      width: '100%',
    },
    problemIcon: {
      fontSize: '20px',
      width: '40px',
      textAlign: 'center',
    },
    problemText: {
      flex: 1,
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
    },
    arrow: {
      fontSize: '16px',
      color: '#9ca3af',
      transition: 'transform 0.2s',
    },
    solutionPanel: {
      marginTop: '16px',
      padding: '20px',
      backgroundColor: '#fef3c7',
      borderRadius: '12px',
      border: '2px solid #f59e0b',
    },
    solutionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
    solutionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#92400e',
    },
    solutionList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    solutionItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '10px 0',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      fontSize: '14px',
      color: '#78350f',
    },
    solutionIcon: {
      flexShrink: 0,
      marginTop: '2px',
    },
    learnMore: {
      display: 'inline-block',
      marginTop: '16px',
      padding: '10px 20px',
      backgroundColor: '#f59e0b',
      color: '#fff',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '600',
    },
    backButton: {
      background: 'none',
      border: 'none',
      color: '#92400e',
      fontSize: '13px',
      cursor: 'pointer',
      marginTop: '12px',
      textDecoration: 'underline',
    },
    contactBox: {
      marginTop: '20px',
      padding: '16px',
      backgroundColor: '#fef2f2',
      borderRadius: '10px',
      textAlign: 'center',
    },
    contactText: {
      fontSize: '13px',
      color: '#991b1b',
      marginBottom: '8px',
    },
    contactNumber: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#dc2626',
    },
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'check': return '☑️';
      case 'action': return '📞';
      case 'tip': return '💡';
      default: return '•';
    }
  };

  const selected = selectedProblem ? problems.find(p => p.id === selectedProblem) : null;

  return (
    <div style={styles.container}>
      {!selected ? (
        <>
          <div style={styles.header}>
            <div style={styles.title}>🔧 ¿Qué problema tienes?</div>
            <div style={styles.subtitle}>Selecciona tu situación para ver soluciones</div>
          </div>

          <div style={styles.problemList}>
            {problems.map(problem => (
              <button
                key={problem.id}
                style={styles.problemButton}
                onClick={() => setSelectedProblem(problem.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f7ff';
                  e.currentTarget.style.borderColor = '#0033A0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <span style={styles.problemIcon}>{problem.icon}</span>
                <span style={styles.problemText}>{problem.question}</span>
                <span style={styles.arrow}>→</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={styles.solutionPanel}>
          <div style={styles.solutionHeader}>
            <span style={{ fontSize: '24px' }}>{selected.icon}</span>
            <div style={styles.solutionTitle}>{selected.question}</div>
          </div>

          <ul style={styles.solutionList}>
            {selected.solutions.map((solution, i) => (
              <li key={i} style={styles.solutionItem}>
                <span style={styles.solutionIcon}>{getIconForType(solution.type)}</span>
                <span>{solution.text}</span>
              </li>
            ))}
          </ul>

          <a href={selected.link} style={styles.learnMore}>
            Ver guía completa →
          </a>

          <div>
            <button
              style={styles.backButton}
              onClick={() => setSelectedProblem(null)}
            >
              ← Elegir otro problema
            </button>
          </div>

          <div style={styles.contactBox}>
            <div style={styles.contactText}>¿Sigues con problemas? Contáctanos:</div>
            <div style={styles.contactNumber}>📞 (601) 407 3033</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTroubleshooter;
