'use client';

import React, { useState, useEffect } from 'react';
import { getLeads, updateLeadStatus } from '@/app/actions';
import { Loader2, Save, RefreshCw, Lock, ArrowDownAZ } from 'lucide-react';

export default function DashboardPage() {
  // --- SEGURIDAD SIMPLE (PIN) ---
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const SECRET_PIN = "2026"; // Tu PIN

  // --- ESTADOS DE DATOS ---
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<number | null>(null);

  useEffect(() => {
    if (isAuthorized) fetchLeads();
  }, [isAuthorized]);

  // --- LÓGICA DE ORDENAMIENTO MAGISTRAL ---
  const sortLeads = (data: any[]) => {
    return [...data].sort((a, b) => {
      // 1. Definir prioridad: 'pendiente' pesa más (va arriba)
      const isAPending = a.status === 'pendiente' || !a.status;
      const isBPending = b.status === 'pendiente' || !b.status;

      if (isAPending && !isBPending) return -1; // A sube
      if (!isAPending && isBPending) return 1;  // B sube

      // 2. Si tienen la misma prioridad, gana el más nuevo
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  };

  const fetchLeads = async () => {
    setLoading(true);
    const result = await getLeads();
    if (result.success) {
      // Ordenamos apenas llegan los datos
      setLeads(sortLeads(result.data));
    }
    setLoading(false);
  };

  const handleUpdate = async (id: number, currentStatus: string, currentNotes: string) => {
    setUpdating(id);
    
    // 1. Guardar en DB
    await updateLeadStatus(id, currentStatus, currentNotes);
    
    // 2. Actualizar visualmente y reordenar AL INSTANTE
    const updatedList = leads.map(lead => 
      lead.id === id 
        ? { ...lead, status: currentStatus, admin_notes: currentNotes } 
        : lead
    );
    
    setLeads(sortLeads(updatedList)); // <--- Aquí ocurre la magia del reordenamiento
    setUpdating(null);
  };

  // --- VISTA LOGIN ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
            <Lock size={32} />
          </div>
          <h2 className="text-white text-xl font-bold mb-4">Acceso Restringido</h2>
          <input 
            type="password" value={pin} onChange={(e) => setPin(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white text-center text-2xl tracking-widest mb-4 focus:border-emerald-500 outline-none"
            placeholder="****"
          />
          <button onClick={() => pin === SECRET_PIN ? setIsAuthorized(true) : alert("PIN Incorrecto")}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors">
            Entrar
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA DASHBOARD ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              Centro de Comando
              <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700 font-normal">
                {leads.filter(l => l.status === 'pendiente' || !l.status).length} Pendientes
              </span>
            </h1>
          </div>
          <button onClick={fetchLeads} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors" title="Recargar datos">
            <RefreshCw size={20} />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-emerald-500" size={40} /></div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium border-b border-slate-800">Fecha</th>
                  <th className="p-4 font-medium border-b border-slate-800">Origen</th>
                  <th className="p-4 font-medium border-b border-slate-800">Cliente</th>
                  <th className="p-4 font-medium border-b border-slate-800 w-1/4">Mensaje</th>
                  <th className="p-4 font-medium border-b border-slate-800">Estado</th>
                  <th className="p-4 font-medium border-b border-slate-800">Notas</th>
                  <th className="p-4 font-medium border-b border-slate-800 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {leads.map((lead) => (
                  <LeadRow key={lead.id} lead={lead} onSave={handleUpdate} updating={updating === lead.id} />
                ))}
              </tbody>
            </table>
            {leads.length === 0 && <div className="text-center py-12 text-slate-500">No hay leads todavía.</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// --- FILA INDIVIDUAL ---
function LeadRow({ lead, onSave, updating }: any) {
  const [status, setStatus] = useState(lead.status || 'pendiente');
  const [notes, setNotes] = useState(lead.admin_notes || '');
  
  // Detectamos si hay cambios locales comparando con lo que llegó de la DB
  const hasChanges = status !== (lead.status || 'pendiente') || notes !== (lead.admin_notes || '');

  return (
    <tr className={`hover:bg-slate-800/50 transition-colors ${status !== 'pendiente' ? 'opacity-60 bg-slate-950/30' : ''}`}>
      <td className="p-4 text-xs text-slate-500 font-mono">
        {new Date(lead.created_at).toLocaleDateString()} <br/>
        {new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </td>
      <td className="p-4">
        <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-[10px] uppercase font-bold">
          {lead.source}
        </span>
      </td>
      <td className="p-4">
        <div className="font-bold text-white">{lead.full_name}</div>
        <div className="text-sm text-slate-400">{lead.email_address}</div>
      </td>
      <td className="p-4">
        <div className="max-h-24 overflow-y-auto text-sm text-slate-300 scrollbar-thin scrollbar-thumb-slate-700 pr-2">
          {lead.goal && <div className="font-bold text-amber-400 text-xs mb-1">OBJETIVO: {lead.goal}</div>}
          {lead.message}
        </div>
      </td>
      <td className="p-4">
        <select 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`bg-slate-950 border border-slate-700 rounded px-2 py-1 text-sm outline-none focus:border-emerald-500 cursor-pointer ${
            status === 'contactado' ? 'text-green-400' : 
            status === 'descartado' ? 'text-red-400' : 
            status === 'ganado' ? 'text-yellow-400' : 'text-amber-400'
          }`}
        >
          <option value="pendiente">🟠 Pendiente</option>
          <option value="contactado">🟢 Contactado</option>
          <option value="en_proceso">🔵 En Proceso</option>
          <option value="ganado">🏆 Ganado</option>
          <option value="descartado">❌ Descartado</option>
        </select>
      </td>
      <td className="p-4">
        <textarea 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="..."
          className="bg-slate-950 border border-slate-700 rounded w-full h-16 p-2 text-xs text-slate-300 resize-none focus:border-emerald-500 outline-none"
        />
      </td>
      <td className="p-4 text-right h-full align-middle">
        {hasChanges && (
          <button 
            onClick={() => onSave(lead.id, status, notes)}
            disabled={updating}
            className="inline-flex items-center justify-center p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-lg transition-all animate-in fade-in zoom-in duration-200"
            title="Guardar Cambios"
          >
            {updating ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
          </button>
        )}
      </td>
    </tr>
  );
}