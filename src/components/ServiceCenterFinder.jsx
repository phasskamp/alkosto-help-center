import React, { useState } from 'react';

/**
 * ServiceCenterFinder Component
 * 
 * A searchable directory of authorized service centers by brand.
 * Helps users find where to take their products for warranty service.
 * 
 * Usage in MDX:
 * import ServiceCenterFinder from '@site/src/components/ServiceCenterFinder';
 * <ServiceCenterFinder />
 */

const brands = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '📱',
    phone: '01 8000 112 112',
    website: 'samsung.com/co/support',
    categories: ['Celulares', 'TVs', 'Electrodomésticos', 'Audio'],
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '📺',
    phone: '01 8000 903 054',
    website: 'lg.com/co/soporte',
    categories: ['TVs', 'Electrodomésticos', 'Audio', 'Computadores'],
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: '🎮',
    phone: '(601) 6000 550',
    website: 'sony.com.co/soporte',
    categories: ['TVs', 'Audio', 'PlayStation', 'Cámaras'],
  },
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    phone: '01 800 700 2775',
    website: 'apple.com/co/support',
    categories: ['iPhone', 'iPad', 'Mac', 'Apple Watch'],
  },
  {
    id: 'hp',
    name: 'HP',
    logo: '💻',
    phone: '01 8000 114 772',
    website: 'support.hp.com',
    categories: ['Computadores', 'Impresoras'],
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logo: '🖥️',
    phone: '01 8000 510 866',
    website: 'support.lenovo.com',
    categories: ['Computadores', 'Tablets'],
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '🧊',
    phone: '01 8000 912 112',
    website: 'whirlpool.com.co',
    categories: ['Neveras', 'Lavadoras', 'Estufas'],
  },
  {
    id: 'haceb',
    name: 'Haceb',
    logo: '🏠',
    phone: '01 8000 511 888',
    website: 'haceb.com',
    categories: ['Neveras', 'Lavadoras', 'Estufas', 'Calentadores'],
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '🌀',
    phone: '01 8000 912 515',
    website: 'electrolux.com.co',
    categories: ['Neveras', 'Lavadoras', 'Aspiradoras'],
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: '📲',
    phone: '(601) 390 4000',
    website: 'mi.com/co/service',
    categories: ['Celulares', 'Wearables', 'Smart Home'],
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: '📡',
    phone: '01 8000 112 888',
    website: 'consumer.huawei.com/co/support',
    categories: ['Celulares', 'Tablets', 'Wearables'],
  },
  {
    id: 'motorola',
    name: 'Motorola',
    logo: '📞',
    phone: '01 8000 700 088',
    website: 'motorola.com.co/soporte',
    categories: ['Celulares'],
  },
];

const ServiceCenterFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedBrand, setExpandedBrand] = useState(null);

  const categories = ['all', ...new Set(brands.flatMap(b => b.categories))];

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brand.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: '700px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '24px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
    },
    filters: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    searchInput: {
      flex: '1',
      minWidth: '200px',
      padding: '12px 16px',
      paddingLeft: '40px',
      fontSize: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    searchWrapper: {
      position: 'relative',
      flex: '1',
      minWidth: '200px',
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '16px',
      color: '#9ca3af',
    },
    categorySelect: {
      padding: '12px 16px',
      fontSize: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      outline: 'none',
    },
    brandList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    brandCard: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '2px solid #e5e7eb',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
    },
    brandHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      cursor: 'pointer',
      gap: '16px',
    },
    brandLogo: {
      fontSize: '28px',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      borderRadius: '10px',
    },
    brandInfo: {
      flex: 1,
    },
    brandName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '4px',
    },
    brandCategories: {
      fontSize: '12px',
      color: '#6b7280',
    },
    brandArrow: {
      fontSize: '18px',
      color: '#9ca3af',
      transition: 'transform 0.2s',
    },
    brandDetails: {
      padding: '0 16px 16px',
      borderTop: '1px solid #e5e7eb',
      marginTop: '0',
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderBottom: '1px solid #f3f4f6',
    },
    detailIcon: {
      fontSize: '18px',
      width: '32px',
      textAlign: 'center',
    },
    detailLabel: {
      fontSize: '12px',
      color: '#6b7280',
      marginBottom: '2px',
    },
    detailValue: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#1f2937',
    },
    detailLink: {
      color: '#0033A0',
      textDecoration: 'none',
    },
    callButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      padding: '12px',
      backgroundColor: '#0033A0',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px',
      textDecoration: 'none',
    },
    noResults: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#6b7280',
    },
    externalLink: {
      display: 'inline-block',
      marginTop: '16px',
      padding: '12px 20px',
      backgroundColor: '#f3f4f6',
      borderRadius: '8px',
      color: '#374151',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>🔍 Buscar Centro de Servicio</h3>
        <p style={styles.subtitle}>Encuentra el soporte técnico autorizado para tu marca</p>
      </div>

      <div style={styles.filters}>
        <div style={styles.searchWrapper}>
          <span style={styles.searchIcon}>🔎</span>
          <input
            type="text"
            placeholder="Buscar marca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.categorySelect}
        >
          <option value="all">Todas las categorías</option>
          {categories.filter(c => c !== 'all').map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={styles.brandList}>
        {filteredBrands.length > 0 ? (
          filteredBrands.map(brand => (
            <div
              key={brand.id}
              style={{
                ...styles.brandCard,
                borderColor: expandedBrand === brand.id ? '#0033A0' : '#e5e7eb',
              }}
            >
              <div
                style={styles.brandHeader}
                onClick={() => setExpandedBrand(expandedBrand === brand.id ? null : brand.id)}
              >
                <div style={styles.brandLogo}>{brand.logo}</div>
                <div style={styles.brandInfo}>
                  <div style={styles.brandName}>{brand.name}</div>
                  <div style={styles.brandCategories}>
                    {brand.categories.join(' • ')}
                  </div>
                </div>
                <span style={{
                  ...styles.brandArrow,
                  transform: expandedBrand === brand.id ? 'rotate(90deg)' : 'rotate(0)',
                }}>
                  ▶
                </span>
              </div>

              {expandedBrand === brand.id && (
                <div style={styles.brandDetails}>
                  <div style={styles.detailRow}>
                    <span style={styles.detailIcon}>📞</span>
                    <div>
                      <div style={styles.detailLabel}>Línea de soporte</div>
                      <div style={styles.detailValue}>{brand.phone}</div>
                    </div>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailIcon}>🌐</span>
                    <div>
                      <div style={styles.detailLabel}>Sitio web de soporte</div>
                      <a
                        href={`https://${brand.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.detailValue, ...styles.detailLink }}
                      >
                        {brand.website}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, '')}`}
                    style={styles.callButton}
                  >
                    📱 Llamar ahora
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            <p>No se encontraron marcas con esos criterios.</p>
            <a
              href="https://www.alkosto.com/tramites/tramites-garantia/centros-servicios"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.externalLink}
            >
              Ver directorio completo en Alkosto.com →
            </a>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <a
          href="https://www.alkosto.com/tramites/tramites-garantia/centros-servicios"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.externalLink}
        >
          📋 Ver directorio completo con direcciones →
        </a>
      </div>
    </div>
  );
};

export default ServiceCenterFinder;
