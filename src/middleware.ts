// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['es', 'en', 'fr'];
const DEFAULT_LOCALE = 'es';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Ignorar archivos internos y estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logos') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Leer cookie de preferencia (La "Memoria" del usuario)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // 3. Verificar si la URL actual NO tiene idioma (ej: / o /servicios...)
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // --- LÓGICA DE REDIRECCIÓN ---
    
    // A. Si el usuario YA eligió idioma (tiene cookie)
    if (cookieLocale) {
      // Si prefiere inglés/francés, lo mandamos allá
      if (cookieLocale !== DEFAULT_LOCALE) {
        const url = new URL(`/${cookieLocale}${pathname}`, request.url);
        // Importante: Usamos redirect 307 (Temporal) para que no se cachee permanentemente
        return NextResponse.redirect(url);
      }
      // Si prefiere español (default), DEJAMOS PASAR a la raíz.
    } 
    
    // B. Si NO hay cookie (Primera visita), detectamos navegador
    else {
      const acceptLanguage = request.headers.get('accept-language') || '';
      
      if (acceptLanguage.includes('en')) {
        return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
      }
      if (acceptLanguage.includes('fr')) {
        return NextResponse.redirect(new URL(`/fr${pathname}`, request.url));
      }
    }
  }

  // 4. RESPUESTA FINAL
  // Añadimos headers para evitar que el navegador cachee las redirecciones agresivamente
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store, must-revalidate');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}