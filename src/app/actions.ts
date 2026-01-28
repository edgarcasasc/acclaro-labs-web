'use server'

import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Resend } from 'resend';

// Inicializamos Resend de forma segura
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Definimos el tipo de respuesta
export type FormState = {
  success: boolean;
  message: string;
};

// --- FUNCIÓN 1: ENVIAR FORMULARIO (Ya la tenías) ---
export async function sendContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const outcome = formData.get('outcome') as string;
  const context = formData.get('context') as string;

  if (!email || !name || !context) {
    return { success: false, message: "Faltan datos requeridos." };
  }

  console.log(`📩 Procesando contacto de: ${email}`);

  try {
    // A. Guardar en DB
    const { error: dbError } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          full_name: name,
          email_address: email,
          goal: outcome || 'No especificado',
          message: context,
          source: 'contact_page',
          created_at: new Date().toISOString(),
          status: 'pendiente' // Por defecto
        },
      ]);

    if (dbError) {
      console.error("❌ Error guardando en Supabase:", dbError.message);
      return { success: false, message: "Error al guardar los datos." };
    }

    // B. Enviar Email
    if (resend) {
      await resend.emails.send({
        from: 'Acclaro Web <onboarding@resend.dev>',
        to: ['hello@acclaroflow.com'], 
        replyTo: email,
        subject: `🔥 Nuevo Lead: ${name} - ${outcome}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #0f172a;">Nuevo Lead desde la Web 🚀</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interés:</strong> ${outcome}</p>
            <hr />
            <p><strong>Mensaje:</strong><br/>${context}</p>
          </div>
        `,
      });
    }

    return { success: true, message: "Mensaje enviado y guardado." };

  } catch (err) {
    console.error("Error inesperado:", err);
    return { success: false, message: "Error interno." };
  }
}

// ==========================================
// --- NUEVAS FUNCIONES PARA EL DASHBOARD ---
// ==========================================

// --- FUNCIÓN 2: OBTENER TODOS LOS LEADS (Lectura) ---
export async function getLeads() {
  try {
    // Pedimos todo a la tabla 'leads' ordenado por fecha (más reciente arriba)
    const { data, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching leads:', error);
    return { success: false, data: [] };
  }
}

// --- FUNCIÓN 3: ACTUALIZAR ESTADO (Escritura) ---
export async function updateLeadStatus(id: number, status: string, notes: string) {
  try {
    const { error } = await supabaseAdmin
      .from('leads')
      .update({ status, admin_notes: notes }) // Actualizamos estas columnas
      .eq('id', id); // Donde el ID coincida

    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error updating lead:', error);
    return { success: false };
  }
}