import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx'; // Importamos tu motor

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          Bitácora de Ingeniería
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Explorando la intersección entre Inteligencia Artificial, Datos y Negocios.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group block p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all hover:border-blue-500/50"
          >
            <article>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-3">
                {post.title}
              </h2>
              
              <p className="text-slate-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-4 text-blue-400 text-sm font-medium group-hover:underline">
                Leer artículo →
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}