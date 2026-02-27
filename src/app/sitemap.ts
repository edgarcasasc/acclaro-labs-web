import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acclarolabs.com';

  // DICCIONARIO DE RUTAS: Mapeamos manualmente las traducciones reales de tus carpetas
  // Esto asegura que /servicios/consultoria-crm se enlace con /en/services/crm-consulting
  const routeMap = [
    {
      es: '',
      en: '/en',
      fr: '/fr',
      priority: 1.0
    },
    {
      es: '/contacto',
      en: '/en/contact',
      fr: '/fr/contact',
      priority: 0.8
    },
    {
      es: '/blog',
      en: '/en/blog',
      fr: '/fr/blog',
      priority: 0.7
    },
    // SERVICIOS (Aquí corregimos el error de traducción de URLs)
    {
      es: '/servicios/consultoria-crm',
      en: '/en/services/crm-consulting',
      fr: '/fr/services/conseil-crm',
      priority: 0.9
    },
    {
      es: '/servicios/desarrollo-web',
      en: '/en/services/web-development',
      fr: '/fr/services/developpement-web',
      priority: 0.9
    },
    {
      es: '/servicios/estrategia-contenido',
      en: '/en/services/content-strategy',
      fr: '/fr/services/strategie-contenu',
      priority: 0.8
    },
    {
      es: '/servicios/informes-ia',
      en: '/en/services/bi-ai-reporting',
      fr: '/fr/services/rapports-bi-ia',
      priority: 0.8
    }
  ];

  // Helper: Asegurarnos de que toda URL (que no sea la raíz pura) termine con trailing slash "/"
  const formatUrl = (path: string) => {
    if (!path) return `${baseUrl}/`;
    return `${baseUrl}${path}/`;
  };

  // Generamos el array plano que pide Next.js
  const sitemapEntries: MetadataRoute.Sitemap = routeMap.flatMap((route) => {
    const lastModified = new Date();
    // Preferimos 'monthly' o 'weekly' adaptado a lo que suele pedir la web estática
    const changeFrequency = 'weekly' as const;

    return [
      // Versión Español
      {
        url: formatUrl(route.es),
        lastModified,
        changeFrequency,
        priority: route.priority,
      },
      // Versión Inglés
      {
        url: formatUrl(route.en),
        lastModified,
        changeFrequency,
        priority: route.priority - 0.1, // Ligera prioridad menor a traducciones
      },
      // Versión Francés
      {
        url: formatUrl(route.fr),
        lastModified,
        changeFrequency,
        priority: route.priority - 0.1,
      },
    ];
  });

  return sitemapEntries;
}