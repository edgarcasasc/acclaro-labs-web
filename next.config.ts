import type { NextConfig } from 'next'

const config: NextConfig = {
  // --- 1. SOLUCIÓN CRÍTICA DE AUDITORÍA (Punto 2) ---
  // Fuerza que todas las rutas terminen en barra (ej: /servicios/web-development/)
  // Sin esto, Google ve duplicados: /pagina vs /pagina/
  trailingSlash: true, 

  // --- 2. CONFIGURACIÓN DE IMÁGENES (Tu código) ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Para placeholders
        port: '',
        pathname: '/**', 
      },
      // Recomendación: Agrega tu propio dominio por si subes imágenes al CMS en el futuro
      {
        protocol: 'https',
        hostname: 'acclarolabs.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Opcional: Mejora formatos para Web Vitals
    formats: ['image/avif', 'image/webp'],
  },
}

export default config