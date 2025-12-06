import type { NextConfig } from 'next'

const config: NextConfig = {
  // --- AÑADIMOS ESTE BLOQUE 'images' ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // <-- Aquí autorizamos el dominio
        port: '',
        pathname: '/**', // Permitimos cualquier ruta dentro de ese dominio
      },
    ],
  },
}

export default config