// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // No rastrear endpoints de API
        '/_next/',     // No rastrear archivos internos de Next.js
        '/static/',    // Assets privados
        '/*.json$',    // Archivos de configuración
        '/dashboard/', // <--- BLOQUEO TOTAL al panel de control
        '/admin/',     // Bloqueo a futura zona administrativa
      ],
    },
    sitemap: 'https://acclarolabs.com/sitemap.xml',
  };
}