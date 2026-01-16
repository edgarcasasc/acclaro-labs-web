import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-blue-100 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-l-4 border-blue-500 pl-4" {...props} />,
  p: (props: any) => <p className="text-slate-300 leading-relaxed mb-6 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  strong: (props: any) => <strong className="text-blue-400 font-bold" {...props} />,
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | Acclaro Labs`,
    description: post.meta.excerpt,
    // Aquí podríamos agregar OpenGraph Images dinámicas en el futuro
  };
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // --- ESTRATEGIA SEO 2026: DATOS ESTRUCTURADOS (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta.title,
    "description": post.meta.excerpt,
    "datePublished": post.meta.date,
    "dateModified": post.meta.date, // Idealmente tendrías un campo 'updatedAt'
    "author": [{
      "@type": "Person",
      "name": post.meta.author,
      "url": "https://acclarolabs.com/equipo" // O tu LinkedIn
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Acclaro Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acclarolabs.com/logo.png" // Asegúrate de tener un logo accesible
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://acclarolabs.com/blog/${post.slug}`
    }
  };

  return (
    <article>
      {/* INYECCIÓN DE SCHEMA (Invisible para el usuario, Oro para Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-10 border-b border-slate-700 pb-8">
        <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300 mb-4 inline-block transition-colors">
          ← Volver a la Bitácora
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.meta.title}
        </h1>
{post.meta.image && (
<div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl group">        <img 
          src={post.meta.image} 
          alt={post.meta.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Gradiente cinemático para que el texto resalte si decides poner algo encima */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>
    )}
        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm font-medium">
          <div className="bg-blue-900/30 px-3 py-1 rounded-full text-blue-200 border border-blue-500/30">
            {post.meta.author}
          </div>
          <span>•</span>
          <time className="text-slate-300">{post.meta.date}</time>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>

      <div className="mt-16 pt-10 border-t border-slate-700">
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
          <h3 className="text-xl font-bold text-white mb-2">¿Te gustó este análisis?</h3>
          <p className="text-slate-400 mb-6">Convierte tus datos en activos reales.</p>
          <Link 
            href="/#audit-form" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Auditar mi Sitio Gratis
          </Link>
        </div>
      </div>
    </article>
  );
}