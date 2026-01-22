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

// 2. HEAD DEFINITIVO: METADATOS Y HREFLANG
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"),
  
  title: {
    default: "Acclaro Labs | From Chaos to Clarity",
    template: "%s | Acclaro Labs"
  },
  description: "We build unified digital ecosystems. We bridge Salesforce, Web/App Development, and AI-driven Content Strategy.",
  
  // SEÑALIZACIÓN HREFLANG COMPLETA (Indispensable para SEO Internacional)
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
      'x-default': '/', // Señal para mercados no especificados
    },
  },

  // OPENGRAPH OPTIMIZADO (Identidad Social)
  openGraph: {
    title: "Acclaro Labs | From Chaos to Clarity",
    description: "Ecosistemas digitales unificados para empresas que buscan escalar.",
    url: "https://acclarolabs.com",
    siteName: "Acclaro Labs",
    locale: "es_MX",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [{
      url: '/og-image-es.png',
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
    title: "Acclaro Labs | From Chaos to Clarity",
    description: "Unified digital ecosystems bridging CRM, Web Dev, and AI Strategy.",
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
  
  // 3. GRAFO DE ENTIDAD (@graph): Conexión de datos para la IA
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
      }
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Inyección del Grafo de Entidades */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 4. PREVENCIÓN DE BAILOUT: Suspense para hidratación limpia */}
        <Suspense fallback={<div className="h-16" />}>
          <GlobalNav />
        </Suspense>

        <div className="relative pt-16 md:pt-20"></div>
        
        {children}
      </body>
    </html>
  );
}