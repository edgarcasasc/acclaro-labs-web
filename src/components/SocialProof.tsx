// src/components/SocialProof.tsx
'use client'

import Image from "next/image";
import Marquee from "react-fast-marquee";

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Experiencia forjada en grandes ligas",
    desc: "A lo largo de nuestras carreras, nuestros fundadores han tenido el privilegio de liderar estrategias y desarrollos para marcas globales.",
    disclaimer: "* Logos representan la experiencia profesional individual de los socios fundadores y/o colaboraciones estratégicas previas."
  },
  en: {
    title: "Experience forged in the big leagues",
    desc: "Throughout our careers, our founders have had the privilege of leading strategies and developments for global brands.",
    disclaimer: "* Logos represent the individual professional experience of the founding partners and/or previous strategic collaborations."
  },
  fr: {
    title: "Une expérience forgée au plus haut niveau",
    desc: "Tout au long de leur carrière, nos fondateurs ont eu le privilège de diriger des stratégies et des développements pour des marques mondiales.",
    disclaimer: "* Les logos représentent l'expérience professionnelle individuelle des associés fondateurs et/ou des collaborations stratégiques antérieures."
  }
};

interface SocialProofProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function SocialProof({ lang = 'es' }: SocialProofProps) {
  
  // Seleccionamos el texto según el idioma
  const t = CONTENT[lang];

  // Definimos las clases para asegurar consistencia y VISIBILIDAD en fondo oscuro
  const logoClasses = "h-12 w-auto mx-12 brightness-0 invert opacity-70 transition-all duration-300 ease-in-out hover:brightness-100 hover:invert-0 hover:opacity-100";
  const partnerLogoClasses = "h-10 w-auto mx-12 brightness-0 invert opacity-60 transition-all duration-300 ease-in-out hover:brightness-100 hover:invert-0 hover:opacity-100";

  return (
    <section className="relative z-10 w-full py-16 border-b border-white/5 bg-black/20">
      <div className="container mx-auto px-6 text-center">
        
        <p className="text-sm font-bold tracking-[0.2em] text-oro-antiguo uppercase mb-4">
          {t.title}
        </p>
        
        <h3 className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.desc}
        </h3>

        {/* --- Marquee de Autoridad (Partners) --- */}
        <div 
          className="w-full max-w-6xl mx-auto overflow-hidden" 
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
        >
          <Marquee speed={30} gradient={false} autoFill={true}>
            <Image src="/logos/salesforce.svg" alt="Salesforce" width={150} height={50} className={partnerLogoClasses} />
            <Image src="/logos/mit.svg" alt="MIT" width={150} height={50} className={partnerLogoClasses} />
            <Image src="/logos/aws.svg" alt="AWS" width={150} height={50} className={partnerLogoClasses} />
            <Image src="/logos/google.svg" alt="Google" width={150} height={50} className={partnerLogoClasses} />
          </Marquee>
        </div>

        {/* --- Marquee de Clientes (Trayectoria) --- */}
        <div 
          className="w-full max-w-6xl mx-auto overflow-hidden mt-8" 
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
        >
          <Marquee speed={40} gradient={false} direction="right" autoFill={true}>
            <Image src="/logos/chevrolet.svg" alt="Chevrolet" width={130} height={50} className={logoClasses} />
            <Image src="/logos/agora.svg" alt="Agora" width={130} height={50} className={logoClasses} />
            <Image src="/logos/vidusa.svg" alt="Vidusa" width={130} height={50} className={logoClasses} />
            <Image src="/logos/nissan.svg" alt="Nissan" width={130} height={50} className={logoClasses} />
            <Image src="/logos/itesm.svg" alt="ITESM" width={130} height={50} className={logoClasses} />
            <Image src="/logos/metalsa.svg" alt="Metalsa" width={130} height={50} className={logoClasses} />
          </Marquee>
        </div>

        {/* Disclaimer Legal Traducido */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            {t.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}