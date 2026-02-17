import React, { useState } from 'react';

/**
 * WarrantyTimeline Component
 * 
 * A visual timeline showing the different periods for returns, 
 * exchanges, and warranty claims.
 * 
 * Usage in MDX:
 * import WarrantyTimeline from '@site/src/components/WarrantyTimeline';
 * <WarrantyTimeline />
 */

const WarrantyTimeline = () => {
  const [hoveredPeriod, setHoveredPeriod] = useState(null);

  const periods = [
    {
      id: 'immediate',
      label: '24-48h',
      title: 'Reporte de Daños',
      description: 'Reporta inmediatamente si tu producto llegó dañado, incompleto o incorrecto.',
      color: '#dc2626',
      bgColor: '#fef2f2',
      icon: '🚨',
      actions: ['Reportar producto dañado', 'Producto incorrecto', 'Pedido incompleto']
    },
    {
      id: 'retracto',
      label: '30 días',
      title: 'Cambios y Devoluciones',
      description: 'Período para cambiar o devolver productos por retracto voluntario (cambio de opinión).',
      color: '#0033A0',
      bgColor: '#f0f7ff',
      icon: '🔄',
      actions: ['Cambio por otro producto', 'Devolución y reembolso', 'Producto sin uso requerido']
    },
    {
      id: 'garantia',
      label: '1+ años',
      title: 'Garantía del Fabricante',
      description: 'Cobertura por defectos de fábrica. El tiempo exacto varía según producto y marca.',
      color: '#059669',
      bgColor: '#ecfdf5',
      icon: '🔧',
      actions: ['Reparación sin costo', 'Cambio si no es reparable', 'Reembolso como última opción']
    },
    {
      id: 'extendida',
      label: '+1-3 años',
      title: 'Garantía Extendida',
      description: 'Protección adicional opcional que puedes comprar para extender la cobertura.',
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      icon: '🛡️',
      actions: ['Extensión de cobertura', 'Protección contra daños*', 'Atención prioritaria']
    }
  ];

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px 0',
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      textAlign: 'center',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: '32px',
    },
    timelineWrapper: {
      position: 'relative',
      padding: '0 16px',
    },
    timelineBar: {
      display: 'flex',
      height: '8px',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '16px',
    },
    timelineSegment: {
      height: '100%',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    markers: {
      display: 'flex',
      marginBottom: '32px',
      position: 'relative',
    },
    marker: {
      textAlign: 'center',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
    },
    markerDot: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      margin: '0 auto 8px',
      border: '3px solid #fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    markerLabel: {
      fontSize: '13px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    markerTitle: {
      fontSize: '12px',
      color: '#6b7280',
    },
    detailCard: {
      borderRadius: '16px',
      padding: '24px',
      marginTop: '16px',
      transition: 'all 0.3s ease',
    },
    detailHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
    },
    detailIcon: {
      fontSize: '32px',
      width: '56px',
      height: '56px',
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
    detailLabel: {
      fontSize: '13px',
      opacity: 0.8,
    },
    detailDescription: {
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    actionsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    actionTag: {
      fontSize: '12px',
      padding: '6px 12px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255,255,255,0.6)',
      fontWeight: '500',
    },
    purchaseMarker: {
      position: 'absolute',
      left: '0',
      top: '-20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    purchaseIcon: {
      fontSize: '20px',
    },
    purchaseLabel: {
      fontSize: '10px',
      color: '#6b7280',
      marginTop: '4px',
    },
    legend: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '24px',
      flexWrap: 'wrap',
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      color: '#6b7280',
    },
    legendDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
    },
    note: {
      fontSize: '11px',
      color: '#9ca3af',
      textAlign: 'center',
      marginTop: '16px',
    },
  };

  const widths = ['8%', '22%', '40%', '30%'];

  return (
    <div style={styles.container}>
      <div style={styles.title}>📅 Tus Derechos en el Tiempo</div>
      <div style={styles.subtitle}>
        Haz clic en cada período para ver más detalles
      </div>

      <div style={styles.timelineWrapper}>
        {/* Timeline bar */}
        <div style={styles.timelineBar}>
          {periods.map((period, index) => (
            <div
              key={period.id}
              style={{
                ...styles.timelineSegment,
                backgroundColor: period.color,
                width: widths[index],
                opacity: hoveredPeriod && hoveredPeriod !== period.id ? 0.4 : 1,
                transform: hoveredPeriod === period.id ? 'scaleY(1.5)' : 'scaleY(1)',
              }}
              onMouseEnter={() => setHoveredPeriod(period.id)}
            />
          ))}
        </div>

        {/* Markers */}
        <div style={styles.markers}>
          {/* Purchase marker */}
          <div style={styles.purchaseMarker}>
            <span style={styles.purchaseIcon}>🛒</span>
            <span style={styles.purchaseLabel}>Compra</span>
          </div>

          {periods.map((period, index) => (
            <div
              key={period.id}
              style={{
                ...styles.marker,
                flex: widths[index].replace('%', ''),
                backgroundColor: hoveredPeriod === period.id ? period.bgColor : 'transparent',
              }}
              onMouseEnter={() => setHoveredPeriod(period.id)}
              onClick={() => setHoveredPeriod(hoveredPeriod === period.id ? null : period.id)}
            >
              <div style={{
                ...styles.markerDot,
                backgroundColor: period.color,
              }} />
              <div style={{ ...styles.markerLabel, color: period.color }}>
                {period.label}
              </div>
              <div style={styles.markerTitle}>
                {period.title}
              </div>
            </div>
          ))}
        </div>

        {/* Detail card */}
        {hoveredPeriod && (
          <div 
            style={{
              ...styles.detailCard,
              backgroundColor: periods.find(p => p.id === hoveredPeriod).bgColor,
              border: `2px solid ${periods.find(p => p.id === hoveredPeriod).color}`,
            }}
          >
            {(() => {
              const period = periods.find(p => p.id === hoveredPeriod);
              return (
                <>
                  <div style={styles.detailHeader}>
                    <div style={styles.detailIcon}>{period.icon}</div>
                    <div>
                      <div style={{ ...styles.detailTitle, color: period.color }}>
                        {period.title}
                      </div>
                      <div style={{ ...styles.detailLabel, color: period.color }}>
                        Plazo: {period.label}
                      </div>
                    </div>
                  </div>
                  <div style={styles.detailDescription}>
                    {period.description}
                  </div>
                  <div style={styles.actionsList}>
                    {period.actions.map((action, i) => (
                      <span 
                        key={i} 
                        style={{ ...styles.actionTag, color: period.color }}
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={styles.legend}>
        {periods.map(period => (
          <div key={period.id} style={styles.legendItem}>
            <div style={{ ...styles.legendDot, backgroundColor: period.color }} />
            {period.title}
          </div>
        ))}
      </div>

      <div style={styles.note}>
        * Los tiempos exactos pueden variar según el producto y fabricante. 
        Consulta la documentación de tu producto.
      </div>
    </div>
  );
};

export default WarrantyTimeline;
