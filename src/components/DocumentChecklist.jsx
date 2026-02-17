import React, { useState } from 'react';

/**
 * DocumentChecklist Component
 * 
 * An interactive checklist that helps users prepare everything they need
 * before going to the store for a change, return, or warranty claim.
 * 
 * Usage in MDX:
 * import DocumentChecklist from '@site/src/components/DocumentChecklist';
 * <DocumentChecklist type="cambio" />
 */

const checklistData = {
  cambio: {
    title: 'Checklist para Cambio de Producto',
    icon: '🔄',
    color: '#0033A0',
    bgColor: '#f0f7ff',
    items: [
      { id: 1, label: 'Factura de compra (impresa o digital)', required: true },
      { id: 2, label: 'Producto completo', required: true },
      { id: 3, label: 'Empaque original en buen estado', required: true },
      { id: 4, label: 'Todos los accesorios incluidos', required: true },
      { id: 5, label: 'Manuales y documentación', required: true },
      { id: 6, label: 'Protectores y etiquetas', required: false },
      { id: 7, label: 'Documento de identidad', required: true },
      { id: 8, label: 'Medio de pago (por si hay diferencia)', required: false },
    ],
    note: 'El producto debe estar sin uso y en perfectas condiciones.',
  },
  devolucion: {
    title: 'Checklist para Devolución',
    icon: '💰',
    color: '#059669',
    bgColor: '#ecfdf5',
    items: [
      { id: 1, label: 'Factura de compra (impresa o digital)', required: true },
      { id: 2, label: 'Producto completo', required: true },
      { id: 3, label: 'Empaque original en buen estado', required: true },
      { id: 4, label: 'Todos los accesorios incluidos', required: true },
      { id: 5, label: 'Manuales y documentación', required: true },
      { id: 6, label: 'Protectores y etiquetas', required: false },
      { id: 7, label: 'Documento de identidad', required: true },
    ],
    note: 'El reembolso se hará al mismo método de pago original.',
  },
  garantia: {
    title: 'Checklist para Garantía',
    icon: '🔧',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    items: [
      { id: 1, label: 'Factura de compra (impresa o digital)', required: true },
      { id: 2, label: 'Producto con la falla', required: true },
      { id: 3, label: 'Descripción del problema', required: true },
      { id: 4, label: 'Empaque original (si lo tienes)', required: false },
      { id: 5, label: 'Accesorios y cargadores', required: false },
      { id: 6, label: 'Documento de identidad', required: true },
      { id: 7, label: 'Fotos o videos del defecto', required: false },
    ],
    note: 'El producto será evaluado técnicamente. El diagnóstico es gratuito.',
  },
};

const DocumentChecklist = ({ type = 'cambio' }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const data = checklistData[type] || checklistData.cambio;

  const toggleItem = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const requiredItems = data.items.filter(item => item.required);
  const checkedRequired = requiredItems.filter(item => checkedItems[item.id]).length;
  const allRequiredChecked = checkedRequired === requiredItems.length;
  const progress = (checkedRequired / requiredItems.length) * 100;

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: data.bgColor,
      borderRadius: '16px',
      padding: '24px',
      border: `2px solid ${data.color}20`,
      maxWidth: '500px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    icon: {
      fontSize: '32px',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
    title: {
      fontSize: '18px',
      fontWeight: '700',
      color: data.color,
      margin: 0,
    },
    progressContainer: {
      marginBottom: '20px',
    },
    progressBar: {
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: data.color,
      borderRadius: '4px',
      transition: 'width 0.3s ease',
    },
    progressText: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '8px',
      textAlign: 'right',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      marginBottom: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: '2px solid transparent',
    },
    checkbox: {
      width: '24px',
      height: '24px',
      borderRadius: '6px',
      border: '2px solid #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.2s ease',
    },
    checkboxChecked: {
      backgroundColor: data.color,
      borderColor: data.color,
    },
    checkmark: {
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    label: {
      flex: 1,
      fontSize: '14px',
      color: '#374151',
    },
    labelChecked: {
      textDecoration: 'line-through',
      color: '#9ca3af',
    },
    requiredBadge: {
      fontSize: '10px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: `${data.color}20`,
      color: data.color,
      fontWeight: '600',
    },
    optionalBadge: {
      fontSize: '10px',
      padding: '2px 6px',
      borderRadius: '4px',
      backgroundColor: '#f3f4f6',
      color: '#6b7280',
    },
    note: {
      marginTop: '16px',
      padding: '12px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      fontSize: '13px',
      color: '#6b7280',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
    },
    noteIcon: {
      flexShrink: 0,
    },
    successMessage: {
      marginTop: '16px',
      padding: '16px',
      backgroundColor: '#dcfce7',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#166534',
      fontWeight: '600',
      fontSize: '14px',
    },
    printButton: {
      marginTop: '16px',
      width: '100%',
      padding: '12px',
      backgroundColor: data.color,
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.icon}>{data.icon}</div>
        <h3 style={styles.title}>{data.title}</h3>
      </div>

      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
        <div style={styles.progressText}>
          {checkedRequired} de {requiredItems.length} obligatorios
        </div>
      </div>

      <ul style={styles.list}>
        {data.items.map(item => (
          <li
            key={item.id}
            style={{
              ...styles.item,
              borderColor: checkedItems[item.id] ? `${data.color}40` : 'transparent',
            }}
            onClick={() => toggleItem(item.id)}
          >
            <div style={{
              ...styles.checkbox,
              ...(checkedItems[item.id] ? styles.checkboxChecked : {}),
            }}>
              {checkedItems[item.id] && <span style={styles.checkmark}>✓</span>}
            </div>
            <span style={{
              ...styles.label,
              ...(checkedItems[item.id] ? styles.labelChecked : {}),
            }}>
              {item.label}
            </span>
            {item.required ? (
              <span style={styles.requiredBadge}>Obligatorio</span>
            ) : (
              <span style={styles.optionalBadge}>Opcional</span>
            )}
          </li>
        ))}
      </ul>

      <div style={styles.note}>
        <span style={styles.noteIcon}>💡</span>
        <span>{data.note}</span>
      </div>

      {allRequiredChecked && (
        <div style={styles.successMessage}>
          ✅ ¡Tienes todo lo necesario! Estás listo para ir a la tienda.
        </div>
      )}

      <button 
        style={styles.printButton}
        onClick={() => window.print()}
      >
        🖨️ Imprimir checklist
      </button>
    </div>
  );
};

export default DocumentChecklist;
