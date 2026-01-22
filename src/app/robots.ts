// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // No rastrear tus endpoints de API
        '/_next/',     // No rastrear archivos internos de Next.js
        '/static/',    // Si tienes estáticos privados
        '/*.json$',    // Evitar rastrear archivos de configuración expuestos
      ],
    },
    sitemap: 'https://acclarolabs.com/sitemap.xml',
  };
}