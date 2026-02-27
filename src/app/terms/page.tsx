import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos de Servicio | Acclaro Labs',
    description: 'Términos y condiciones de uso de los servicios de Acclaro Labs.',
    robots: {
        index: true,
        follow: true,
    }
};

export default function TermsOfServicePage() {
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
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">Términos de Servicio</h1>
                    <div className="prose prose-invert prose-slate max-w-none">
                        <p className="text-slate-300">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Aceptación de los Términos</h2>
                        <p className="text-slate-400 mb-6">
                            Al acceder y utilizar el sitio web de Acclaro Labs, usted acepta estar legalmente obligado por los presentes Términos de Servicio y por todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Licencia de Uso</h2>
                        <p className="text-slate-400 mb-6">
                            Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Acclaro Labs para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:
                        </p>
                        <ul className="list-disc pl-6 text-slate-400 mb-6 space-y-2">
                            <li>Modificar o copiar los materiales;</li>
                            <li>Usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
                            <li>Intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de Acclaro Labs;</li>
                            <li>Eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales;</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Limitaciones</h2>
                        <p className="text-slate-400 mb-6">
                            En ningún caso Acclaro Labs o sus proveedores serán responsables de ningún daño (incluidos, entre otros, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en el sitio web de Acclaro Labs, incluso si Acclaro Labs o un representante autorizado de Acclaro Labs ha sido notificado verbalmente o por escrito de la posibilidad de tal daño.
                        </p>

                        <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/20 rounded-xl">
                            <p className="text-sm text-slate-400 italic">
                                * Nota: Este es un documento temporal generado (Placeholder). Asegúrese de revisar y reemplazar este texto con los Términos de Servicio legales corporativos específicos y aprobados de Acclaro Labs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
