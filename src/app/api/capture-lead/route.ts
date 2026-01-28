import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Desestructuramos, permitiendo que 'crm' o 'source' vengan o no
    const { name, website, email, crm, source } = body;

    console.log(`📝 Recibiendo lead desde [${source || 'desconocido'}]:`, email);

    // 1. Guardar en Supabase (Ahora con los campos nuevos)
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        { 
          full_name: name, 
          website_url: website, 
          email_address: email,
          crm_system: crm || null,        // Nuevo: Guarda el CRM si existe
          source: source || 'chatbot',    // Nuevo: Si no trae source, asume que es el chat
          created_at: new Date().toISOString()
        },
      ])
      .select();

    if (error) {
      console.error("❌ Error DB:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 2. Enviar Email (Notificación interna)
    if (resend) {
      await resend.emails.send({
        from: 'Acclaro Labs <onboarding@resend.dev>',
        to: email, // Al cliente
        subject: 'Auditoría Solicitada',
        html: `<p>Hola ${name}, hemos recibido tu solicitud de auditoría para <strong>${website}</strong>.</p>`
      });
      
      // (Opcional) Email para TI avisando el origen
      // await resend.emails.send({ ... to: tu_email, subject: `Nuevo Lead (${source})` ... })
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}