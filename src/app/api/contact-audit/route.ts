// src/app/api/contact-audit/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Guardias de seguridad para evitar fallos de build (¡Vital!)
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  // Nota: Esto lanza un error de compilación solo si la clave es vital
  console.error("CRÍTICO: RESEND_API_KEY no está configurada para Contact API.");
}

const resend = new Resend(RESEND_KEY);

export async function POST(request: Request) {
  if (!RESEND_KEY) {
      return NextResponse.json({ error: 'Fallo de configuración. Servicio de email inactivo.' }, { status: 503 });
  }

  try {
    const data = await request.json();
    const { name, email, url, crmType } = data; // Datos de cualificación

    // --- ACCIÓN 1: Notificación Interna (Acclaro Labs) ---
    // Usamos el email para notificar a los fundadores sobre un nuevo lead
    await resend.emails.send({
      from: 'Acclaro Labs (Lead) <leads@acclarolabs.com>', // Configurar dominio verificado
      to: ['edgar@acclarolabs.com', 'abdiel@acclarolabs.com'], // Sustituir por los correos reales de los fundadores
      subject: `[NUEVO LEAD] Auditoría: ${name} (${crmType})`,
      html: `
        <h1>¡Nuevo Prospecto de Alto Valor!</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Web:</strong> ${url}</p>
        <p><strong>CRM Actual:</strong> ${crmType}</p>
        <p>---</p>
        <p><strong>PRÓXIMO PASO:</strong> Iniciar cualificación de Lead y contacto en menos de 24h.</p>
      `,
    });

    // --- ACCIÓN 2: Respuesta al Cliente (Opcional, pero profesional) ---
    // Enviar un correo de confirmación al lead si es necesario.

    // --- ACCIÓN 3: Integración a Salesforce (Fase 2) ---
    // Aquí iría la lógica para enviar el Lead a Salesforce a través de una API segura.
    // fetch('https://salesforce.api.com/v1/lead', { method: 'POST', ... }); 

    return NextResponse.json({ message: 'Solicitud enviada. Contacto en breve.' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Fallo al procesar la solicitud.' }, { status: 500 });
  }
}