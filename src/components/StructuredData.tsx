import React from 'react';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. ORGANIZACIÓN (Corrigiendo la identidad)
      {
        "@type": "Organization",
        "@id": "https://acclarolabs.com/#organization",
        "name": "Acclaro Labs",
        "url": "https://acclarolabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://acclarolabs.com/logo.png" // Asegúrate de tener esta ruta o cámbiala
        },
        "sameAs": [
          "https://linkedin.com/company/acclarolabs",
          "https://twitter.com/acclarolabs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@acclarolabs.com",
          "contactType": "customer service",
          "areaServed": ["MX", "US", "LATAM"]
        }
      },
      // 2. SERVICIOS (Para aparecer en búsquedas transaccionales)
      {
        "@type": "Service",
        "@id": "https://acclarolabs.com/#service-audit",
        "name": "Auditoría Forense de Conversión & UX",
        "provider": { "@id": "https://acclarolabs.com/#organization" },
        "serviceType": ["UX Audit", "CRO", "Technical SEO"],
        "areaServed": ["MX", "US", "LATAM"],
        "description": "Diagnóstico manual de fricción digital, análisis de fugas de ingresos y optimización de ecosistemas CRM + Web."
      },
      // 3. FUNDADORES (E-E-A-T Signals - Autoridad de Persona)
      {
        "@type": "Person",
        "@id": "https://acclarolabs.com/#edgar",
        "name": "Edgar",
        "jobTitle": "Co-Founder & Technical Architect",
        "worksFor": { "@id": "https://acclarolabs.com/#organization" },
        "knowsAbout": ["Salesforce", "Cloud Architecture", "CRM Strategy"]
      },
      {
        "@type": "Person",
        "@id": "https://acclarolabs.com/#abdiel",
        "name": "Abdiel",
        "jobTitle": "Co-Founder & Growth Strategist",
        "worksFor": { "@id": "https://acclarolabs.com/#organization" },
        "knowsAbout": ["UX Strategy", "AI Implementation", "Conversion Rate Optimization"]
      },
      // 4. FAQ (Para ganar snippets en Google/Perplexity)
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué incluye la auditoría forense de Acclaro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Incluye un reporte de fricción, wireframes de conversión de alta fidelidad y una proyección de impacto financiero."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tarda el diagnóstico preliminar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entregamos el análisis inicial de tu ecosistema web y CRM en menos de 24 horas hábiles."
            }
          }
        ]
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