import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { GlobalNav } from '@/components/GlobalNav';
import DigitalUniverse from '@/components/DigitalUniverse';

export default async function BlogIndexFr() {
  // CLAVE: Pedimos posts en Francés ('fr')
  const posts = await getAllPosts('fr');

  return (
    <div className="relative min-h-screen text-slate-100 font-sans">
      <GlobalNav lang="fr" /> {/* Menú en Francés */}
      
      <div className="fixed inset-0 z-[-10]">
         <DigitalUniverse />
      </div>

      <main className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900/85 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 md:p-12">
          
          <section>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
                Journal d&apos;Ingénierie
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Explorer l&apos;intersection entre l&apos;IA, les Données et le Business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/fr/blog/${post.slug}`}
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
                      Lire l&apos;article →
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}