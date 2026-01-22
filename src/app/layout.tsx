import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import "./globals.css";

// 1. CONFIGURACIÓN DE FUENTES
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
});

// 2. METADATOS TÉCNICOS (SEO Internacional + Autoridad)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"),
  
  title: {
    default: "Acclaro Labs | From Chaos to Clarity",
    template: "%s | Acclaro Labs" // Permite que subpáginas añadan su título automáticamente
  },
  description: "We build unified digital ecosystems. We bridge Salesforce, Web/App Development, and AI-driven Content Strategy.",
  
  // SEÑALIZACIÓN HREFLANG (Evita la canibalización entre ES, EN y FR)
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
  
  // Configuración para buscadores
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
  // SCHEMA.ORG (JSON-LD): Tu "DNI" para Google y motores de IA
  const jsonLd = {
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
    ]
  };

  return (
    // CAMBIO CRÍTICO: Si tu Home principal es español, usamos "es" aquí.
    // Next.js gestionará los subdirectorios /en y /fr automáticamente.
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Inyección de Datos Estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GlobalNav />

        {/* Espaciado para evitar solapamiento con nav fija */}
        <div className="relative pt-16 md:pt-20"></div>
        
        {children}
      </body>
    </html>
  );
}