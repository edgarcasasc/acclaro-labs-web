// src/components/SchemaOrg.tsx
export default function SchemaOrg({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' }) {
  const baseUrl = "https://acclarolabs.com";
  // Canonicalización estricta con trailing slash (P1.B)
  const currentUrl = lang === 'es' ? `${baseUrl}/` : `${baseUrl}/${lang}/`;

  const descriptions = {
    es: "Auditoría UX, Integración CRM (Salesforce) y Estrategia de IA. Optimizamos tu ecosistema digital para crecer con evidencia.",
    en: "UX Audit, CRM Integration (Salesforce), and AI Strategy. We optimize your digital ecosystem to grow with evidence.",
    fr: "Audit UX, Intégration CRM (Salesforce) et Stratégie IA. Nous optimisons votre écosystème numérique pour croître avec des preuves."
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. PROFESSIONAL SERVICE (Más específico que Organization - P2.B)
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#organization`,
        "name": "Acclaro Labs",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": descriptions[lang],
        "image": `${baseUrl}/og-image-${lang}.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Monterrey",
          "addressRegion": "Nuevo León",
          "addressCountry": "MX"
        },
        // Área de servicio explícita para SEO Local/Global
        "areaServed": ["MX", "US", "LATAM"],
        "priceRange": "$$$",
        "sameAs": [
          "https://www.linkedin.com/company/acclarolabs",
          "https://twitter.com/acclarolabs",
          "https://github.com/acclarolabs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "hello@acclarolabs.com",
          "availableLanguage": ["es", "en", "fr"]
        }
      },
      
      // 2. WEBSITE (P2.A - Conexión de Sitelinks)
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Acclaro Labs",
        "publisher": { "@id": `${baseUrl}/#organization` },
        "inLanguage": lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'fr-FR'
      },

      // 3. WEBPAGE (La pieza que faltaba para conectar todo - P2.A)
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": descriptions[lang].split('.')[0], // Título corto
        "description": descriptions[lang],
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": `${baseUrl}/#organization` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/og-image-${lang}.png`
        },
        "inLanguage": lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'fr-FR'
      },

      // 4. FUNDADORES (Identidad Corregida - P0.A)
      {
        "@type": "Person",
        "@id": `${baseUrl}/#edgar`,
        "name": "Edgar Ovidio Casas", // Alineado con UI visible (Team Cards)
        "jobTitle": "Co-Founder & Technical Architect",
        "worksFor": { "@id": `${baseUrl}/#organization` },
        "sameAs": ["https://www.linkedin.com/in/edgar-ovidio-camarillo-camarillo/"],
        "knowsAbout": ["Salesforce", "Cloud Architecture", "CRM Strategy"]
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#abdiel`,
        "name": "Abdiel Enrique Casas",
        "jobTitle": "Co-Founder & Growth Strategist",
        "worksFor": { "@id": `${baseUrl}/#organization` },
        "sameAs": ["https://www.linkedin.com/in/enrique-casas-94bb9767/"],
        "knowsAbout": ["UX Strategy", "CRO", "AI Implementation"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}