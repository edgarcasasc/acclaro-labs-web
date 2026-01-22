import React from 'react';
import BlogIndex from '@/components/blog/BlogIndex'; // El componente maestro con diseño Elite
import Footer from '@/components/Footer';

export default function FrBlogPage() {
  return (
    <>
      {/* Usamos el componente reutilizable pasando lang="fr".
        Esto carga automáticamente:
        1. Títulos en francés: "Journal d'Ingénierie", "Logs Système".
        2. Los posts traducidos del diccionario.
        3. El diseño correcto con filtros y animaciones.
      */}
      <BlogIndex lang="fr" />

      {/* Footer en Francés */}
      <Footer lang="fr" />
    </>
  );
}