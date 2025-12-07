// src/app/contacto/page.tsx
'use client';
import React from 'react';
import DigitalUniverse from '@/components/DigitalUniverse';
import { motion } from 'framer-motion';
// IMPORTANTE: Agregamos 'Bot' a los iconos importados
import { Mail, MapPin, Send, MessageSquare, Bot } from 'lucide-react';

export default function ContactoPage() {
  return (
    <>
      <DigitalUniverse />
      <main className="relative z-10 font-sans text-blanco-pergamino min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6">
        
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: El Manifiesto de Contacto --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 mb-6">
              <MessageSquare size={14} className="text-sky-400" />
              <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">Acceso Directo</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Hablemos de <span className="text-oro-antiguo">Unificar</span> tu Negocio.
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Sin intermediarios. Sin filas de espera. Sin respuestas automáticas genéricas.
            </p>
            
            <p className="text-gray-400 mb-10 border-l-2 border-oro-antiguo/50 pl-4 italic">
              "¿Tienes un ecosistema digital fracturado? Cuéntanos el desafío. <strong className="text-white">Edgar o Abdiel</strong> leerán este mensaje personalmente y te responderán con una perspectiva humana y estratégica."
            </p>

            <div className="space-y-8"> {/* Aumenté el espacio vertical para que respiren los bloques */}
              
              {/* Bloque 1: Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-oro-antiguo/30 transition-colors">
                  <Mail className="text-oro-antiguo" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Escribe Directo</h3>
                  <a href="mailto:hola@acclarolabs.com" className="text-gray-300 hover:text-white transition-colors">
                    hola@acclarolabs.com
                  </a>
                </div>
              </div>

              {/* Bloque 2: Ubicación */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-400/30 transition-colors">
                  <MapPin className="text-sky-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">Base de Operaciones</h3>
                  <p className="text-gray-300">
                    Monterrey, N.L., México <span className="text-gray-500 text-sm">(Trabajando globalmente)</span>
                  </p>
                </div>
              </div>

              {/* --- NUEVO BLOQUE: Comunicación con IA (Aquí está lo que faltaba) --- */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-violet-400/30 transition-colors">
                  <Bot className="text-violet-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide">
                    Comunicación Sin Fronteras (AI-Powered)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">
                    Creemos que el talento no tiene código postal. Usamos IA para comunicarnos fluidamente en tu idioma nativo.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: El Formulario --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-azul-zafiro/40 blur-[80px] rounded-full pointer-events-none"></div>

            <form className="space-y-5 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" placeholder="Tu nombre" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Corporativo</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all" placeholder="nombre@empresa.com" />
                <p className="text-xs text-gray-600 mt-1">El apellido de tu empresa importa.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">¿Cuál es el desafío principal hoy?</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all appearance-none">
                  <option className="bg-zinc-900">Selecciona una opción...</option>
                  <option className="bg-zinc-900">Mis datos de Salesforce no cuadran</option>
                  <option className="bg-zinc-900">Mi web es lenta / no convierte</option>
                  <option className="bg-zinc-900">Necesito estrategia de contenido</option>
                  <option className="bg-zinc-900">Quiero una auditoría completa</option>
                  <option className="bg-zinc-900">Otro / Colaboración</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oro-antiguo focus:ring-1 focus:ring-oro-antiguo outline-none transition-all resize-none" 
                  placeholder="Danos contexto. Mientras más sepamos, mejor será la primera conversación."
                ></textarea>
              </div>

              <button className="w-full bg-azul-zafiro text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-glow-blue flex items-center justify-center gap-2 group">
                <span>Enviar Mensaje a los Fundadores</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-gray-500 mt-4 border-t border-white/5 pt-4">
                Respetamos tu tiempo y tus datos. Recibirás una respuesta humana en menos de 24 horas hábiles. <strong>Cero spam, solo estrategia.</strong>
              </p>
            </form>
          </motion.div>
        </div>

      </main>
    </>
  );
}