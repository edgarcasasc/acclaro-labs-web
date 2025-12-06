// src/app/api/descargar-pdf/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lee la llave de forma SEGURA desde .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json(); // Obtiene el email del formulario
    const pdfUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blueprint_acclarolabs.pdf`;

    // Envía el correo
    await resend.emails.send({
      from: 'Acclaro Labs <onboarding@resend.dev>', // Email de prueba de Resend
      to: [email], // El email del usuario
      subject: 'Aquí está tu Blueprint de Acclaro Labs',
      html: `
        <div>
          <h1>¡Gracias por tu interés!</h1>
          <p>Aquí tienes el enlace para descargar nuestro manifiesto:</p>
          <a href="${pdfUrl}" target="_blank">Descargar el PDF</a>
          <p>Atentamente,<br />El equipo de Acclaro Labs</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}