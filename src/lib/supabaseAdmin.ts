import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// MODIFICACIÓN: No lanzamos error si estamos en fase de "build", 
// pero fallará si intentamos usarlo en runtime sin claves.
if (!supabaseUrl || !supabaseServiceKey) {
  // Solo logueamos advertencia en vez de romper el build
  console.warn("⚠️ Advertencia: Faltan variables de Supabase (OK si es durante el Build)")
}

// Creamos el cliente incluso si están vacías para que el build pase
// (Pero dará error si intentas guardar un lead real sin claves)
export const supabaseAdmin = createClient(
  supabaseUrl || "https://placeholder.supabase.co", 
  supabaseServiceKey || "placeholder-key", 
  {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})