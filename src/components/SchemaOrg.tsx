export default function SchemaOrg({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' }) {
  const isRoot = lang === 'es';
  const baseUrl = "https://acclarolabs.com";
  const currentUrl = isRoot ? `${baseUrl}/` : `${baseUrl}/${lang}/`;

  const descriptions = {
    es: "Agencia de estrategia digital especializada en integración CRM Salesforce, desarrollo web de alto rendimiento y IA.",
    en: "Digital strategy agency specializing in Salesforce CRM integration, high-performance web development, and AI.",
    fr: "Agence de stratégie digitale spécialisée en intégration Salesforce, développement web et IA."
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. ORGANIZACIÓN (Con señales locales P1.9)
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Acclaro Labs",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": descriptions[lang],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Monterrey",
          "addressRegion": "Nuevo León",
          "addressCountry": "MX"
        },
        "sameAs": [
          "https://www.linkedin.com/company/acclarolabs",
          "https://twitter.com/Acclarolabs",
          "https://github.com/acclarolabs"
        ]
      },
      // 2. WEBSITE (Crucial para Sitelinks Searchbox)
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": currentUrl,
        "name": "Acclaro Labs",
        "inLanguage": lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'fr-FR',
        "publisher": { "@id": `${baseUrl}/#organization` }
      },
      // 3. FUNDADORES (E-E-A-T Validado P0.3)
      {
        "@type": "Person",
        "@id": `${baseUrl}/#edgar`,
        "name": "Edgar Ovidio Camarillo",
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