'use client';

import React, { useState, useEffect } from 'react';
import { getLeads, updateLeadStatus } from '@/app/actions';
import { Loader2, Save, RefreshCw, Lock } from 'lucide-react';

export default function DashboardPage() {
  // --- SEGURIDAD SIMPLE (PIN) ---
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const SECRET_PIN = "2026"; // <--- CAMBIA ESTO POR TU PIN SECRETO

  // --- ESTADOS DE DATOS ---
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<number | null>(null);

  // Cargar leads al iniciar (si está autorizado)
  useEffect(() => {
    if (isAuthorized) fetchLeads();
  }, [isAuthorized]);

  const fetchLeads = async () => {
    setLoading(true);
    const result = await getLeads();
    if (result.success) {
      setLeads(result.data);
    }
    setLoading(false);
  };

  const handleUpdate = async (id: number, currentStatus: string, currentNotes: string) => {
    setUpdating(id);
    await updateLeadStatus(id, currentStatus, currentNotes);
    setUpdating(null);
    // Feedback visual rápido
    alert("✅ Guardado");
  };

  // --- VISTA DE LOGIN (SI NO HAY PIN) ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
            <Lock size={32} />
          </div>
          <h2 className="text-white text-xl font-bold mb-4">Acceso Restringido</h2>
          <input 
            type="password" 
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white text-center text-2xl tracking-widest mb-4 focus:border-emerald-500 outline-none"
            placeholder="****"
          />
          <button 
            onClick={() => pin === SECRET_PIN ? setIsAuthorized(true) : alert("PIN Incorrecto")}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA DEL DASHBOARD (SI HAY PIN) ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-3xl font-bold text-white">Centro de Comando</h1>
            <p className="text-slate-500 text-sm mt-1">Gestión de Leads en Tiempo Real</p>
          </div>
          <button onClick={fetchLeads} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Tabla */}
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
                  <th className="p-4 font-medium border-b border-slate-800 w-1/4">Mensaje / Contexto</th>
                  <th className="p-4 font-medium border-b border-slate-800">Estado</th>
                  <th className="p-4 font-medium border-b border-slate-800">Notas Admin</th>
                  <th className="p-4 font-medium border-b border-slate-800 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {leads.map((lead) => (
                  <LeadRow key={lead.id} lead={lead} onSave={handleUpdate} updating={updating === lead.id} />
                ))}
              </tbody>
            </table>
            {leads.length === 0 && (
              <div className="text-center py-12 text-slate-500">No hay leads todavía.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- COMPONENTE DE FILA (Para manejar el estado individual) ---
function LeadRow({ lead, onSave, updating }: any) {
  const [status, setStatus] = useState(lead.status || 'pendiente');
  const [notes, setNotes] = useState(lead.admin_notes || '');
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (newStatus: string, newNotes: string) => {
    setStatus(newStatus);
    setNotes(newNotes);
    setHasChanges(true);
  };

  return (
    <tr className="hover:bg-slate-800/50 transition-colors">
      <td className="p-4 text-xs text-slate-500 font-mono">
        {new Date(lead.created_at).toLocaleDateString()} <br/>
        {new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </td>
      <td className="p-4">
        <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${
          lead.source === 'chatbot' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'
        }`}>
          {lead.source}
        </span>
      </td>
      <td className="p-4">
        <div className="font-bold text-white">{lead.full_name}</div>
        <div className="text-sm text-slate-400">{lead.email_address}</div>
        {lead.website_url && <a href={lead.website_url} target="_blank" className="text-xs text-emerald-400 hover:underline">{lead.website_url}</a>}
        {lead.crm_system && <div className="text-xs text-slate-500 mt-1">CRM: {lead.crm_system}</div>}
      </td>
      <td className="p-4">
        <div className="max-h-24 overflow-y-auto text-sm text-slate-300 scrollbar-thin scrollbar-thumb-slate-700 pr-2">
          {lead.goal && <div className="font-bold text-amber-400 text-xs mb-1">OBJETIVO: {lead.goal}</div>}
          {lead.message || "Sin mensaje"}
        </div>
      </td>
      <td className="p-4">
        <select 
          value={status}
          onChange={(e) => handleChange(e.target.value, notes)}
          className={`bg-slate-950 border border-slate-700 rounded px-2 py-1 text-sm outline-none focus:border-emerald-500 ${
            status === 'contactado' ? 'text-green-400' : 
            status === 'descartado' ? 'text-red-400' : 'text-amber-400'
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
          onChange={(e) => handleChange(status, e.target.value)}
          placeholder="Notas internas..."
          className="bg-slate-950 border border-slate-700 rounded w-full h-20 p-2 text-xs text-slate-300 resize-none focus:border-emerald-500 outline-none"
        />
      </td>
      <td className="p-4 text-right">
        {hasChanges && (
          <button 
            onClick={() => { onSave(lead.id, status, notes); setHasChanges(false); }}
            disabled={updating}
            className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-lg transition-all"
            title="Guardar Cambios"
          >
            {updating ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
          </button>
        )}
      </td>
    </tr>
  );
}