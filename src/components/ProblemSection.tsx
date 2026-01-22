// src/components/ProblemSection.tsx
'use client'

import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    heading: "El costo oculto: conversiones perdidas y operación lenta",
    cards: [
      {
        title: "Tus decisiones van a ciegas.",
        desc: "Tienes datos en Excel, CRM, analytics y soporte, pero no están conectados. Sin una vista unificada, priorizas por intuición y pierdes oportunidades reales."
      },
      {
        title: "Tu experiencia digital no responde al contexto.",
        desc: "Tu sitio trata igual a todos porque no “conversa” con tu CRM/ERP y señales de comportamiento. Eso crea fricción, baja la conversión y alarga el ciclo de venta."
      },
      {
        title: "Tu conocimiento ya existe, pero no se usa.",
        desc: "Soporte, FAQs y conversaciones contienen las preguntas que frenan la compra. Si no se analizan y se traducen a UX y contenido, tu equipo termina adivinando."
      }
    ]
  },
  en: {
    heading: "The Hidden Cost: Lost Conversions and Slow Operations",
    cards: [
      {
        title: "Your decisions are flying blind.",
        desc: "You have data in Excel, CRM, analytics, and support, but they aren't connected. Without a unified view, you prioritize by intuition and miss real opportunities."
      },
      {
        title: "Your digital experience ignores context.",
        desc: "Your site treats everyone the same because it doesn't 'talk' to your CRM/ERP or behavior signals. This creates friction, lowers conversion, and lengthens the sales cycle."
      },
      {
        title: "Your knowledge exists, but isn't used.",
        desc: "Support, FAQs, and conversations hold the questions stopping purchases. If not analyzed and translated into UX and content, your team ends up guessing."
      }
    ]
  },
  fr: {
    heading: "Le Coût Caché : Conversions Perdues et Opérations Lentes",
    cards: [
      {
        title: "Vos décisions se prennent à l'aveugle.",
        desc: "Vous avez des données dans Excel, CRM, analytics et support, mais elles ne sont pas connectées. Sans vue unifiée, vous priorisez à l'intuition et manquez des opportunités réelles."
      },
      {
        title: "Votre expérience numérique ignore le contexte.",
        desc: "Votre site traite tout le monde de la même manière car il ne « parle » pas avec votre CRM/ERP. Cela crée des frictions, réduit la conversion et allonge le cycle de vente."
      },
      {
        title: "Votre savoir existe, mais n'est pas utilisé.",
        desc: "Le support, les FAQ et les conversations contiennent les questions qui freinent l'achat. S'ils ne sont pas analysés et traduits en UX et contenu, votre équipe finit par deviner."
      }
    ]
  }
};

// --- Variantes de Animación ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
    } 
  }
};

