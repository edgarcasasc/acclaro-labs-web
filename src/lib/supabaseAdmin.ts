import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  // Este error saldrá en la terminal si Next.js no lee el archivo .env.local
  throw new Error("❌ FALTAN VARIABLES DE ENTORNO EN EL SERVIDOR (supabaseAdmin.ts)")
}

// Cliente con permisos totales (Bypass RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})