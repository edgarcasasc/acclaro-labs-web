// src/components/SocialProof.tsx
'use client'

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SocialProof() {
  
  // Definimos las clases en una constante para asegurar consistencia en todos los logos
  // ESTADO NORMAL: Silueta Blanca (brightness-0 + invert) con opacidad media
  // ESTADO HOVER: Color Original (brightness-100 + invert-0) con opacidad total
  const logoClasses = "h-12 w-auto mx-12 brightness-0 invert opacity-70 transition-all duration-300 ease-in-out hover:brightness-100 hover:invert-0 hover:opacity-100";
  
  // Para los logos de Partners (pueden ser un poco más pequeños)
  const partnerLogoClasses = "h-10 w-auto mx-12 brightness-0 invert opacity-60 transition-all duration-300 ease-in-out hover:brightness-100 hover:invert-0 hover:opacity-100";

  return (
    <section className="relative z-10 w-full py-16 border-b border-white/5 bg-black/20">
      <div className="container mx-auto px-6 text-center">
        
        <p className="text-sm font-bold tracking-[0.2em] text-oro-antiguo uppercase mb-4">
          Experiencia forjada en grandes ligas
        </p>
        
        <h3 className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          A lo largo de nuestras carreras, nuestros fundadores han tenido el privilegio de liderar estrategias y desarrollos para marcas globales.
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
            
            {/* CORRECCIÓN APLICADA: Usamos 'logoClasses' que tiene el fix de contraste */}
            <Image src="/logos/chevrolet.svg" alt="Chevrolet" width={130} height={50} className={logoClasses} />
            <Image src="/logos/agora.svg" alt="Agora" width={130} height={50} className={logoClasses} />
            <Image src="/logos/vidusa.svg" alt="Vidusa" width={130} height={50} className={logoClasses} />
            <Image src="/logos/nissan.svg" alt="Nissan" width={130} height={50} className={logoClasses} />
            <Image src="/logos/itesm.svg" alt="ITESM" width={130} height={50} className={logoClasses} />
            <Image src="/logos/metalsa.svg" alt="Metalsa" width={130} height={50} className={logoClasses} />

          </Marquee>
        </div>

        {/* Disclaimer Legal */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            * Logos representan la experiencia profesional individual de los socios fundadores y/o colaboraciones estratégicas previas.
          </p>
        </div>

      </div>
    </section>
  );
}