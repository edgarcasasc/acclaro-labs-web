"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
};

const SCRIPT = [
  {
    id: "intro",
    text: "Hola. Soy la IA de Acclaro. ¿Qué sitio web te gustaría que auditemos hoy?",
    field: "website",
    type: "url",
  },
  {
    id: "name",
    text: "Entendido. Analizaremos esa arquitectura. ¿Con quién tengo el gusto de hablar?",
    field: "name",
    type: "text",
  },
  {
    id: "email",
    text: (name: string) => `Un placer, ${name}. ¿A qué correo te envío el reporte preliminar?`,
    field: "email",
    type: "email",
  },
  {
    id: "closing",
    text: "Perfecto. Procesando tu solicitud. Revisa tu bandeja de entrada en breve.",
    field: null,
    type: null,
  },
];

export default function ConversationalForm() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [history, setHistory] = useState<Message[]>([
    { id: "init", role: "bot", content: SCRIPT[0].text as string },
  ]);
  
  const formData = useRef({ name: "", website: "", email: "" });
  const scrollRef = useRef<HTMLDivElement>(null);
  // REFERENCIA NUEVA PARA EL INPUT
  const inputRef = useRef<HTMLInputElement>(null);

  // --- 1. LOGICA DE SCROLL (Sin Saltos de Página) ---
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeout);
  }, [history, loading]);

  // --- 2. LOGICA DE FOCO INTELIGENTE (Solución al Salto) ---
  useEffect(() => {
    // Solo hacemos foco automático si NO es el primer paso y el bot dejó de "escribir"
    if (!loading && step > 0) {
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    }
  }, [loading, step]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Guardar datos
    const currentField = SCRIPT[step].field;
    if (currentField) {
        // @ts-ignore
        formData.current[currentField] = input; 
    }

    // UI Updates
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setHistory((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulación IA
    setTimeout(async () => {
      const nextStep = step + 1;
      
      if (nextStep < SCRIPT.length) {
        const nextLine = SCRIPT[nextStep];
        let botText = nextLine.text;

        if (typeof botText === "function") {
          botText = botText(formData.current.name);
        }

        setHistory((prev) => [
          ...prev, 
          { id: Date.now().toString(), role: "bot", content: botText as string }
        ]);
        setStep(nextStep);
        setLoading(false);

        if (nextStep === SCRIPT.length - 1) {
            await submitLead();
        }
      }
    }, 600);
  };

  const submitLead = async () => {
    try {
        await fetch('/api/capture-lead', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData.current) 
        });
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
      
      {/* Header */}
      <div className="bg-gray-800/50 p-3 border-b border-gray-700 flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono text-gray-300">ACCLARO AGENT - ONLINE</span>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overscroll-contain"
      >
        <AnimatePresence mode="popLayout">
          {history.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-br-none" 
                  : "bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none"
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {loading && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                 <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 rounded-bl-none">
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"/>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"/>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"/>
                    </div>
                 </div>
             </motion.div>
        )}
      </div>

      {/* Input Area */}
      {step < SCRIPT.length - 1 && (
        <div className="p-3 bg-gray-800/50 border-t border-gray-700 flex gap-2 shrink-0 z-10">
          <input
            ref={inputRef}
            // ⚠️ ELIMINADO EL AUTOFOCUS PARA EVITAR EL SALTO
            type={SCRIPT[step].type === 'email' ? 'email' : 'text'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribe tu respuesta..."
            className="flex-1 bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-md transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      )}
    </div>
  );
}