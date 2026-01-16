// src/app/en/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { GlobalNav } from '@/components/GlobalNav';
import DigitalUniverse from '@/components/DigitalUniverse';

// Estilos para el contenido Markdown (Tailwind)
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold text-blue-100 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-l-4 border-blue-500 pl-4" {...props} />,
  p: (props: any) => <p className="text-slate-300 leading-relaxed mb-6 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  strong: (props: any) => <strong className="text-blue-400 font-bold" {...props} />,
};

// Generar rutas estáticas para inglés
export async function generateStaticParams() {
  const posts = await getAllPosts('en');
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
  };
}

export default async function BlogPostEn(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Schema SEO en Inglés
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta.title,
    "description": post.meta.excerpt,
    "datePublished": post.meta.date,
    "inLanguage": "en-US", // Importante para SEO internacional
    "author": [{
      "@type": "Person",
      "name": post.meta.author,
      "url": "https://acclarolabs.com/en/team"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Acclaro Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acclarolabs.com/logo.png"
      }
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans">
      {/* Navegación en Inglés */}
      <GlobalNav /> 
      
      <div className="fixed inset-0 z-[-10]">
         <DigitalUniverse />
      </div>

      <main className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 md:p-12">
          
          <article>
            {/* Schema Injection */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="mb-10 border-b border-slate-700 pb-8">
              <Link href="/en/blog" className="text-sm text-blue-400 hover:text-blue-300 mb-4 inline-block transition-colors">
                ← Back to Engineering Log
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
                <h3 className="text-xl font-bold text-white mb-2">Need Clarity in your Data?</h3>
                <p className="text-slate-400 mb-6">Stop guessing. Start auditing.</p>
                <Link 
                  href="/en/services/content-strategy#audit" 
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
}