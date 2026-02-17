import React, { useState } from 'react';

/**
 * WhatsAppButton Component
 * 
 * A floating WhatsApp button for easy customer contact.
 * Can be added globally via Docusaurus theme wrapper or per-page.
 * 
 * Usage:
 * import WhatsAppButton from '@site/src/components/WhatsAppButton';
 * <WhatsAppButton phoneNumber="573001234567" message="Hola, necesito ayuda con mi pedido" />
 */

const WhatsAppButton = ({ 
  phoneNumber = "573016071448", // Replace with actual Alkosto WhatsApp
  message = "Hola, necesito ayuda con mi pedido en Alkosto",
  position = "bottom-right" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positions = {
    'bottom-right': { bottom: '24px', right: '24px' },
    'bottom-left': { bottom: '24px', left: '24px' },
  };

  const styles = {
    container: {
      position: 'fixed',
      ...positions[position],
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexDirection: position === 'bottom-left' ? 'row-reverse' : 'row',
    },
    button: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: isHovered 
        ? '0 8px 24px rgba(37, 211, 102, 0.4)' 
        : '0 4px 12px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      border: 'none',
      textDecoration: 'none',
    },
    icon: {
      width: '32px',
      height: '32px',
      fill: '#fff',
    },
    tooltip: {
      backgroundColor: '#fff',
      padding: '12px 16px',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      maxWidth: '200px',
      opacity: showTooltip ? 1 : 0,
      transform: showTooltip ? 'translateX(0)' : 'translateX(10px)',
      transition: 'all 0.3s ease',
      pointerEvents: showTooltip ? 'auto' : 'none',
    },
    tooltipTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '4px',
    },
    tooltipText: {
      fontSize: '12px',
      color: '#666',
      lineHeight: '1.4',
    },
    badge: {
      position: 'absolute',
      top: '-4px',
      right: '-4px',
      width: '20px',
      height: '20px',
      backgroundColor: '#FF4444',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: '#fff',
      fontWeight: '600',
      border: '2px solid #fff',
    },
    pulseRing: {
      position: 'absolute',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#25D366',
      opacity: 0.3,
      animation: 'pulse-ring 2s infinite',
    },
  };

  const pulseKeyframes = `
    @keyframes pulse-ring {
      0% {
        transform: scale(1);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.3);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  `;

  // WhatsApp SVG icon
  const WhatsAppIcon = () => (
    <svg style={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <>
      <style>{pulseKeyframes}</style>
      <div 
        style={styles.container}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        <div style={styles.tooltip}>
          <div style={styles.tooltipTitle}>¿Necesitas ayuda?</div>
          <div style={styles.tooltipText}>
            Chatea con nosotros por WhatsApp
          </div>
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulse ring animation */}
          <div style={styles.pulseRing}></div>
          
          {/* Icon */}
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
