// src/proxy.ts  <--- Cambio de nombre de archivo
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['es', 'en', 'fr'];
const DEFAULT_LOCALE = 'es';

// Se cambia el nombre de la función de 'middleware' a 'proxy'
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // === DICCIONARIO DE ENRUTAMIENTO INTELIGENTE ===
  // Relaciona la ruta original (Español) con su traducción exacta.
  const routeMap: Record<string, { en: string; fr: string }> = {
    '/contacto': { en: '/contact', fr: '/contact' },
    '/blog': { en: '/blog', fr: '/blog' },
    '/servicios/consultoria-crm': { en: '/services/crm-consulting', fr: '/services/conseil-crm' },
    '/servicios/desarrollo-web': { en: '/services/web-development', fr: '/services/developpement-web' },
    '/servicios/estrategia-contenido': { en: '/services/content-strategy', fr: '/services/strategie-contenu' },
    '/servicios/informes-ia': { en: '/services/bi-ai-reporting', fr: '/services/rapports-bi-ia' },
  };

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
    // Función helper para obtener la ruta traducida o hacer fallback a la original
    const getTranslatedPath = (targetLocale: 'en' | 'fr', currentPath: string) => {
      // Limpiamos la barra final si existe para hacer coincidir con el diccionario
      const cleanPath = currentPath.endsWith('/') && currentPath !== '/'
        ? currentPath.slice(0, -1)
        : currentPath;

      const routeKeys = Object.keys(routeMap);

      for (const esPath of routeKeys) {
        if (cleanPath === esPath || cleanPath.startsWith(`${esPath}/`)) {
          // Reemplazamos la porción en español por la traducción
          return currentPath.replace(esPath, routeMap[esPath][targetLocale]);
        }
      }
      return currentPath; // Si no está en el diccionario, la dejamos igual (ej. /dashboard)
    };

    // A. Usuario con cookie previa
    if (cookieLocale && cookieLocale !== DEFAULT_LOCALE) {
      const translatedPath = getTranslatedPath(cookieLocale as 'en' | 'fr', pathname);
      const url = new URL(`/${cookieLocale}${translatedPath}`, request.url);
      return NextResponse.redirect(url, 307);
    }

    // B. Usuario nuevo (Detección por navegador)
    if (!cookieLocale) {
      const acceptLanguage = request.headers.get('accept-language') || '';

      if (acceptLanguage.includes('en')) {
        const translatedPath = getTranslatedPath('en', pathname);
        return NextResponse.redirect(new URL(`/en${translatedPath}`, request.url), 307);
      }
      if (acceptLanguage.includes('fr')) {
        const translatedPath = getTranslatedPath('fr', pathname);
        return NextResponse.redirect(new URL(`/fr${translatedPath}`, request.url), 307);
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