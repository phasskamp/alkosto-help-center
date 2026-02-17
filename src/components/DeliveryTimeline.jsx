import React, { useState } from 'react';

/**
 * DeliveryTimeline Component
 * 
 * A visual timeline showing the order delivery journey.
 * Can be embedded in Docusaurus MDX files.
 * 
 * Usage in MDX:
 * import DeliveryTimeline from '@site/src/components/DeliveryTimeline';
 * <DeliveryTimeline currentStep={3} />
 */

const steps = [
  {
    id: 1,
    icon: '📝',
    title: 'Pedido Recibido',
    description: 'Tu pedido fue registrado exitosamente',
    detail: 'Estamos validando el pago y confirmando disponibilidad del producto.',
    time: '1-4 horas'
  },
  {
    id: 2,
    icon: '✅',
    title: 'Pago Confirmado',
    description: 'El pago ha sido verificado',
    detail: 'Tu pedido ingresa a la cola de preparación en nuestro centro de distribución.',
    time: '2-6 horas'
  },
  {
    id: 3,
    icon: '📦',
    title: 'En Preparación',
    description: 'Estamos alistando tu pedido',
    detail: 'Ubicamos el producto, realizamos control de calidad y empacamos de forma segura.',
    time: '1-2 días'
  },
  {
    id: 4,
    icon: '🚚',
    title: 'Despachado',
    description: 'Tu pedido está en camino',
    detail: 'El paquete fue entregado a la transportadora y está en ruta hacia tu ciudad.',
    time: 'Según destino'
  },
  {
    id: 5,
    icon: '🏙️',
    title: 'En Tu Ciudad',
    description: 'Llegó a tu ciudad',
    detail: 'Tu pedido está en el centro de distribución local, listo para el reparto.',
    time: '12-24 horas'
  },
  {
    id: 6,
    icon: '🛵',
    title: 'En Reparto',
    description: '¡Hoy llega tu pedido!',
    detail: 'El transportador está en ruta con tu paquete. Asegúrate de estar disponible.',
    time: 'Hoy'
  },
  {
    id: 7,
    icon: '🎉',
    title: 'Entregado',
    description: '¡Pedido entregado!',
    detail: 'Tu pedido fue entregado exitosamente. ¡Gracias por comprar en Alkosto!',
    time: 'Completado'
  }
];

