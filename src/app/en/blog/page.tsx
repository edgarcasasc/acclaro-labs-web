import React from 'react';
import BlogIndex from '@/components/blog/BlogIndex'; // El componente maestro
import Footer from '@/components/Footer';

export default function EnBlogPage() {
  return (
    <>
      {/* Usamos el componente BlogIndex reutilizable.
        Al pasar lang="en":
        1. Carga los textos en inglés (Engineering Log, Read Case, etc.)
        2. Muestra los posts definidos en el diccionario EN.
        3. Mantiene el diseño "System Logs" y los filtros.
      */}
      <BlogIndex lang="en" />

      {/* Footer en Inglés */}
      <Footer lang="en" />
    </>
  );
}