// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import SchemaOrg from '@/components/SchemaOrg'; // <-- Importaremos este nuevo componente
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['700', '900'] 
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://acclarolabs.com"),
  // Estos son los fallbacks. Cada página los sobreescribirá.
  title: {
    default: "Acclaro Labs | From Chaos to Clarity",
    template: "%s | Acclaro Labs"
  },
  description: "Unified digital ecosystems bridging CRM, Web Dev, and AI Strategy.",
  // 3. SEÑALIZACIÓN HREFLANG GLOBAL
  alternates: {
    canonical: "/",
    languages: {
      'es-MX': '/es',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // CAMBIO: Si tu Home principal es español, pon "es". 
    // Si usas rutas dinámicas [lang], esto se vuelve una variable.
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SchemaOrg /> {/* <-- Datos estructurados para Google/Gemini */}
        <GlobalNav />
        <div className="relative pt-16 md:pt-20"></div>
        {children}
      </body>
    </html>
  );
}