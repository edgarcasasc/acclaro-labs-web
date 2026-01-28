'use server'

import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Resend } from 'resend';

// Inicializamos Resend de forma segura
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Definimos el tipo de respuesta para el formulario
export type FormState = {
  success: boolean;
  message: string;
};

// --- FUNCIÓN 1: ENVIAR FORMULARIO (La que ya tenías) ---
export async function sendContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const outcome = formData.get('outcome') as string;
  const context = formData.get('context') as string;

  if (!email || !name || !context) {
    return { success: false, message: "Faltan datos requeridos." };
  }

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
      console.error("❌ Error guardando:", dbError.message);
      return { success: false, message: "Error al guardar los datos." };
    }

    // B. Enviar Email
    if (resend) {
      await resend.emails.send({
        from: 'Acclaro Web <onboarding@resend.dev>',
        to: ['hello@acclaroflow.com'], 
        replyTo: email,
        subject: `🔥 Nuevo Lead: ${name}`,
        html: `<p>Nuevo lead de ${name} (${email}).<br>Mensaje: ${context}</p>`,
      });
    }

    return { success: true, message: "Mensaje enviado." };

  } catch (err) {
    console.error(err);
    return { success: false, message: "Error interno." };
  }
}

// ==========================================
// --- ESTAS SON LAS QUE TE FALTAN ---
// ==========================================

// --- FUNCIÓN 2: LEER DATOS (Para que el Dashboard muestre info) ---
export async function getLeads() {
  try {
    // Seleccionamos TODO de la tabla leads
    const { data, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false }); // Los más nuevos primero

    if (error) {
      console.error("❌ Error Supabase:", error.message);
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching leads:', error);
    return { success: false, data: [] };
  }
}

// --- FUNCIÓN 3: ACTUALIZAR DATOS (Para cuando cambies el estado) ---
export async function updateLeadStatus(id: number, status: string, notes: string) {
  try {
    const { error } = await supabaseAdmin
      .from('leads')
      .update({ status: status, admin_notes: notes })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error updating lead:', error);
    return { success: false };
  }
}