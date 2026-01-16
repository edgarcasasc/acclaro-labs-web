import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, website, email } = body;

    // 1. Validación básica
    if (!email || !website) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    // 2. AQUÍ: Guardar en Base de Datos (Supabase/Firebase/MongoDB)
    // o enviar a tu CRM (HubSpot/Salesforce)
    console.log("Lead Capturado:", { name, website, email });

    // 3. Respuesta de éxito
    return NextResponse.json({ success: true, message: 'Lead procesado' });

  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}