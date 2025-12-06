// src/app/layout.tsx

import type { Metadata } from "next";
// --- 1. IMPORTAR LAS FUENTES DE NUESTRA MARCA ---
import { Inter, Playfair_Display } from 'next/font/google';
import { GlobalNav } from '@/components/GlobalNav';
import "./globals.css"; // <-- Importa el globals.css

// --- 2. CONFIGURAR LAS FUENTES ---
const inter = Inter({
subsets: ['latin'],
variable: '--font-inter', // <-- Esta es la variable para 'font-sans'
});
const playfair = Playfair_Display({
subsets: ['latin'],
variable: '--font-playfair', // <-- Esta es la variable para 'font-serif'
weight: ['700', '900'],
});

export const metadata: Metadata = {
title: "Acclaro Labs | From Chaos to Clarity",
description: "We build unified digital ecosystems. We bridge Salesforce, Web/App Development, and AI-driven Content Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // CORRECCIÓN: Añadimos 'suppressHydrationWarning' aquí
    <html lang="en" suppressHydrationWarning>
{/* Añadimos las variables de fuente al <html>
NO AÑADIMOS CLASES DE COLOR AQUÍ. globals.css lo manejará.
*/}
<body className={`${inter.variable} ${playfair.variable} antialiased`}>
    {/* El HUD Flotante vivirá aquí, por encima de todo */}
        <GlobalNav />

        {/* El 'children' es tu 'page.tsx' (Capa 2) y 'DigitalUniverse' (Capa 1).
          El 'padding-top' es crucial para que el Héroe de cada página
          no quede oculto DEBAJO de la barra de navegación fija.
        */}
        <div className="relative pt-16 md:pt-20"></div>
{children}
</body>
</html>
);
}