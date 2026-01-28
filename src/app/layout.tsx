import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import { Suspense } from 'react';
import "./globals.css";

// 1. CONFIGURACIÓN DE FUENTES
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['700', '900'] 
});

// 2. HEAD DEFINITIVO: METADATOS (EN ESPAÑOL PARA LA RAÍZ)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"),
  
  title: {
    default: "Acclaro Labs | Del Caos a la Claridad", // <--- Traducido para coherencia
    template: "%s | Acclaro Labs"
  },
  description: "Construimos ecosistemas digitales unificados. Conectamos Salesforce, Desarrollo Web y Estrategia de IA para escalar empresas.",
  
  // SEÑALIZACIÓN HREFLANG COMPLETA
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
      'x-default': '/', 
    },
  },

  // OPENGRAPH OPTIMIZADO
  openGraph: {
    title: "Acclaro Labs | Del Caos a la Claridad",
    description: "Recupera ingresos perdidos en tu web y CRM con auditoría forense.",
    url: "https://acclarolabs.com",
    siteName: "Acclaro Labs",
    locale: "es_MX",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [{
      url: '/og-image-es.png', // Asegúrate de que esta imagen exista en /public
      width: 1200,
      height: 630,
      alt: 'Acclaro Labs - Ecosistemas Digitales Unificados',
    }],
  },

  // TWITTER/X METADATA
  twitter: {
    card: "summary_large_image",
    site: "@acclarolabs",
    creator: "@acclarolabs",
    title: "Acclaro Labs | Auditoría Forense Digital",
    description: "Detectamos fricción y fugas de dinero en tu ecosistema CRM + Web.",
    images: ['/og-image-es.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 3. GRAFO DE ENTIDAD MAESTRO (@graph)
  // Incluye: Organización, WebSite, WebPage, Breadcrumb, Fundadores, Servicios, FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://acclarolabs.com/#organization",
        "name": "Acclaro Labs",
        "url": "https://acclarolabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://acclarolabs.com/logo.png",
          "width": "112",
          "height": "112"
        },
        "sameAs": [
          "https://www.linkedin.com/company/acclarolabs",
          "https://twitter.com/acclarolabs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "hello@acclarolabs.com",
          "areaServed": ["MX", "US", "LATAM"],
          "availableLanguage": ["es", "en", "fr"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://acclarolabs.com/#website",
        "url": "https://acclarolabs.com",
        "name": "Acclaro Labs",
        "publisher": { "@id": "https://acclarolabs.com/#organization" },
        "inLanguage": "es-MX"
      },
      {
        "@type": "WebPage",
        "@id": "https://acclarolabs.com/#webpage",
        "url": "https://acclarolabs.com",
        "name": "Acclaro Labs | Ecosistemas Digitales Unificados",
        "isPartOf": { "@id": "https://acclarolabs.com/#website" },
        "about": { "@id": "https://acclarolabs.com/#organization" },
        "description": "Agencia de estrategia digital especializada en integración CRM Salesforce, desarrollo web de alto rendimiento y estrategia de IA.",
        "breadcrumb": { "@id": "https://acclarolabs.com/#breadcrumb" },
        "inLanguage": "es-MX"
      },
      // --- CORRECCIÓN: BreadcrumbList (Faltaba definirlo) ---
      {
        "@type": "BreadcrumbList",
        "@id": "https://acclarolabs.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://acclarolabs.com/"
          }
        ]
      },
      // --- NUEVO: SERVICIO (Para SEO Transaccional) ---
      {
        "@type": "Service",
        "@id": "https://acclarolabs.com/#service-audit",
        "name": "Auditoría Forense de Conversión & UX",
        "provider": { "@id": "https://acclarolabs.com/#organization" },
        "serviceType": ["UX Audit", "CRO", "Technical SEO"],
        "areaServed": ["MX", "US", "LATAM"]
      },
      // --- NUEVO: FUNDADORES (Autoridad / E-E-A-T) ---
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
      // --- NUEVO: FAQ (Para Snippets de IA) ---
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Inyección del Grafo de Entidades Completo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Suspense para evitar bloqueo de hidratación */}
        <Suspense fallback={<div className="h-16" />}>
          <GlobalNav />
        </Suspense>

        <div className="relative pt-16 md:pt-20"></div>
        
        {children}
      </body>
    </html>
  );
}