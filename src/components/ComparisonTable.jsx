import React, { useState } from 'react';

/**
 * ComparisonTable Component
 * 
 * A responsive comparison table showing the differences between
 * Cambio, Devolución, and Garantía processes.
 * 
 * Usage in MDX:
 * import ComparisonTable from '@site/src/components/ComparisonTable';
 * <ComparisonTable />
 */

const ComparisonTable = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const columns = [
    {
      id: 'cambio',
      title: 'Cambio',
      icon: '🔄',
      color: '#0033A0',
      bgColor: '#f0f7ff',
      description: 'Quiero otro producto'
    },
    {
      id: 'devolucion',
      title: 'Devolución',
      icon: '💰',
      color: '#059669',
      bgColor: '#ecfdf5',
      description: 'Quiero mi dinero'
    },
    {
      id: 'garantia',
      title: 'Garantía',
      icon: '🔧',
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      description: 'Mi producto falló'
    }
  ];

  const rows = [
    {
      label: '¿Cuándo aplica?',
      icon: '❓',
      values: {
        cambio: 'Quieres otro producto diferente',
        devolucion: 'No quieres el producto, quieres tu dinero',
        garantia: 'El producto tiene defectos o fallas'
      }
    },
    {
      label: 'Plazo',
      icon: '⏰',
      values: {
        cambio: '30 días desde la entrega',
        devolucion: '30 días desde la entrega',
        garantia: 'Mínimo 1 año (varía por producto)'
      }
    },
    {
      label: 'Estado del producto',
      icon: '📦',
      values: {
        cambio: 'Sin uso, perfecto estado',
        devolucion: 'Sin uso, perfecto estado',
        garantia: 'Puede estar usado'
      }
    },
    {
      label: 'Empaque original',
      icon: '🎁',
      values: {
        cambio: '✅ Obligatorio',
        devolucion: '✅ Obligatorio',
        garantia: '⚠️ Recomendado'
      }
    },
    {
      label: 'Factura',
      icon: '📄',
      values: {
        cambio: '✅ Obligatoria',
        devolucion: '✅ Obligatoria',
        garantia: '✅ Obligatoria'
      }
    },
    {
      label: 'Resultado',
      icon: '🎯',
      values: {
        cambio: 'Recibes otro producto',
        devolucion: 'Recibes tu dinero',
        garantia: 'Reparación, cambio o reembolso'
      }
    },
    {
      label: 'Dónde se hace',
      icon: '📍',
      values: {
        cambio: 'Tienda Alkosto',
        devolucion: 'Tienda Alkosto',
        garantia: 'Marca o Alkosto'
      }
    },
    {
      label: 'Costo',
      icon: '💵',
      values: {
        cambio: 'Sin costo*',
        devolucion: 'Sin costo',
        garantia: 'Sin costo'
      }
    }
  ];

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      overflowX: 'auto',
      margin: '24px 0',
    },
    table: {
      width: '100%',
      minWidth: '600px',
      borderCollapse: 'separate',
      borderSpacing: '0',
    },
    headerCell: {
      padding: '20px 16px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderRadius: '12px 12px 0 0',
      position: 'relative',
    },
    headerIcon: {
      fontSize: '32px',
      display: 'block',
      marginBottom: '8px',
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '4px',
    },
    headerDescription: {
      fontSize: '12px',
      opacity: 0.8,
    },
    labelCell: {
      padding: '14px 16px',
      backgroundColor: '#f9fafb',
      fontWeight: '500',
      fontSize: '14px',
      color: '#374151',
      borderBottom: '1px solid #e5e7eb',
      whiteSpace: 'nowrap',
    },
    labelIcon: {
      marginRight: '8px',
    },
    valueCell: {
      padding: '14px 16px',
      textAlign: 'center',
      fontSize: '14px',
      borderBottom: '1px solid #e5e7eb',
      transition: 'all 0.2s ease',
    },
    highlight: {
      fontWeight: '600',
    },
    footer: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '16px',
      textAlign: 'center',
    },
    mobileCard: {
      display: 'none', // Hidden by default, would show on mobile with media queries
    },
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.labelCell, backgroundColor: '#fff', borderBottom: 'none' }}></th>
            {columns.map(col => (
              <th
                key={col.id}
                style={{
                  ...styles.headerCell,
                  backgroundColor: activeColumn === col.id ? col.bgColor : '#fafafa',
                  border: activeColumn === col.id ? `2px solid ${col.color}` : '2px solid transparent',
                }}
                onMouseEnter={() => setActiveColumn(col.id)}
                onMouseLeave={() => setActiveColumn(null)}
              >
                <span style={styles.headerIcon}>{col.icon}</span>
                <div style={{ ...styles.headerTitle, color: col.color }}>{col.title}</div>
                <div style={{ ...styles.headerDescription, color: col.color }}>{col.description}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={styles.labelCell}>
                <span style={styles.labelIcon}>{row.icon}</span>
                {row.label}
              </td>
              {columns.map(col => (
                <td
                  key={col.id}
                  style={{
                    ...styles.valueCell,
                    backgroundColor: activeColumn === col.id ? col.bgColor : '#fff',
                    color: activeColumn === col.id ? col.color : '#4b5563',
                    fontWeight: activeColumn === col.id ? '600' : '400',
                  }}
                  onMouseEnter={() => setActiveColumn(col.id)}
                  onMouseLeave={() => setActiveColumn(null)}
                >
                  {row.values[col.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={styles.footer}>
        * Si el producto de reemplazo cuesta más, pagas la diferencia.
      </div>
    </div>
  );
};

export default ComparisonTable;
