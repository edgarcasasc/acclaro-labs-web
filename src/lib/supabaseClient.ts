import { createClient } from '@supabase/supabase-js'

// --- ZONA DE PRUEBA DIRECTA (Hardcoding) ---
// Pega aquí tus valores TAL CUAL, entre comillas.
const supabaseUrl = "https://tu-proyecto.supabase.co" 
const supabaseKey = "eyJh...tulla...ve...larga" 

// Validación visual
console.log("------------------------------------------------")
console.log("🛠️ MODO BYPASS ACTIVADO")
console.log("Intentando conectar con URL:", supabaseUrl)
console.log("------------------------------------------------")

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Siguen faltando las variables. Revisa el archivo src/lib/supabaseClient.ts")
}

export const supabase = createClient(supabaseUrl, supabaseKey)