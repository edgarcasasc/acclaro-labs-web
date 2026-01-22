import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Terminal, Share2, Bookmark } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog"; 
import type { Metadata } from "next";

// IMPORTO EL CSS AQUÍ
import styles from './blog.module.css'; 

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post no encontrado" };
  return {
    title: `${post.title} | Acclaro Labs Engineering Log`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-300 relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Fondos decorativos */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <article className="relative z-10 pt-32 pb-24">
        
        {/* HEADER (Se mantiene igual) */}
        <header className="mx-auto max-w-4xl px-6 md:px-10 mb-16">
          <div className="flex justify-between items-center mb-10">
            <Link href="/blog" className="group inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              <span>cd /var/log/engineering</span>
            </Link>
            <div className="flex gap-4">
              <button className="text-slate-600 hover:text-white transition-colors"><Share2 size={16} /></button>
              <button className="text-slate-600 hover:text-white transition-colors"><Bookmark size={16} /></button>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-3 py-1 rounded border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {post.tag || "ENGINEERING LOG"}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-800">
            <MetaItem label="AUTHOR" value={post.author || "Acclaro Team"} icon={User} />
            <MetaItem label="DATE" value={post.date} icon={Calendar} />
            <MetaItem label="READ TIME" value="5 MIN READ" icon={Clock} />
            <MetaItem label="STATUS" value="PUBLISHED" icon={Terminal} color="text-emerald-500" />
          </div>
        </header>

        {/* --- AQUÍ ESTÁ EL CAMBIO IMPORTANTE --- */}
        <div className="mx-auto max-w-4xl px-8 md:px-12">
          
          {/* Usamos CSS Modules en lugar de clases de Tailwind prose */}
          <div 
            className={styles.content} 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

        </div>

        {/* Footer (Se mantiene igual) */}
        <div className="mx-auto max-w-4xl px-6 md:px-10 mt-32">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-slate-800 via-emerald-900/30 to-slate-800">
            <div className="bg-[#0B0F19] rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <h3 className="text-3xl font-serif text-white mb-4">Ingeniería aplicada a tu negocio</h3>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto font-light text-lg">
                Este tipo de soluciones no se compran en caja. Se diseñan. Hablemos de tu arquitectura.
              </p>
              <Link href="/contacto">
                <button className="group bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3 mx-auto">
                  <Terminal size={18} />
                  <span className="font-mono text-sm tracking-wide">SOLICITAR_DIAGNOSTICO()</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

function MetaItem({ label, value, icon: Icon, color = "text-slate-300" }: any) {
  return (
    <div className="flex flex-col gap-1 border-l border-slate-800 pl-4">
      <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
        <Icon size={10} /> {label}
      </span>
      <span className={`text-xs font-bold font-mono ${color} uppercase truncate`}>
        {value}
      </span>
    </div>
  )
}