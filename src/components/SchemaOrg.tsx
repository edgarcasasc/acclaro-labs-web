export default function SchemaOrg({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' }) {
  const baseUrl = "https://acclarolabs.com"; // Sin slash aquí para concatenar fácil
  
  // SOLUCIÓN P1.B: Consistencia de Trailing Slash en el ID y la URL
  const currentUrl = lang === 'es' ? `${baseUrl}/` : `${baseUrl}/${lang}/`;

  const descriptions = {
    es: "Auditoría UX, Integración CRM (Salesforce) y Estrategia de IA. Optimizamos tu ecosistema digital para crecer con evidencia.",
    en: "UX Audit, CRM Integration (Salesforce), and AI Strategy. We optimize your digital ecosystem to grow with evidence.",
    fr: "Audit UX, Intégration CRM (Salesforce) et Stratégie IA. Nous optimisons votre écosystème numérique pour croître avec des preuves."
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#organization`, // ID estable
        "name": "Acclaro Labs",
        "url": `${baseUrl}/`, // URL con slash final
        "logo": `${baseUrl}/logo.png`,
        "description": descriptions[lang],
        "image": `${baseUrl}/og-image-${lang}.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Monterrey",
          "addressRegion": "Nuevo León",
          "addressCountry": "MX"
        },
        "areaServed": ["MX", "US", "LATAM"],
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
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": `${baseUrl}/`, // Coincide con canonical
        "name": "Acclaro Labs",
        "publisher": { "@id": `${baseUrl}/#organization` },
        "inLanguage": lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'fr-FR'
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl, // Coincide con canonical de la página actual
        "name": descriptions[lang].split('.')[0],
        "description": descriptions[lang],
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "about": { "@id": `${baseUrl}/#organization` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/og-image-${lang}.png`
        },
        "inLanguage": lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'fr-FR'
      },
      // Fundadores (Identidad Unificada)
      {
        "@type": "Person",
        "@id": `${baseUrl}/#edgar`,
        "name": "Edgar Ovidio Casas",
        "jobTitle": "Co-Founder & Technical Architect",
        "worksFor": { "@id": `${baseUrl}/#organization` },
        "sameAs": ["https://www.linkedin.com/in/edgar-ovidio-camarillo-camarillo/"]
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#abdiel`,
        "name": "Abdiel Enrique Casas",
        "jobTitle": "Co-Founder & Growth Strategist",
        "worksFor": { "@id": `${baseUrl}/#organization` },
        "sameAs": ["https://www.linkedin.com/in/enrique-casas-94bb9767/"]
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