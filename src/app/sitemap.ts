// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acclarolabs.com';

  // Definimos las rutas principales
  const routes = [
    '',
    '/servicios/consultoria-crm',
    '/servicios/desarrollo-web',
    '/servicios/estrategia-contenido',
    '/servicios/informes-ia',
    '/blog',
    '/contacto',
  ];

  const languages = ['en', 'fr'];

  // 1. Generamos las rutas en español (raíz)
  const esRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Generamos las rutas para inglés y francés
  const multiRoutes = languages.flatMap((lang) =>
    routes.map((route) => {
      // Ajuste de nombres de rutas para idiomas (si cambian en el futuro)
      const langRoute = route === '' ? `/${lang}` : `/${lang}${route}`;
      return {
        url: `${baseUrl}${langRoute}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 0.9 : 0.7,
      };
    })
  );

  return [...esRoutes, ...multiRoutes];
}