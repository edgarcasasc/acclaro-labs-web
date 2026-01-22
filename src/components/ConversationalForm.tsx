"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Sparkles, User, Bot } from "lucide-react";

// Tipos
type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

type ScriptStep = {
  id: string;
  question: string;
  field: string;
  placeholder?: string; // Nuevo: Para guiar al usuario en cada paso
};

// --- GUIÓN ACTUALIZADO (Estrategia High-Intent) ---
const script: ScriptStep[] = [
  { 
    id: "1", 
    question: "Hola. Soy Nova. Pega la URL del sitio que quieres revisar y dime tu objetivo principal: más leads, más ventas o menos tickets de soporte.", 
    field: "url_goal",
    placeholder: "Ej: miempresa.com - Busco más leads B2B"
  },
  { 
    id: "2", 
    question: "Entendido. Para calibrar el análisis, ¿qué stack tecnológico utilizan principalmente? (Ej: WordPress, HubSpot, Salesforce, Custom...)", 
    field: "stack",
    placeholder: "Ej: Next.js + HubSpot"
  },
  { 
    id: "3", 
    question: "Perfecto. Estoy compilando el Snapshot de fricción. ¿A qué correo corporativo debo enviar los 3 hallazgos priorizados?", 
    field: "email",
    placeholder: "nombre@empresa.com"
  },
  { 
    id: "4", 
    question: "Procesando solicitud... He programado el envío de tu reporte. Revisa tu bandeja de entrada en unos minutos.", 
    field: "final",
    placeholder: "..."
  },
];

export default function ConversationalForm() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  
  // Referencia al contenedor del chat
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Efecto inicial: Saludo del Bot
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: "init-1",
          role: "bot",
          content: script[0].question,
        },
      ]);
    }
  }, [history.length]);

  // Auto-scroll quirúrgico
  useEffect(() => {
    if (history.length > 1 && chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput("");
    setIsLoading(true);

    // 1. Agregar mensaje del USUARIO
    const userMsg: Message = { 
      id: Date.now().toString(), 
      role: "user", 
      content: userText 
    };
    
    setHistory((prev) => [...prev, userMsg]);

    // 2. Guardar datos
    const currentField = script[step].field;
    const newFormData = { ...formData, [currentField]: userText };
    setFormData(newFormData);

    // 3. Simular IA
    setTimeout(async () => {
      const nextStep = step + 1;

      if (nextStep < script.length) {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: script[nextStep].question,
        };
        setHistory((prev) => [...prev, botMsg]);
        setStep(nextStep);
        setIsLoading(false);

        // Si es el último paso, enviamos
        if (script[nextStep].field === "final") {
          await submitLead(newFormData);
        }

      } else {
        setIsLoading(false);
      }
    }, 1000); // Delay un poco más largo para simular "análisis"
  };

  const submitLead = async (data: Record<string, string>) => {
    try {
      await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Lead capturado exitosamente");
    } catch (error) {
      console.error("Error enviando lead:", error);
    }
  };

  // Obtener el placeholder actual según el paso
  const currentPlaceholder = script[step]?.placeholder || "Escribe tu respuesta...";

  return (
    <div className="flex h-[500px] w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur-md shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Nova AI Assistant</h3>
          <p className="text-xs text-slate-400">En línea • Respuesta en minutos</p>
        </div>
      </div>

      {/* Área de Mensajes */}
      <div 
        ref={chatContainerRef}
        className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700"
      >
        {history.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex max-w-[85%] gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              
              {/* Avatar */}
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                msg.role === "user" 
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400" 
                  : "border-amber-500/30 bg-amber-500/10 text-amber-400"
              }`}>
                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>

              {/* Burbuja */}
              <div className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-200"
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl bg-slate-800 px-4 py-3">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-900/50 p-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={currentPlaceholder}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-12 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
            disabled={isLoading || step >= script.length} 
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 rounded-lg bg-amber-500 p-2 text-slate-900 transition-colors hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-600"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}