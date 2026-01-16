import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image?: string;
  language?: string;
};

export async function getAllPosts(lang: 'es' | 'en' | 'fr' = 'es') {
  if (!fs.existsSync(contentDirectory)) return [];

  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .map((fileName) => {
      // Solo archivos .mdx
      if (!fileName.endsWith('.mdx')) return null;

      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // El slug es simplemente el nombre del archivo sin extensión
      const slug = fileName.replace(/\.mdx$/, '');

      return {
        slug,
        ...data,
      } as PostMeta;
    })
    .filter((post): post is PostMeta => post !== null)
    // FILTRO CRÍTICO: Solo devolvemos los posts que coinciden con el idioma pedido
    // Esto asegura que en /en/blog solo salgan los archivos con language: 'en'
    .filter((post) => post.language === lang);

  return posts.sort((a, b) => (new Date(b.date).getTime() > new Date(a.date).getTime() ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  // Búsqueda directa: El archivo TIENE que llamarse como el slug
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data as PostMeta,
    content,
  };
}