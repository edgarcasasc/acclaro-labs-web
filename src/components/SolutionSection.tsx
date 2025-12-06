// src/components/SolutionSection.tsx
'use client'

import { motion } from 'framer-motion';
import BlueprintSvg from './BlueprintSvg'; 
import BlueprintSvgVertical from './BlueprintSvgVertical'; // <-- 1. Importa el vertical

// Variantes de animación para la sección completa
const sectionVariants = {
hidden: { opacity: 0, y: 30 },
visible: {
 opacity: 1,
 y: 0,
 transition: {
duration: 0.8,
 },
},
};

export default function SolutionSection() {
return (
 <section 
 id="solution" 
    /* * CAMBIO DE PADDING: 
     * py-16 (móvil) y md:py-32 (desktop)
     */
    className="relative z-10 w-full py-8 md:py-5 bg-gradient-to-b from-[#003e60] to-[#19191c]"
  >
<motion.div 
 className="container mx-auto max-w-5xl px-4" 
 variants={sectionVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.3 }}
>
  
 
        
      {/* --- VERSIÓN DESKTOP (Horizontal) --- */}
  <BlueprintSvg 
        // hidden = Oculto en móvil
        // md:block = Visible en desktop
  className="w-full h-auto  hidden md:block " 
  style={{
   color: 'var(--color-blanco-pergamino)', 
  }}
  />

      {/* --- VERSIÓN MÓVIL (Vertical) --- */}
      <BlueprintSvgVertical
        // Visible en móvil por defecto
        // md:hidden = Oculto en desktop
  className="w-full h-auto  md:hidden"
  style={{
  color: 'var(--color-blanco-pergamino)', 
  }}
  />

</motion.div>
 </section>
);
}