// --- Componentes de Iconos SVG Personalizados ---
const IconCrmCiego = () => (
  <svg width="28" height="28" viewBox="0 0 39.32 33.57" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g><path d="M34.95.01s.09,0,.14-.01c.24,0,.47.09.64.26.29.28.34.71.06,1.02-.26.3-.55.57-.83.86l-1.57,1.57c-1.5,1.51-3.01,3.09-4.54,4.57.67.33,1.32.7,1.96,1.09,2.74,1.7,5.57,4.05,7.62,6.56.28.35.77.93.88,1.36.06.24-.05.55-.19.75-.58.83-1.36,1.69-2.05,2.42-3.54,3.71-8.36,7.02-13.41,8.17-3.62.82-7.46.43-10.89-.93-.67-.27-1.66-.69-2.27-1.07-.2.18-.46.45-.65.64l-1.16,1.17-4.03,4.07c-.43.46-1.16,1.49-1.84.88-.16-.15-.26-.36-.26-.58-.01-.45.41-.79.71-1.09l1.01-1.04,4.77-4.82c-.67-.44-1.32-.81-2.01-1.28-2.16-1.52-4.12-3.3-5.85-5.3-.43-.51-1.5-1.56-1.1-2.25.43-.75,1.12-1.52,1.71-2.16,3.12-3.41,6.96-6.08,11.25-7.81,4.79-1.88,9.69-1.52,14.36.51l4.75-4.88,1.58-1.61c.29-.3.86-.94,1.21-1.09ZM25.25,11.84c1.5,1.55,2.42,3.51,2.39,5.69-.02,2.07-.86,4.05-2.35,5.49-1.57,1.51-3.69,2.32-5.87,2.25-2.03-.05-3.84-.78-5.34-2.15-.78.8-1.57,1.6-2.36,2.39,1.53.74,3.2,1.36,4.89,1.66.24.04.48.08.73.12,4.26.53,7.76-.31,11.5-2.39,1.36-.76,2.65-1.62,3.88-2.58,1.47-1.13,2.83-2.41,4.05-3.82.26-.3.66-.75.89-1.07-2.02-2.63-4.92-5.07-7.74-6.8-.76-.47-1.46-.82-2.23-1.25-.74.8-1.65,1.7-2.44,2.46ZM1.66,17.41c.42.63,1.04,1.3,1.56,1.87,2.08,2.26,4.38,3.96,7.04,5.48.22-.23.44-.46.67-.68.71-.72,1.43-1.45,2.15-2.16-1.2-1.83-1.65-3.87-1.2-6.03.46-2.11,1.72-3.95,3.53-5.12,2.34-1.51,5.4-1.53,7.86-.29.26.13.52.28.75.45.28-.33.75-.78,1.07-1.1.33-.33.71-.74,1.04-1.05-2.33-.93-4.65-1.41-7.16-1.32-6.02.21-11.82,4.08-15.89,8.31-.43.45-1.08,1.17-1.43,1.66ZM19.02,11.22c-1.8.18-3.12.8-4.29,2.22-1.08,1.32-1.59,3.02-1.42,4.71.09.92.39,1.81.89,2.6.54-.56,1.08-1.11,1.64-1.66.13-.13.26-.26.39-.39-.32-.81-.27-1.84.08-2.64.38-.89,1.1-1.59,2-1.94.76-.29,1.66-.31,2.41,0,.65-.73,1.43-1.41,2.09-2.13-1.04-.54-2-.79-3.17-.78-.16,0-.48,0-.62.01ZM24.11,12.96c-.68.65-1.34,1.36-2.02,2.02.73.76,1.12,1.58,1.1,2.65-.01.95-.41,1.85-1.1,2.5-.68.65-1.6,1-2.55.97-.91-.03-1.8-.44-2.43-1.08-.59.61-1.32,1.36-1.93,1.93.31.28.56.48.91.72,1.49.95,3.29,1.26,5.01.89,1.64-.35,3.07-1.34,3.97-2.75.88-1.39,1.17-3.06.82-4.67-.22-1.01-.67-1.95-1.33-2.74-.07-.09-.34-.4-.45-.44Z"/></g>
  </svg>
);

