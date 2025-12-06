// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Idiomas soportados
const LOCALES = ['es', 'en', 'fr'];
const DEFAULT_LOCALE = 'es';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Ignorar archivos estáticos, imágenes, API y archivos de sistema
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logos') ||
    pathname.includes('.') // Archivos con extensión (jpg, css, svg)
  ) {
    return NextResponse.next();
  }

  // 2. Revisar si ya existe una cookie de preferencia
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // 3. Detectar si la URL actual ya tiene un idioma explícito (/en o /fr)
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Si la URL no tiene idioma (es decir, estamos en la raíz o subrutas base)...
  if (pathnameIsMissingLocale) {
    // Si el usuario ya eligió idioma antes, lo respetamos
    if (cookieLocale && cookieLocale !== DEFAULT_LOCALE) {
       // Si prefiere inglés y entra a '/', lo mandamos a '/en'
       return NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, request.url));
    }

    // Si no hay cookie, intentamos detectar el navegador (básico)
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    if (!cookieLocale) {
        if (acceptLanguage.includes('en')) {
            return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
        }
        if (acceptLanguage.includes('fr')) {
            return NextResponse.redirect(new URL(`/fr${pathname}`, request.url));
        }
    }
  }

  // Si ya está en el idioma correcto o es español (default), dejamos pasar
  return NextResponse.next();
}

export const config = {
  // Aplicar a todas las rutas excepto las excluidas arriba
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}