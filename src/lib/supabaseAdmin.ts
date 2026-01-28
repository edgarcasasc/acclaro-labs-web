import { createClient } from '@supabase/supabase-js'

// 1. Leemos las variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// 2. Validación Estricta (Sin "placeholder")
if (!supabaseUrl || !supabaseServiceKey) {
  // Si esto sale en los logs, es que Vercel no tiene las variables configuradas
  throw new Error(`❌ ERROR CRÍTICO: Faltan variables en Vercel. 
    URL: ${supabaseUrl ? 'OK' : 'FALTA'} 
    KEY: ${supabaseServiceKey ? 'OK' : 'FALTA'}`)
}

// 3. Crear cliente
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})