const IconWebEstatica = () => (
  <svg width="28" height="28" viewBox="0 0 37.37 33.57" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g><g><path d="M37.36,29.25v-2.73s0-8.77,0-8.77V4.59c0-.55.02-1.3-.02-1.84-.13-.9-.62-1.7-1.39-2.2C35.28.07,34.55,0,33.76,0c-.55,0-1.1,0-1.65,0h-4.3s-13.34,0-13.34,0H6.4s-2.26,0-2.26,0c-.47,0-1.12-.02-1.56.05C1.79.19,1.02.7.57,1.35c-.22.32-.46.8-.51,1.19C-.01,2.89,0,3.47,0,3.84v1.69s0,6.77,0,6.77v12.4s0,3.96,0,3.96c0,.61-.03,1.52.01,2.09.03.5.19.98.47,1.4.45.72,1.18,1.21,2.01,1.38,0,0,.01,0,.02,0,.4.06,1.11.04,1.54.04h2.47s8.63,0,8.63,0h13.09s4.16,0,4.16,0c.71,0,1.51.02,2.21-.02.81-.07,1.53-.51,2.04-1.11.83-.97.71-2,.71-3.19ZM1.17,4.38c0-.55-.02-1.14.03-1.68.04-.06.07-.25.11-.34.34-.72.88-1.08,1.65-1.19.84.01,1.71,0,2.56,0h4.92s14.71,0,14.71,0h6.16s1.96,0,1.96,0c.71,0,1.12-.07,1.79.2.52.31.88.65,1.07,1.26.02.06.04.22.07.26.02,1.49,0,2.99,0,4.49,0,.14,0,.26.01.4H1.17c.03-1.12-.01-2.27,0-3.39ZM35.66,31.76c-.45.46-.95.65-1.59.66-.77,0-1.55,0-2.32,0h-4.41s-13.48,0-13.48,0H4.17c-.9,0-1.73.12-2.42-.57-.25-.25-.52-.7-.55-1.07-.05-.71-.02-1.44-.02-2.15v-4.29s0-15.41,0-15.41c.88-.04,2-.01,2.89-.01h5.21s16.26,0,16.26,0h7.78s1.94,0,1.94,0c.21,0,.8-.02.98.02v.03c-.03.13-.02.92-.02,1.09v2.47s0,12.54,0,12.54v3.72c0,.24,0,.48,0,.71,0,.84.1,1.61-.55,2.27Z"/><path d="M19.44,20.81v-5.02s0-1.59,0-1.59c0-.57.08-1.25-.28-1.73-.47-.61-1.08-.52-1.76-.52h-1.4s-4.63,0-4.63,0h-4.5c-.74,0-1.53-.02-2.26.02-.18,0-.45.16-.59.28-.27.23-.44.55-.46.91-.05.66,0,1.87,0,2.57v4.98s0,4.46,0,4.46c0,.63-.03,1.76.02,2.34.17.51.5.9,1.05,1.01.73.06,1.97.01,2.74.01h5.38s3.8,0,3.8,0c.4,0,1.49.03,1.84-.02.63-.16,1.03-.63,1.05-1.29.05-.46.02-1.61.02-2.12v-4.29ZM16.95,27.39h-2.36c-3.09,0-6.18,0-9.26,0-.19,0-.57.03-.59-.23-.03-.41-.02-.83-.02-1.25v-2.32s0-7.77,0-7.77v-1.62c0-.22.02-.61-.02-.82.04-.07.12-.24.2-.25.62-.04,1.51-.02,2.12-.02h8.6c.79,0,1.59,0,2.38,0,.23,0,.27.14.29.34-.02.23,0,.86,0,1.13v2.43s0,7.64,0,7.64c0,.84.04,1.73-.04,2.55-.02.26-1.09.18-1.31.18Z"/><path d="M33.49,18.1c-.09-.06-.18-.09-.3-.09-.45-.01-.9,0-1.35,0h-2.39s-4.17,0-4.17,0c-.84,0-1.73-.03-2.56.04-.23.02-.42.5-.31.75.07.16.17.3.33.36.21.08,9.35.05,10.24.03.13,0,.3,0,.42-.05.12-.06.21-.16.28-.28.05-.08.07-.19.09-.29-.05-.19-.1-.36-.28-.48Z"/><path d="M33.38,13.85c-1.12-.06-2.32-.03-3.44-.03h-4.45c-.81,0-1.61,0-2.42,0-.1,0-.34,0-.42.06-.15.1-.22.21-.26.37-.05.42.12.69.56.74.64.02,1.36,0,2.01,0h3.58s2.99,0,2.99,0c.55,0,1.11,0,1.66-.01.4-.01.52-.26.61-.6-.05-.19-.18-.53-.4-.54Z"/><path d="M32.54,22.26c-.37-.02-.75-.01-1.12-.01h-2.13c-2.13,0-4.32-.02-6.44,0-.73.18-.59,1.14.12,1.14,1.16,0,2.31,0,3.47,0h5.92c.24-.01.36-.01.54-.19.31-.32.07-.92-.36-.94Z"/><path d="M28.54,26.13c-.21-.07-4.93-.06-5.5-.03-.13,0-.29,0-.4.07-.13.08-.22.22-.26.37-.03.13-.02.33.06.44.02.03.02.03.04.05.1.15.15.16.33.23.27.03.76.02,1.04.02h3.59c.28,0,.74.01,1.01-.01.39-.1.5-.41.44-.77-.08-.16-.18-.3-.35-.36Z"/><path d="M12.53,5.95c.69-.08,1.18-.7,1.09-1.39-.08-.69-.71-1.17-1.4-1.08-.68.09-1.15.71-1.07,1.39.09.68.7,1.16,1.38,1.08ZM12.28,4.48c.08-.04.17-.03.24.02.07.05.11.13.1.21s-.06.16-.14.19c-.12.05-.25,0-.31-.12-.05-.12,0-.25.11-.31Z"/><path d="M8.82,5.95c.68-.09,1.16-.71,1.07-1.39-.09-.68-.72-1.16-1.4-1.07-.68.09-1.15.71-1.07,1.39.09.68.71,1.16,1.39,1.07ZM8.56,4.48c.08-.03.17-.02.24.03.07.05.1.14.09.23-.01.09-.07.16-.15.19-.12.04-.26-.02-.3-.14-.05-.12.01-.26.13-.31Z"/><path d="M5.08,5.95c.68-.08,1.16-.71,1.08-1.39-.09-.68-.71-1.16-1.39-1.07-.68.09-1.16.71-1.07,1.39.09.68.71,1.16,1.38,1.07ZM4.84,4.48c.12-.05.25.02.3.14s-.02.25-.14.3c-.12.04-.25-.02-.3-.14-.04-.12.02-.25.14-.3Z"/></g></g>
  </svg>
);

