// src/components/SchemaOrg.tsx
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Acclaro Labs",
    "url": "https://acclarolabs.com",
    "logo": "https://acclarolabs.com/logo.png",
    "description": "Agencia de estrategia digital especializada en integración CRM, desarrollo web y IA.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Monterrey",
      "addressRegion": "Nuevo León",
      "addressCountry": "MX"
    },
    "sameAs": [
      "https://www.linkedin.com/company/acclarolabs",
      "https://twitter.com/acclarolabs"
      // Añade tus redes reales
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