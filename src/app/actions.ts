'use server'

import { supabaseAdmin } from '@/lib/supabaseAdmin'; // <--- IMPORTANTE: Conexión a DB
import { Resend } from 'resend';

// Inicializamos Resend de forma segura
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Definimos el tipo de respuesta
export type FormState = {
  success: boolean;
  message: string;
};

export async function sendContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Extraer datos del formulario
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const outcome = formData.get('outcome') as string; // El objetivo seleccionado
  const context = formData.get('context') as string; // El mensaje

  // 2. Validación básica
  if (!email || !name || !context) {
    return { success: false, message: "Faltan datos requeridos." };
  }

  console.log(`📩 Procesando contacto de: ${email}`);

  try {
    // --- PASO A: GUARDAR EN SUPABASE (Prioridad 1) ---
    // Usamos las columnas nuevas 'goal' y 'message' que creamos en SQL
    const { error: dbError } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          full_name: name,
          email_address: email,
          goal: outcome || 'No especificado', // Columna nueva
          message: context,                   // Columna nueva
          source: 'contact_page',             // Identificador de origen
          created_at: new Date().toISOString(),
        },
      ]);

    if (dbError) {
      console.error("❌ Error guardando en Supabase:", dbError.message);
      // Opcional: Podrías retornar error aquí, o seguir intentando enviar el email
      return { success: false, message: "Error al guardar los datos." };
    }

    // --- PASO B: ENVIAR EMAIL DE ALERTA (Prioridad 2) ---
    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: 'Acclaro Web <onboarding@resend.dev>',
        to: ['hello@acclaroflow.com'], // <--- TU EMAIL REAL AQUÍ
        replyTo: email,
        subject: `🔥 Nuevo Lead: ${name} - ${outcome}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #0f172a;">Nuevo Lead desde la Web 🚀</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interés Principal:</strong> ${outcome}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #475569;">Contexto / Mensaje:</h3>
            <p style="background: #f8fafc; padding: 15px; border-radius: 6px; color: #334155;">
              ${context}
            </p>
            <p style="font-size: 12px; color: #888; margin-top: 20px;">
              Guardado en Supabase bajo ID: contact_page
            </p>
          </div>
        `,
      });

      if (emailError) {
        console.error("⚠️ El lead se guardó en DB, pero falló el email:", emailError);
      }
    }

    // 4. Éxito Total
    return { success: true, message: "Mensaje enviado y guardado correctamente." };

  } catch (err) {
    console.error("Error inesperado:", err);
    return { success: false, message: "Ocurrió un error inesperado." };
  }
}