'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

// Tipos de mensaje
type Message = {
  id: string;
  role: 'bot' | 'user';
  text: React.ReactNode;
};

// Pasos del flujo del chat
type Step = 'init' | 'name' | 'website' | 'email' | 'crm' | 'closing' | 'done';

export default function LeadMagnetChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'bot', 
      text: "Hola. Veo que te interesa optimizar tu ecosistema digital. ¿Cómo te llamas?" 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState<Step>('name');
  const [isTyping, setIsTyping] = useState(false);
  
  // Datos a capturar
  const [leadData, setLeadData] = useState({
    name: '',
    website: '',
    email: '',
    crm: ''
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al fondo
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Función para procesar respuestas
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // 1. Agregar mensaje del usuario
    addMessage('user', userText);
    setIsTyping(true);

    // 2. Lógica del Bot (Simulación de IA)
    setTimeout(async () => {
      let nextStep: Step = currentStep;
      let botResponse = "";

      switch (currentStep) {
        case 'name':
          setLeadData(prev => ({ ...prev, name: userText }));
          botResponse = `Un gusto, ${userText}. Para analizar tu caso, ¿cuál es tu sitio web?`;
          nextStep = 'website';
          break;

        case 'website':
          setLeadData(prev => ({ ...prev, website: userText }));
          botResponse = "¿Perfecto. Y a qué correo te enviamos el análisis preliminar?";
          nextStep = 'email';
          break;

        case 'email':
          setLeadData(prev => ({ ...prev, email: userText }));
          botResponse = "Entendido. Última pregunta clave: ¿Qué CRM están usando actualmente? (Salesforce, HubSpot, Excel...)";
          nextStep = 'crm';
          break;

        case 'crm':
          setLeadData(prev => ({ ...prev, crm: userText }));
          // Aquí termina la recolección, enviamos a la API
          await submitLead({ ...leadData, crm: userText });
          return; // El submit manejará el mensaje final
        
        default:
          break;
      }

      setIsTyping(false);
      addMessage('bot', botResponse);
      setCurrentStep(nextStep);

    }, 1000); // Pequeño delay para que parezca que "piensa"
  };

  // Función para enviar a la API
  const submitLead = async (finalData: any) => {
    try {
      // CORRECCIÓN API: Agregamos el '/' al final
      const res = await fetch('/api/capture-lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...finalData,
          source: 'chat_ia' // Identificamos la fuente
        })
      });

      if (res.ok) {
        // --- CÓDIGO GTM ---
        // ¡Aquí medimos la conversión del chat!
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
            'event': 'form_success',      // Mismo evento que los otros forms
            'form_id': 'chat_home',       // ID único para distinguir en reportes
            'user_role': finalData.crm    // Guardamos el CRM como dato extra
        });
        // -----------------

        setIsTyping(false);
        addMessage('bot', <span className="text-emerald-400 font-bold">¡Listo! Edgar y Abdiel han recibido tus datos. Te contactaremos en breve.</span>);
        setCurrentStep('done');
      } else {
        throw new Error('Error API');
      }
    } catch (error) {
      setIsTyping(false);
      addMessage('bot', "Tuve un problema de conexión. Por favor intenta por el formulario de contacto.");
    }
  };

  const addMessage = (role: 'bot' | 'user', text: React.ReactNode) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role, text }]);
  };

  return (
    <>
      {/* Botón Flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-azul-zafiro hover:bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-white/20 transition-all group"
          >
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-oro-antiguo animate-ping" />
            <Bot size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana del Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950/50 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-azul-zafiro to-purple-500 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Acclaro AI</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-azul-zafiro text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-white/5">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-slate-950/30">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={currentStep === 'done' ? "Chat finalizado" : "Escribe tu respuesta..."}
                  disabled={currentStep === 'done' || isTyping}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-oro-antiguo transition-colors disabled:opacity-50 text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || currentStep === 'done' || isTyping}
                  className="p-3 bg-oro-antiguo hover:bg-amber-400 text-slate-900 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}