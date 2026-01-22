// src/app/api/capture-lead/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Aquí puedes conectar con tu base de datos (Supabase) o enviar un email
    console.log("Lead recibido en servidor:", body);

    // Validación simple
    if (!body.email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Lead guardado" });
    
  } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}