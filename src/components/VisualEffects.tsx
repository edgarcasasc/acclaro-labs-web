// src/components/VisualEffects.tsx
'use client'; // <-- Importante: Esto lo convierte en Client Component

import dynamic from 'next/dynamic';

const DigitalUniverse = dynamic(() => import('@/components/DigitalUniverse'), {
  ssr: false, // Ahora sí está permitido aquí
  loading: () => <div className="fixed inset-0 bg-slate-950 -z-10" /> 
});

export default function VisualEffects() {
  return <DigitalUniverse />;
}