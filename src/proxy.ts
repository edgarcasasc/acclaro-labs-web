// src/proxy.ts  <--- Cambio de nombre de archivo
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['es', 'en', 'fr'];
const DEFAULT_LOCALE = 'es';

// Se cambia el nombre de la función de 'middleware' a 'proxy'
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Ignorar archivos internos y estáticos (Optimizado)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/logos') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Leer cookie de preferencia
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // 3. Verificar si falta el idioma en la URL
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // A. Usuario con cookie previa
    if (cookieLocale && cookieLocale !== DEFAULT_LOCALE) {
      const url = new URL(`/${cookieLocale}${pathname}`, request.url);
      return NextResponse.redirect(url, 307);
    } 
    
    // B. Usuario nuevo (Detección por navegador)
    if (!cookieLocale) {
      const acceptLanguage = request.headers.get('accept-language') || '';
      
      if (acceptLanguage.includes('en')) {
        return NextResponse.redirect(new URL(`/en${pathname}`, request.url), 307);
      }
      if (acceptLanguage.includes('fr')) {
        return NextResponse.redirect(new URL(`/fr${pathname}`, request.url), 307);
      }
    }
  }

  // 4. Respuesta final con limpieza de caché para redirecciones
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store, must-revalidate');
  return response;
}

// El matcher se mantiene igual
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}