const IconContenidoNoConecta = () => (
  <svg width="28" height="28" viewBox="0 0 44.56 33.57" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g><g><path d="M29.03,13.81C28.64,5.79,21.8-.39,13.78.02,5.78.43-.38,7.24.02,15.24c.4,8,7.2,14.17,15.2,13.79,8.02-.38,14.21-7.2,13.82-15.23ZM20.59,26.5c-.6.31-1.17.59-1.82.79-.46.15-.93.25-1.39.4,1.55-1.54,2.24-3.09,2.95-5.14.19-.54.33-1.21.54-1.73l.02-.05c1.24.25,3.16,1.26,4.27,1.87-.86,1.35-3.14,3.16-4.56,3.86ZM19.97,19.36c-3.81-.85-7.08-.9-10.88-.04-.66-3.77-.76-6.08.03-9.86.78.21,1.82.36,2.62.47,2.87.39,5.45.21,8.29-.37.6,2.66.69,5.41.28,8.11-.07.49-.19,1.22-.35,1.69ZM26.5,8.54c1.44,2.97,1.77,6.36.93,9.55-.3,1.19-.91,2.64-1.59,3.66-1.34-.88-3.21-1.67-4.76-2.07.72-3.91.87-6.44.03-10.39l.39-.1c.15-.03.33-.09.48-.13,1.25-.37,2.76-.99,3.83-1.73.23.39.49.81.68,1.22ZM19.03,1.89c2.42.91,4.54,2.48,6.12,4.53-.36.23-.74.45-1.12.64-.95.5-2.07.84-3.09,1.16-.57-2.05-1.16-3.84-2.43-5.6-.25-.34-.7-.92-1.03-1.19.47.05,1.11.28,1.56.45ZM14.12,1.18c3.25-.21,5.01,4.77,5.7,7.27-1.41.38-3.19.5-4.64.56-2.09.06-3.77-.17-5.8-.6.14-.44.23-.93.37-1.38.68-2.19,1.91-5.25,4.37-5.85ZM11.3,1.46h0s0,.04,0,.05c-1.12,1.23-2.14,3.38-2.58,4.88-.31,1.04-.31,1.17-.49,1.75-1.03-.27-2.03-.65-2.97-1.14-.48-.23-.8-.45-1.25-.73,1.76-2.21,4.45-4.3,7.27-4.81ZM2.78,20.86C.31,16.33.63,11.45,3.36,7.15c.06.03.28.19.36.24.28.18.57.34.86.5,1.15.65,2.22.97,3.48,1.32-.16.8-.34,1.71-.43,2.52-.28,2.52-.17,5.45.44,7.92-1.13.37-1.65.56-2.75,1.08-.71.38-1.27.68-1.92,1.16-.25-.31-.44-.68-.63-1.02ZM8.38,26.45c-1.44-.78-3.45-2.33-4.36-3.7,1.67-1.01,2.38-1.34,4.2-2.01.13.02.26.8.32,1,.54,1.93,1.51,4.42,2.91,5.86-.89-.15-2.29-.73-3.08-1.14ZM13.12,27.39c-2.31-1.35-3.07-4.65-3.78-6.96,1.35-.38,2.33-.48,3.72-.6.2-.04.89-.02,1.14-.02,1.94-.03,3.66.21,5.55.63-.11.36-.2.72-.3,1.08-.6,2.12-1.71,4.79-3.69,5.91-.19.07-.37.14-.57.19-.69.21-1.45.12-2.07-.24Z"/><path d="M42.74,28.72h-2.21c-1.89,0-4.04-.05-5.91,0-.31.08-.53.22-.69.5-.3.53-.11,2.48-.14,3.21-1.4-.03-2.85-.01-4.25-.01h-7.18s-4.89,0-4.89,0c-.81,0-1.61,0-2.42,0-.29,0-.52.29-.51.58,0,.16.08.31.21.41.25.21,1.18.14,1.54.14h1.96s6.16,0,6.16,0h6.73s1.87,0,1.87,0c1.86,0,1.99-.01,1.95-1.94-.01-.47-.03-1.21,0-1.66,2.64-.04,5.28.01,7.92,0,.55,0,1.74.19,1.68-.66-.06-.77-1.28-.57-1.82-.57Z"/><path d="M32.1,17.26c-.54.55.36,1.32.78.9,1.67-1.65,3.41-3.35,5.04-5.03,1.08,1.1,2.16,2.19,3.26,3.27.54.53,1.08,1.08,1.63,1.61.12.1.28.25.44.26.52.04.63-.34.65-.76-.23-.41-1.98-2.07-2.43-2.5-.92-.9-1.84-1.8-2.75-2.71.53-.44,1.42-1.39,1.93-1.9l3.2-3.2c.05-.27.06-.48-.16-.69-.51-.47-1.02.24-1.31.54l-1.09,1.08-3.34,3.36c-.92-.96-1.89-1.86-2.83-2.8-.52-.52-1.04-1.04-1.56-1.55-.3-.29-.98-1.13-1.43-.64-.2.22-.19.44-.17.72.38.46,1.31,1.33,1.79,1.81.49.49,1.31,1.37,1.79,1.78.13.14.23.26.37.39.38.38.76.76,1.14,1.13-1.54,1.7-3.34,3.29-4.95,4.93Z"/></g></g>
  </svg>
);


