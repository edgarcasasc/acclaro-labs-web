"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot } from "lucide-react"; // Asumo que usas lucide-react o similar

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  type?: "text" | "email" | "url"; // Para validación de input
};

export default function ConversationalForm() {
  // Estado del flujo
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", website: "", email: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Guion del Chat (Scripted Flow)
  const script = [
    {
      id: "intro",
      content: "Hola. Soy la IA de Acclaro. ¿Qué sitio web te gustaría que auditemos hoy?",
      field: "website",
      inputType: "url",
    },
    {
      id: "name",
      content: "Entendido. Analizaremos esa arquitectura. ¿Con quién tengo el gusto de hablar?",
      field: "name",
      inputType: "text",
    },
    {
      id: "email",
      content: (name: string) => `Un placer, ${name}. ¿A qué correo te envío el reporte preliminar cuando termine?`,
      field: "email",
      inputType: "email",
    },
    {
      id: "closing",
      content: "Perfecto. Procesando tu solicitud. Revisa tu bandeja de entrada en breve.",
      field: null,
      inputType: null,
    },
  ];

  // Historial de mensajes
  const [history, setHistory] = useState<Message[]>([
    { id: "1", role: "bot", content: script[0].content as string },
  ]);

// Auto-scroll al fondo
  useEffect(() => {
    // CORRECCIÓN: Solo hacer scroll si hay interacción real (más de 1 mensaje)
    if (history.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history]);
  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Agregar mensaje del usuario
    const currentStepObj = script[step];
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setHistory((prev) => [...prev, userMsg]);
    
    // 2. Guardar datos
    const updatedData = { ...formData, [currentStepObj.field as string]: input };
    setFormData(updatedData);
    setInput("");
    setLoading(true);

    // Simular "Escribiendo..."
    setTimeout(async () => {
      const nextStep = step + 1;
      
      if (nextStep < script.length) {
        // Siguiente pregunta del Bot
        const nextScript = script[nextStep];
        let botContent = nextScript.content;
        
        // Si el contenido es una función (para personalizar con el nombre)
        if (typeof botContent === "function") {
          botContent = botContent(updatedData.name);
        }

        setHistory((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "bot", content: botContent as string },
        ]);
        setStep(nextStep);
        setLoading(false);

        // Si es el último paso, enviar al servidor
        if (nextStep === script.length - 1) {
            await submitLead(updatedData);
        }

      }
    }, 800); // Pequeño delay para realismo
  };

  // Función simulada de envío (conectar a tu API real)
  const submitLead = async (data: any) => {
    try {
        console.log("Enviando lead:", data);
        // AQUÍ CONECTAS CON TU BACKEND
        // await fetch('/api/capture-lead', { method: 'POST', body: JSON.stringify(data) });
    } catch (e) {
        console.error("Error enviando lead", e);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
      {/* Header del Chat */}
      <div className="bg-gray-800/50 p-3 border-b border-gray-700 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono text-gray-300">ACCLARO AGENT - ONLINE</span>
      </div>

      {/* Área de Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
        <AnimatePresence initial={false}>
          {history.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {loading && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                 <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <span className="flex gap-1">
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}/>
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}/>
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}/>
                    </span>
                 </div>
             </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Solo visible si no ha terminado) */}
      {step < script.length - 1 && (
        <div className="p-3 bg-gray-800/50 border-t border-gray-700 flex gap-2">
          <input
            type={script[step].inputType === "email" ? "email" : "text"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={
                script[step].field === 'website' ? "acclarolabs.com..." : "Escribe aquí..."
            }
            className="flex-1 bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-2 rounded-md transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      )}
    </div>
  );
}