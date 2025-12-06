import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, correo, dolor } = body;

    // 1. Validar datos
    if (!nombre || !correo || !dolor) {
      return new NextResponse(JSON.stringify({ message: 'Datos incompletos' }), { status: 400 });
    }

    // 2. Guardar el Lead Calificado en la Base de Datos
    // (Aquí iría tu lógica de Prisma, Supabase, etc.)
    console.log('Lead Calificado Recibido:', { nombre, correo, dolor });

    // 3. Notificar a Ventas
    // ...

    // 4. Responder al Frontend
    return new NextResponse(JSON.stringify({ message: 'Lead recibido' }), { status: 200 });

  } catch (error) {
    console.error('Error en API /api/clarity-audit:', error);
    return new NextResponse(JSON.stringify({ message: 'Error interno del servidor' }), { status: 500 });
  }
}