// --- Componente de Tarjeta 3D Interactivo + Glow ---
interface CardProps {
  icon: React.ReactNode; 
  title: string;
  children: React.ReactNode;
}

const ProblemCard = ({ icon, title, children }: CardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [8, -8]); 
  const rotateY = useTransform(x, [-30, 30], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(168, 26, 26, 0.15),
    transparent 80%
  )`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = event.clientX - rect.left - rect.width / 2;
    const centerY = event.clientY - rect.top - rect.height / 2;
    x.set(centerX / 10);
    y.set(centerY / 10);
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col rounded-lg border border-rojo-lacre/30 bg-zinc-900/95 p-6 backdrop-blur-sm overflow-hidden"
      style={{
        transformStyle: 'preserve-3d', 
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      whileHover={{ y: -5, scale: 1.03 }} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 bg-tech-grid opacity-30" 
        style={{ backgroundSize: '30px 30px' }}
      />

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: background }}
      />
      
      <div className="relative z-10 flex flex-col" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rojo-lacre shadow-glow-red-sm animate-pulse">
          <div className="text-blanco-pergamino">
            {icon} 
          </div>
        </div>
        <h3 className="mt-4 mb-2 text-xl font-serif font-bold text-blanco-pergamino">
          {title}
        </h3>
        <p className="text-blanco-pergamino/70">
          {children}
        </p>
      </div>
    </motion.div>
  );
};

// --- INTERFAZ DE PROPS (Agregada para solucionar el error de compilación) ---
interface ProblemSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

// --- Componente Principal ---
export default function ProblemSection({ lang = 'es' }: ProblemSectionProps) {
  const t = CONTENT[lang];
  
  const icons = [
    <IconCrmCiego key="1"/>, 
    <IconWebEstatica key="2"/>, 
    <IconContenidoNoConecta key="3"/>
  ];

  return (
    <section className="relative z-10 w-full bg-gris-piedra py-24 md:py-32 perspective-[1200px]">
      <div className="container mx-auto max-w-5xl px-4">
        
        <motion.h2 
          className="mb-16 text-center text-3xl md:text-4xl font-serif font-bold text-blanco-pergamino"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.cards.map((card, index) => (
            <ProblemCard 
              key={index}
              icon={icons[index]} 
              title={card.title}
            >
              {card.desc}
            </ProblemCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}