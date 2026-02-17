import React, { useState } from 'react';

/**
 * InvoiceLookup Component
 * 
 * A widget that provides quick access to invoice download functionality.
 * 
 * Usage in MDX:
 * import InvoiceLookup from '@site/src/components/InvoiceLookup';
 * <InvoiceLookup />
 */

const InvoiceLookup = () => {
  const [documentType, setDocumentType] = useState('cc');
  const [documentNumber, setDocumentNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the invoice portal
    window.open('https://www.alkosto.com/descarga-factura', '_blank');
  };

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: '#f9fafb',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #e5e7eb',
      maxWidth: '500px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
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
      border: '1px solid #e5e7eb',
    },
    titleGroup: {
      flex: 1,
    },
    title: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0,
      marginBottom: '4px',
    },
    subtitle: {
      fontSize: '13px',
      color: '#6b7280',
      margin: 0,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    row: {
      display: 'flex',
      gap: '12px',
    },
    selectWrapper: {
      width: '140px',
    },
    select: {
      width: '100%',
      padding: '12px',
      fontSize: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      outline: 'none',
    },
    inputWrapper: {
      flex: 1,
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '14px',
      border: isFocused ? '2px solid #0033A0' : '2px solid #e5e7eb',
      borderRadius: '8px',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#0033A0',
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
      transition: 'all 0.2s ease',
    },
    note: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginTop: '12px',
      padding: '12px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    },
    noteIcon: {
      fontSize: '16px',
      flexShrink: 0,
    },
    noteText: {
      fontSize: '12px',
      color: '#6b7280',
      lineHeight: '1.4',
    },
    directLink: {
      textAlign: 'center',
      marginTop: '16px',
      fontSize: '13px',
    },
    link: {
      color: '#0033A0',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.icon}>🧾</div>
        <div style={styles.titleGroup}>
          <h4 style={styles.title}>Descarga tu Factura</h4>
          <p style={styles.subtitle}>Consulta y descarga tus facturas electrónicas</p>
        </div>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.row}>
          <div style={styles.selectWrapper}>
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              style={styles.select}
            >
              <option value="cc">Cédula</option>
              <option value="nit">NIT</option>
              <option value="ce">Cédula Ext.</option>
              <option value="passport">Pasaporte</option>
            </select>
          </div>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Número de documento"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={styles.input}
            />
          </div>
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#002580';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0033A0';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>📥</span>
          <span>Buscar Facturas</span>
        </button>
      </form>

      <div style={styles.note}>
        <span style={styles.noteIcon}>💡</span>
        <span style={styles.noteText}>
          Usa el mismo documento que registraste al momento de la compra. 
          Las facturas están disponibles en formato PDF y XML.
        </span>
      </div>

      <div style={styles.directLink}>
        <a 
          href="https://www.alkosto.com/descarga-factura" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          Ir directamente al portal de facturas →
        </a>
      </div>
    </div>
  );
};

export default InvoiceLookup;
