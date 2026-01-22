// src/components/SchemaOrg.tsx
export default function SchemaOrg({ lang = 'es' }: { lang?: 'es' | 'en' | 'fr' }) {
  const descriptions = {
    es: "Agencia de estrategia digital especializada en integración CRM, desarrollo web y IA.",
    en: "Digital strategy agency specializing in CRM integration, web development, and AI.",
    fr: "Agence de stratégie digitale spécialisée en intégration CRM, développement web et IA."
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Acclaro Labs",
    "url": `https://acclarolabs.com/${lang === 'es' ? '' : lang}`,
    "logo": "https://acclarolabs.com/logo.png",
    "description": descriptions[lang],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Monterrey",
      "addressRegion": "Nuevo León",
      "addressCountry": "MX"
    },
    "sameAs": [
      "https://www.linkedin.com/company/acclarolabs",
      "https://twitter.com/Acclarolabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "availableLanguage": ["es", "en", "fr"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}