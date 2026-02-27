'use client'

import Image from "next/image";
import Marquee from "react-fast-marquee";

// --- 1. DICCIONARIO DE CONTENIDO (Actualizado a versión Premium) ---
const CONTENT = {
  es: {
    title: "Experiencia forjada en grandes ligas",
    desc: "A lo largo de nuestras carreras, los socios fundadores han liderado iniciativas de estrategia, UX y desarrollo en organizaciones globales y entornos de alta exigencia.",
    row1Label: "Plataformas, certificaciones y formación",
    row2Label: "Marcas y organizaciones",
    disclaimer: "* Los logos reflejan experiencia profesional individual de los socios fundadores y/o colaboraciones previas. No implican relación comercial vigente, afiliación oficial ni aval directo."
  },
  en: {
    title: "Experience forged in the big leagues",
    desc: "Throughout our careers, the founding partners have led strategy, UX, and development initiatives in global organizations and high-demand environments.",
    row1Label: "Platforms, Certifications & Training",
    row2Label: "Brands & Organizations",
    disclaimer: "* Logos reflect individual professional experience of founding partners and/or previous collaborations. They do not imply current commercial relationship, official affiliation, or direct endorsement."
  },
  fr: {
    title: "Une expérience forgée au plus haut niveau",
    desc: "Tout au long de leur carrière, les associés fondateurs ont dirigé des initiatives de stratégie, d'UX et de développement dans des organisations mondiales et des environnements à haute exigence.",
    row1Label: "Plateformes, Certifications et Formation",
    row2Label: "Marques et Organisations",
    disclaimer: "* Les logos reflètent l'expérience professionnelle individuelle des fondateurs et/ou des collaborations antérieures. Ils n'impliquent aucune relation commerciale actuelle, affiliation officielle ou approbation directe."
  }
};

interface SocialProofProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function SocialProof({ lang = 'es' }: SocialProofProps) {
  const t = CONTENT[lang];

  // Clases para logos:
  // brightness-0 invert -> Convierte el logo a blanco puro (silueta)
  // hover:brightness-100 hover:invert-0 -> Restaura el color original al pasar el mouse
  const logoClasses = "h-12 w-auto mx-12 brightness-0 invert opacity-60 grayscale transition-all duration-500 ease-out hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 cursor-pointer object-contain";

  // Clases específicas para fila 1 (Tecnología/MIT) - A veces requieren tamaños visuales distintos
  const techLogoClasses = "h-10 w-auto mx-12 brightness-0 invert opacity-50 grayscale transition-all duration-500 ease-out hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 cursor-pointer object-contain";

  return (
    <section className="relative z-10 w-full py-24 border-y border-white/5 bg-slate-900/30 backdrop-blur-xl overflow-hidden relative">

      {/* Luz ambiental sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-azul-zafiro/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Header de Sección */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6 tracking-tight drop-shadow-md">
            {t.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* --- FILA 1: Plataformas (Izquierda a Derecha) --- */}
        <div className="mb-12">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-6">
            {t.row1Label}
          </p>

          {/* Contenedor con máscara de desvanecimiento en bordes */}
          <div
            className="w-full relative flex overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <Marquee speed={30} gradient={false} autoFill={true} pauseOnHover={true}>
              {/* Ajusta los nombres de archivo a los que tengas en public/logos */}
              <Image src="/logos/salesforce.svg" alt="Salesforce" width={100} height={50} className={techLogoClasses} />
              <Image src="/logos/mit.svg" alt="MIT" width={80} height={50} className={techLogoClasses} />
              <Image src="/logos/aws.svg" alt="AWS" width={80} height={50} className={techLogoClasses} />
              <Image src="/logos/google.svg" alt="Google" width={90} height={50} className={techLogoClasses} />
              {/* Repetir o agregar más si es necesario para dar variedad */}
              <Image src="/logos/hubspot.svg" alt="HubSpot" width={100} height={50} className={techLogoClasses} />
            </Marquee>
          </div>
        </div>

        {/* --- FILA 2: Marcas (Derecha a Izquierda) --- */}
        <div className="mb-10">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-6">
            {t.row2Label}
          </p>

          <div
            className="w-full relative flex overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <Marquee speed={35} gradient={false} direction="right" autoFill={true} pauseOnHover={true}>
              {/* Ajusta los nombres de archivo */}
              <Image src="/logos/chevrolet.svg" alt="Chevrolet" width={120} height={60} className={logoClasses} />
              <Image src="/logos/agora.svg" alt="Agora" width={100} height={60} className={logoClasses} />
              <Image src="/logos/vidusa.svg" alt="Vidusa" width={110} height={60} className={logoClasses} />
              <Image src="/logos/nissan.svg" alt="Nissan" width={90} height={60} className={logoClasses} />
              <Image src="/logos/itesm.svg" alt="Tec de Monterrey" width={110} height={60} className={logoClasses} />
              <Image src="/logos/metalsa.svg" alt="Metalsa" width={120} height={60} className={logoClasses} />
            </Marquee>
          </div>
        </div>

        {/* Disclaimer Legal */}
        <div className="mt-12 pt-6 border-t border-white/5 max-w-2xl mx-auto">
          <p className="text-[9px] text-slate-700 uppercase tracking-wide leading-relaxed">
            {t.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}