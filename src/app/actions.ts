'use server'

import { Resend } from 'resend';

// Inicializamos Resend con la clave segura
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(prevState: any, formData: FormData) {
  // 1. Extraer datos del formulario
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const outcome = formData.get('outcome') as string;
  const context = formData.get('context') as string;

  // 2. Validación básica
  if (!email || !name || !context) {
    return { success: false, message: "Faltan datos requeridos." };
  }

  try {
    // 3. Enviar el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Acclaro Web <onboarding@resend.dev>', // Usa el dominio por defecto de Resend para probar rápido
      to: ['hello@acclaroflow.com'], // <--- ¡PON TU EMAIL AQUÍ!
      subject: `Nuevo Lead: ${name} - ${outcome}`,
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
        </div>
      `,
      replyTo: email, // Para que al dar "Responder" le contestes al cliente
    });

    if (error) {
      console.error("Error enviando email:", error);
      return { success: false, message: "Error al enviar el correo." };
    }

    // 4. Éxito
    return { success: true, message: "Mensaje enviado correctamente." };

  } catch (err) {
    console.error("Error inesperado:", err);
    return { success: false, message: "Ocurrió un error inesperado." };
  }
}