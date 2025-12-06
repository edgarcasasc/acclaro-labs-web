const config = {
plugins: {
// CAMBIO CLAVE: Le decimos al plugin la ruta exacta de tu config
"@tailwindcss/postcss": {
config: './tailwind.config.ts'
},
"autoprefixer": {},
},
};

export default config;