const DeliveryTimeline = ({ currentStep = 0, showDetails = true }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#0033A0',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#666',
    },
    timeline: {
      position: 'relative',
      paddingLeft: '40px',
    },
    line: {
      position: 'absolute',
      left: '19px',
      top: '30px',
      bottom: '30px',
      width: '2px',
      background: 'linear-gradient(to bottom, #0033A0 0%, #e0e0e0 100%)',
    },
    step: {
      position: 'relative',
      marginBottom: '24px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    stepInner: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      padding: '16px',
      borderRadius: '12px',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      transition: 'all 0.2s ease',
    },
    stepInnerHover: {
      boxShadow: '0 4px 12px rgba(0, 51, 160, 0.1)',
      borderColor: '#0033A0',
    },
    stepCompleted: {
      backgroundColor: '#f0f7ff',
      borderColor: '#0033A0',
    },
    stepCurrent: {
      backgroundColor: '#fff7ed',
      borderColor: '#F7931E',
      boxShadow: '0 4px 16px rgba(247, 147, 30, 0.2)',
    },
    stepPending: {
      backgroundColor: '#fafafa',
      borderColor: '#e0e0e0',
      opacity: 0.7,
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      flexShrink: 0,
    },
    iconCompleted: {
      backgroundColor: '#0033A0',
    },
    iconCurrent: {
      backgroundColor: '#F7931E',
      animation: 'pulse 2s infinite',
    },
    iconPending: {
      backgroundColor: '#e0e0e0',
    },
    content: {
      flex: 1,
    },
    stepTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '4px',
    },
    stepDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '8px',
    },
    stepDetail: {
      fontSize: '13px',
      color: '#888',
      lineHeight: '1.5',
      marginTop: '8px',
      paddingTop: '8px',
      borderTop: '1px dashed #e0e0e0',
    },
    stepTime: {
      fontSize: '12px',
      color: '#0033A0',
      fontWeight: '500',
      display: 'inline-block',
      padding: '4px 8px',
      backgroundColor: '#f0f7ff',
      borderRadius: '4px',
    },
    stepTimeCurrent: {
      backgroundColor: '#fff7ed',
      color: '#F7931E',
    },
    dot: {
      position: 'absolute',
      left: '-29px',
      top: '24px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: '3px solid #fff',
      boxShadow: '0 0 0 2px #0033A0',
    },
    dotCompleted: {
      backgroundColor: '#0033A0',
    },
    dotCurrent: {
      backgroundColor: '#F7931E',
      boxShadow: '0 0 0 2px #F7931E',
    },
    dotPending: {
      backgroundColor: '#e0e0e0',
      boxShadow: '0 0 0 2px #e0e0e0',
    },
    checkmark: {
      color: '#fff',
      fontSize: '14px',
    },
    legend: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '24px',
      flexWrap: 'wrap',
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '12px',
      color: '#666',
    },
    legendDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
    },
  };

  // Add keyframes for pulse animation
  const pulseKeyframes = `
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(247, 147, 30, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(247, 147, 30, 0); }
      100% { box-shadow: 0 0 0 0 rgba(247, 147, 30, 0); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{pulseKeyframes}</style>
      
      <div style={styles.header}>
        <h2 style={styles.title}>Estado de tu Pedido</h2>
        <p style={styles.subtitle}>
          {currentStep === 0 
            ? 'Ingresa tu número de pedido para ver el estado'
            : currentStep === 7 
              ? '¡Tu pedido ha sido entregado!'
              : `Paso ${currentStep} de ${steps.length}`
          }
        </p>
      </div>

      <div style={styles.timeline}>
        <div style={styles.line}></div>
        
        {steps.map((step) => {
          const status = getStepStatus(step.id);
          const isExpanded = expandedStep === step.id;
          
          return (
            <div 
              key={step.id} 
              style={styles.step}
              onClick={() => setExpandedStep(isExpanded ? null : step.id)}
            >
              {/* Dot on timeline */}
              <div style={{
                ...styles.dot,
                ...(status === 'completed' ? styles.dotCompleted : {}),
                ...(status === 'current' ? styles.dotCurrent : {}),
                ...(status === 'pending' ? styles.dotPending : {}),
              }}>
                {status === 'completed' && <span style={styles.checkmark}>✓</span>}
              </div>
              
              {/* Step card */}
              <div style={{
                ...styles.stepInner,
                ...(status === 'completed' ? styles.stepCompleted : {}),
                ...(status === 'current' ? styles.stepCurrent : {}),
                ...(status === 'pending' ? styles.stepPending : {}),
              }}>
                {/* Icon */}
                <div style={{
                  ...styles.iconContainer,
                  ...(status === 'completed' ? styles.iconCompleted : {}),
                  ...(status === 'current' ? styles.iconCurrent : {}),
                  ...(status === 'pending' ? styles.iconPending : {}),
                }}>
                  {status === 'completed' ? '✓' : step.icon}
                </div>
                
                {/* Content */}
                <div style={styles.content}>
                  <div style={styles.stepTitle}>{step.title}</div>
                  <div style={styles.stepDescription}>{step.description}</div>
                  
                  <span style={{
                    ...styles.stepTime,
                    ...(status === 'current' ? styles.stepTimeCurrent : {}),
                  }}>
                    ⏱️ {step.time}
                  </span>
                  
                  {showDetails && (isExpanded || status === 'current') && (
                    <div style={styles.stepDetail}>
                      {step.detail}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <div style={{...styles.legendDot, backgroundColor: '#0033A0'}}></div>
          Completado
        </div>
        <div style={styles.legendItem}>
          <div style={{...styles.legendDot, backgroundColor: '#F7931E'}}></div>
          En proceso
        </div>
        <div style={styles.legendItem}>
          <div style={{...styles.legendDot, backgroundColor: '#e0e0e0'}}></div>
          Pendiente
        </div>
      </div>
    </div>
  );
};

export default DeliveryTimeline;
