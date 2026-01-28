'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLeads, updateLeadStatus } from '@/app/actions';
import { Loader2, Save, RefreshCw, Lock, CheckCircle2, Inbox, ShieldCheck, Globe, Mail, Database } from 'lucide-react';

export default function DashboardPage() {
  // --- SEGURIDAD (PIN) ---
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const SECRET_PIN = process.env.NEXT_PUBLIC_DASHBOARD_PIN;

  // --- ESTADOS DE DATOS ---
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<number | null>(null);

  // 1. Efecto para Login Automático
  useEffect(() => {
    if (pin.length === 4) {
      if (pin === SECRET_PIN) {
        setIsAuthorized(true);
      } else {
        setTimeout(() => {
          alert("Acceso Denegado: Código incorrecto.");
          setPin('');
        }, 100);
      }
    }
  }, [pin, SECRET_PIN]);

  // 2. Cargar datos al autorizar
  useEffect(() => {
    if (isAuthorized) fetchLeads();
  }, [isAuthorized]);

  // --- LÓGICA DE ORDENAMIENTO ---
  const sortedLeads = useMemo(() => {
    return [...leads].sort((a, b) => {
      const isAPending = a.status === 'pendiente' || !a.status;
      const isBPending = b.status === 'pendiente' || !b.status;
      
      if (isAPending && !isBPending) return -1;
      if (!isAPending && isBPending) return 1;
      
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  }, [leads]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const result = await getLeads();
      if (result.success) setLeads(result.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: number, currentStatus: string, currentNotes: string) => {
    setUpdating(id);
    const result = await updateLeadStatus(id, currentStatus, currentNotes);
    
    if (result.success) {
      setLeads(prev => prev.map(lead => 
        lead.id === id ? { ...lead, status: currentStatus, admin_notes: currentNotes } : lead
      ));
    }
    setUpdating(null);
  };

  // --- VISTA 1: LOGIN ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-emerald-500/30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500" />
          <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 border border-slate-800 shadow-inner">
            <Lock size={32} />
          </div>
          <h2 className="text-white text-2xl font-bold mb-2 tracking-tight">Acceso Restringido</h2>
          <p className="text-slate-500 text-sm mb-8">Panel de Control - Acclaro Labs</p>
          <input 
            type="password" 
            value={pin} 
            onChange={(e) => { if (/^\d*$/.test(e.target.value) && e.target.value.length <= 4) setPin(e.target.value); }}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white text-center text-4xl tracking-[0.5em] mb-2 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-800 font-mono"
            placeholder="••••"
            autoFocus
          />
        </motion.div>
      </div>
    );
  }

  // --- VISTA 2: DASHBOARD ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans">
      <div className="max-w-[1600px] mx-auto"> {/* Ampliado para acomodar más columnas */}
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-4">
              <ShieldCheck className="text-emerald-500" />
              Centro de Comando
            </h1>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                Live
              </span>
              <span className="text-slate-400">
                <span className="text-white font-bold">{leads.length}</span> Registros
              </span>
            </div>
          </div>
          
          <button 
            onClick={fetchLeads} 
            className="group flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-white transition-all active:scale-95 shadow-lg"
          >
            <RefreshCw size={18} className={`transition-transform duration-700 ${loading ? 'animate-spin' : 'group-hover:rotate-180'}`} />
            <span className="text-sm font-medium">Sincronizar</span>
          </button>
        </header>

        {/* TABLA DE DATOS */}
        {loading && leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6 bg-slate-900/30 rounded-2xl border border-slate-800/50 border-dashed">
            <Loader2 className="animate-spin text-emerald-500" size={48} />
            <p className="text-slate-500 font-mono text-sm animate-pulse">Cargando base de datos...</p>
          </div>
        ) : (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
               <thead>
  <tr className="bg-slate-950/50 text-slate-500 text-[10px] uppercase tracking-[0.15em] font-bold border-b border-slate-800">
    <th className="p-5 whitespace-nowrap">Timestamp</th>
    {/* Tech / Origen (Integrado CRM + Source) */}
    <th className="p-5 whitespace-nowrap">Tech / Origen</th>
    {/* Identidad (Integrado Web + Email) */}
    <th className="p-5 whitespace-nowrap">Identidad</th>
    <th className="p-5 w-1/3 min-w-[300px]">Inteligencia / Mensaje</th>
    <th className="p-5 text-center whitespace-nowrap">Status</th>
    <th className="p-5 min-w-[200px]">Bitácora Admin</th>
    <th className="p-5 text-right whitespace-nowrap">Acción</th>
  </tr>
</thead>
                <tbody className="divide-y divide-slate-800/50">
                  <AnimatePresence mode='popLayout'>
                    {sortedLeads.map((lead) => (
                      <LeadRow key={lead.id} lead={lead} onSave={handleUpdate} updating={updating === lead.id} />
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
            
            {leads.length === 0 && (
              <div className="text-center py-24 flex flex-col items-center gap-4">
                <div className="p-4 bg-slate-800/50 rounded-full">
                  <Inbox size={32} className="text-slate-600" />
                </div>
                <p className="text-slate-500 text-sm">Sin datos.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- COMPONENTE: FILA DE LEAD ---
function LeadRow({ lead, onSave, updating }: any) {
  const [status, setStatus] = useState(lead.status || 'pendiente');
  const [notes, setNotes] = useState(lead.admin_notes || '');
  const hasChanges = status !== (lead.status || 'pendiente') || notes !== (lead.admin_notes || '');

  const statusColors = {
    pendiente: 'text-slate-400 border-slate-700',
    contactado: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
    en_proceso: 'text-blue-400 border-blue-500/30 bg-blue-500/5',
    ganado: 'text-amber-400 border-amber-500/30 bg-amber-500/5',
    descartado: 'text-rose-400 border-rose-500/30 bg-rose-500/5',
  };

  return (
    <motion.tr 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: status !== 'pendiente' ? 0.6 : 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`group transition-colors hover:bg-slate-800/40 ${status !== 'pendiente' ? 'bg-slate-950/40' : ''}`}
    >
      {/* 1. FECHA */}
      <td className="p-5 text-[11px] text-slate-500 font-mono align-top">
        <div className="text-slate-300 font-bold mb-1">{new Date(lead.created_at).toLocaleDateString()}</div>
        <div>{new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      </td>

      {/* 2. ORIGEN & TECH (CRM SYSTEM + SOURCE) */}
      <td className="p-5 align-top">
        <div className="flex flex-col gap-2 items-start">
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded text-[10px] uppercase font-black tracking-wider shadow-sm">
            {lead.source || 'WEB'}
            </span>
            {lead.crm_system && (
                <span className="flex items-center gap-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    <Database size={10} /> {lead.crm_system}
                </span>
            )}
        </div>
      </td>

      {/* 3. IDENTIDAD (WEBSITE + EMAIL) */}
      <td className="p-5 align-top">
        <div className="font-bold text-white text-sm mb-1.5">{lead.full_name}</div>
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer group/email" title="Copiar email">
               <Mail size={12} className="text-slate-600 group-hover/email:text-emerald-500" /> 
               {lead.email_address}
            </div>
            {lead.website_url && (
                <a 
                    href={lead.website_url.startsWith('http') ? lead.website_url : `https://${lead.website_url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                    <Globe size={12} className="text-blue-600 group-hover/link:text-blue-400" />
                    {lead.website_url.replace(/^https?:\/\//, '')}
                </a>
            )}
        </div>
      </td>

      {/* 4. INTELIGENCIA (GOAL + MESSAGE) */}
      <td className="p-5 align-top">
        <div className="max-h-32 overflow-y-auto text-xs text-slate-300 leading-relaxed pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {lead.goal && (
            <div className="flex items-center gap-2 mb-2 p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wide">Objetivo:</span>
              <span className="text-amber-200 font-medium">{lead.goal}</span>
            </div>
          )}
          <p className="opacity-90">{lead.message}</p>
        </div>
      </td>

      {/* 5. STATUS */}
      <td className="p-5 align-top text-center">
        <div className="relative">
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`w-full appearance-none bg-slate-950 border rounded-lg px-3 py-2 text-[11px] font-bold outline-none focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer text-center uppercase tracking-wide ${statusColors[status as keyof typeof statusColors] || statusColors.pendiente}`}
          >
            <option value="pendiente">Pendiente</option>
            <option value="contactado">Contactado</option>
            <option value="en_proceso">En Proceso</option>
            <option value="ganado">Ganado</option>
            <option value="descartado">Descartado</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-current" />
          </div>
        </div>
      </td>

      {/* 6. BITÁCORA ADMIN */}
      <td className="p-5 align-top">
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas internas..."
          className="w-full bg-slate-950/50 border border-slate-800 focus:border-emerald-500/50 rounded-lg h-20 p-3 text-[11px] text-slate-300 resize-none outline-none transition-all placeholder:text-slate-700 font-mono"
        />
      </td>

      {/* 7. ACCIÓN */}
      <td className="p-5 align-middle text-right">
        <AnimatePresence>
          {hasChanges ? (
            <motion.button 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={() => onSave(lead.id, status, notes)}
              disabled={updating}
              className="inline-flex items-center justify-center p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transition-all active:scale-95"
              title="Guardar cambios"
            >
              {updating ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            </motion.button>
          ) : (
            <div className="inline-flex p-3 text-slate-700 opacity-20">
              <CheckCircle2 size={20} />
            </div>
          )}
        </AnimatePresence>
      </td>
    </motion.tr>
  );
}