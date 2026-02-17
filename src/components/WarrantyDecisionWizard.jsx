import React, { useState } from 'react';

/**
 * WarrantyDecisionWizard Component
 * 
 * An interactive wizard that helps users determine whether they need
 * a cambio (exchange), devolución (return), or garantía (warranty) process.
 * 
 * Usage in MDX:
 * import WarrantyDecisionWizard from '@site/src/components/WarrantyDecisionWizard';
 * <WarrantyDecisionWizard />
 */

const questions = [
  {
    id: 'timing',
    question: '¿Cuándo recibiste el producto?',
    options: [
      { id: 'recent', label: 'Hace menos de 30 días', icon: '📅' },
      { id: 'old', label: 'Hace más de 30 días', icon: '📆' },
      { id: 'damaged', label: 'Llegó dañado (hace menos de 48h)', icon: '📦' },
    ]
  },
  {
    id: 'problem',
    question: '¿Cuál es la situación?',
    options: [
      { id: 'dont_want', label: 'No lo quiero / cambié de opinión', icon: '🤔' },
      { id: 'different', label: 'Quiero otro producto diferente', icon: '🔄' },
      { id: 'defect', label: 'Tiene un defecto o no funciona', icon: '⚠️' },
      { id: 'wrong', label: 'Me llegó un producto incorrecto', icon: '❌' },
    ]
  },
  {
    id: 'condition',
    question: '¿En qué condiciones está el producto?',
    options: [
      { id: 'unused', label: 'Sin uso, empaque original completo', icon: '✨' },
      { id: 'opened', label: 'Abierto pero sin usar', icon: '📭' },
      { id: 'used', label: 'Ya lo usé', icon: '✅' },
      { id: 'damaged_by_me', label: 'Se dañó por accidente', icon: '💥' },
    ]
  }
];

const results = {
  cambio: {
    title: '🔄 Cambio de Producto',
    description: 'Puedes cambiar tu producto por otro de igual o mayor valor.',
    color: '#0033A0',
    bgColor: '#f0f7ff',
    requirements: [
      'Producto sin uso',
      'Empaque original completo',
      'Factura de compra',
      'Dentro de los 30 días'
    ],
    link: '/docs/cambios-garantias/como-realizar-cambio',
    linkText: 'Ver cómo hacer el cambio'
  },
  devolucion: {
    title: '💰 Devolución y Reembolso',
    description: 'Puedes devolver el producto y recibir tu dinero de vuelta.',
    color: '#059669',
    bgColor: '#ecfdf5',
    requirements: [
      'Producto sin uso',
      'Empaque original completo',
      'Factura de compra',
      'Dentro de los 30 días'
    ],
    link: '/docs/cambios-garantias/como-funciona-reembolso',
    linkText: 'Ver proceso de reembolso'
  },
  garantia: {
    title: '🔧 Trámite de Garantía',
    description: 'Tu producto será evaluado para reparación, cambio o reembolso.',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    requirements: [
      'Factura de compra',
      'Dentro del período de garantía',
      'Defecto de fábrica (no por mal uso)'
    ],
    link: '/docs/cambios-garantias/como-tramitar-garantia',
    linkText: 'Ver cómo tramitar garantía'
  },
  urgente: {
    title: '🚨 Reporte Urgente',
    description: 'Debes reportar inmediatamente para que podamos ayudarte.',
    color: '#dc2626',
    bgColor: '#fef2f2',
    requirements: [
      'Fotos del producto y empaque',
      'Número de pedido',
      'Descripción del problema'
    ],
    action: 'Llama ahora: (601) 407 3033',
    link: '/docs/pedidos-envios/que-hago-si-no-recibo-mi-pedido',
    linkText: 'Ver qué hacer'
  },
  no_aplica: {
    title: '❌ No Aplica para Cambio/Devolución',
    description: 'Lamentablemente, tu caso no califica para cambio o devolución voluntaria.',
    color: '#6b7280',
    bgColor: '#f9fafb',
    reasons: [
      'El producto ya fue usado',
      'Pasaron más de 30 días',
      'El daño fue accidental'
    ],
    alternative: 'Si el producto tiene un defecto de fábrica, podrías tramitar garantía.',
    link: '/docs/cambios-garantias/diferencia-cambio-devolucion-garantia',
    linkText: 'Ver todas las opciones'
  }
};

const WarrantyDecisionWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const determineResult = (allAnswers) => {
    const { timing, problem, condition } = allAnswers;

    // Damaged on arrival - urgent
    if (timing === 'damaged') {
      return 'urgente';
    }

    // More than 30 days - only warranty applies
    if (timing === 'old') {
      if (problem === 'defect') {
        return 'garantia';
      }
      return 'no_aplica';
    }

    // Within 30 days
    if (timing === 'recent') {
      // Wrong product
      if (problem === 'wrong') {
        return 'urgente';
      }

      // Has defect
      if (problem === 'defect') {
        return condition === 'damaged_by_me' ? 'no_aplica' : 'garantia';
      }

      // Wants different product or doesn't want it
      if (problem === 'dont_want' || problem === 'different') {
        if (condition === 'unused' || condition === 'opened') {
          return problem === 'dont_want' ? 'devolucion' : 'cambio';
        }
        return 'no_aplica';
      }
    }

    return 'no_aplica';
  };

  const handleAnswer = (questionId, answerId) => {
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      // Special handling for timing = damaged (skip to result)
      if (questionId === 'timing' && answerId === 'damaged') {
        setResult(results['urgente']);
        return;
      }
      // Special handling for timing = old and problem != defect
      if (questionId === 'problem' && answers.timing === 'old' && answerId !== 'defect') {
        setResult(results['no_aplica']);
        return;
      }
      setCurrentStep(currentStep + 1);
    } else {
      // Last question - determine result
      const resultKey = determineResult(newAnswers);
      setResult(results[resultKey]);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
    },
    questionCard: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
    },
    progress: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '24px',
    },
    progressDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      transition: 'all 0.2s ease',
    },
    question: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      textAlign: 'center',
      marginBottom: '24px',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    optionIcon: {
      fontSize: '24px',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
    },
    optionLabel: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#374151',
    },
    resultCard: {
      borderRadius: '16px',
      padding: '32px 24px',
      textAlign: 'center',
    },
    resultTitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '12px',
    },
    resultDescription: {
      fontSize: '15px',
      marginBottom: '24px',
      lineHeight: '1.5',
    },
    requirementsList: {
      textAlign: 'left',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: '12px',
      padding: '16px 20px',
      marginBottom: '24px',
    },
    requirementsTitle: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '12px',
    },
    requirement: {
      fontSize: '14px',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    actionButton: {
      display: 'inline-block',
      padding: '14px 28px',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      marginBottom: '16px',
    },
    resetButton: {
      background: 'none',
      border: 'none',
      color: '#6b7280',
      fontSize: '14px',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    urgentAction: {
      backgroundColor: '#dc2626',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '16px',
    },
  };

  if (result) {
    return (
      <div style={styles.container}>
        <div style={{
          ...styles.resultCard,
          backgroundColor: result.bgColor,
          border: `2px solid ${result.color}`,
        }}>
          <div style={{ ...styles.resultTitle, color: result.color }}>
            {result.title}
          </div>
          <div style={{ ...styles.resultDescription, color: '#4b5563' }}>
            {result.description}
          </div>

          {result.requirements && (
            <div style={styles.requirementsList}>
              <div style={styles.requirementsTitle}>📋 Necesitas:</div>
              {result.requirements.map((req, i) => (
                <div key={i} style={styles.requirement}>
                  <span style={{ color: result.color }}>✓</span> {req}
                </div>
              ))}
            </div>
          )}

          {result.reasons && (
            <div style={styles.requirementsList}>
              <div style={styles.requirementsTitle}>Motivos:</div>
              {result.reasons.map((reason, i) => (
                <div key={i} style={styles.requirement}>
                  <span>•</span> {reason}
                </div>
              ))}
              {result.alternative && (
                <div style={{ marginTop: '12px', fontSize: '13px', color: '#059669' }}>
                  💡 {result.alternative}
                </div>
              )}
            </div>
          )}

          {result.action && (
            <div style={styles.urgentAction}>
              📞 {result.action}
            </div>
          )}

          <a
            href={result.link}
            style={{
              ...styles.actionButton,
              backgroundColor: result.color,
              color: '#fff',
            }}
          >
            {result.linkText} →
          </a>

          <div>
            <button style={styles.resetButton} onClick={reset}>
              ← Empezar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div style={styles.container}>
      <div style={styles.questionCard}>
        {/* Progress dots */}
        <div style={styles.progress}>
          {questions.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.progressDot,
                backgroundColor: i <= currentStep ? '#0033A0' : '#e5e7eb',
                transform: i === currentStep ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        {/* Question */}
        <div style={styles.question}>
          {currentQuestion.question}
        </div>

        {/* Options */}
        <div style={styles.options}>
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              style={styles.option}
              onClick={() => handleAnswer(currentQuestion.id, option.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f7ff';
                e.currentTarget.style.borderColor = '#0033A0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={styles.optionIcon}>{option.icon}</div>
              <div style={styles.optionLabel}>{option.label}</div>
            </div>
          ))}
        </div>

        {/* Reset if not on first step */}
        {currentStep > 0 && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button style={styles.resetButton} onClick={reset}>
              ← Empezar de nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WarrantyDecisionWizard;
