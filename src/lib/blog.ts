import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm'; // <--- IMPORTANTE

// Directorios posibles
const contentRoot = path.join(process.cwd(), 'content/blog');
const contentSrc = path.join(process.cwd(), 'src/content/blog');
const postsDirectory = fs.existsSync(contentRoot) ? contentRoot : contentSrc;

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tag?: string;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // --- PROCESAMIENTO DE MARKDOWN ---
    const processedContent = await remark()
      .use(remarkGfm) // <--- ESTO ACTIVA LAS TABLAS
      .use(html)
      .process(content);
      
    const contentHtml = processedContent.toString();

    return {
      slug: realSlug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      tag: data.tag,
      content: contentHtml,
    };
  } catch (error) {
    console.error("Error procesando post:", error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const filePath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: name.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tag: data.tag,
        content: '',
      };
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return posts;
}