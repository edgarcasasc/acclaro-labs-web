import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | Acclaro Labs',
    description: 'Política de privacidad y manejo de datos de Acclaro Labs.',
    robots: {
        index: true,
        follow: true,
    }
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/4 -right-[10%] w-[40%] h-[40%] rounded-full bg-azul-zafiro/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-rojo-lacre/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl px-6 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors"
                >
                    <ArrowLeft size={16} /> Volver al Inicio
                </Link>

                <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">Política de Privacidad</h1>
                    <div className="prose prose-invert prose-slate max-w-none">
                        <p className="text-slate-300">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introducción</h2>
                        <p className="text-slate-400 mb-6">
                            En Acclaro Labs, respetamos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Información que recopilamos</h2>
                        <p className="text-slate-400 mb-6">
                            Podemos recopilar información sobre usted de diversas maneras. La información que podemos recopilar a través de nuestro sitio web incluye:
                        </p>
                        <ul className="list-disc pl-6 text-slate-400 mb-6 space-y-2">
                            <li><strong>Datos Personales:</strong> Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono que usted nos proporciona voluntariamente al contactarnos.</li>
                            <li><strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, su tipo de navegador, su sistema operativo y sus tiempos de acceso.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Cómo utilizamos su información</h2>
                        <p className="text-slate-400 mb-6">
                            Tener información precisa nos permite proporcionarle una experiencia fluida, eficiente y personalizada. Utilizamos la información recopilada sobre usted a través del Sitio Web para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-400 mb-6 space-y-2">
                            <li>Responder a sus solicitudes de atención al cliente y evaluar sus necesidades (como Auditorías y Lead Magnets).</li>
                            <li>Mejorar nuestra eficiencia operativa y desarrollo de estrategias de consultoría.</li>
                        </ul>

                        <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/20 rounded-xl">
                            <p className="text-sm text-slate-400 italic">
                                * Nota: Este es un documento temporal generado (Placeholder). Asegúrese de revisar y reemplazar este texto con las políticas legales específicas y aprobadas de Acclaro Labs antes de realizar campañas formales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
