// src/app/api/descargar-pdf/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// --- PASO 1: Guardias de Seguridad (Prevenir fallo del build) ---
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  // Si la clave NO existe, lanzamos un error que no sea el de Resend, 
  // para que el compilador pase, pero el endpoint fallará en tiempo de ejecución.
  console.error("CRÍTICO: RESEND_API_KEY no está configurada en Vercel.");
}

const resend = new Resend(RESEND_KEY);
// --- FIN DE GUARDAS ---

export async function POST(request: Request) {
  try {
    // 1. Validar la clave de entorno primero
    if (!RESEND_KEY) {
      return NextResponse.json({ error: 'Fallo de configuración. Clave de email ausente.' }, { status: 500 });
    }

    const { email } = await request.json();
    
    // Usamos el dominio Vercel que ya se configuró o la URL del dominio real
    // Reemplaza [acclarolabs.com] por tu dominio final
    const baseDomain = process.env.NEXT_PUBLIC_VERCEL_URL || 'acclarolabs.com'; 
    const pdfUrl = `https://${baseDomain}/blueprint_acclarolabs.pdf`;

    // 2. Envía el correo
    await resend.emails.send({
      // CORRECCIÓN: Usar un email de tu dominio (debes verificarlo en Resend)
      from: 'Acclaro Labs <no-reply@acclarolabs.com>', 
      to: [email],
      subject: 'Aquí está tu Blueprint de Claridad de Acclaro Labs',
      html: `
        <div>
          <h1>¡Gracias por tu interés!</h1>
          <p>Tu manifiesto está listo para descargar aquí:</p>
          <a href="${pdfUrl}" target="_blank">Descargar el PDF</a>
          <p>Atentamente,<br />El equipo de Acclaro Labs</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado' }, { status: 200 });

  } catch (error) {
    console.error("Fallo de la API de descarga de PDF:", error);
    return NextResponse.json({ error: 'Fallo interno del servidor.' }, { status: 500 });
  }
}