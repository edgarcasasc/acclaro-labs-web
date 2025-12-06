import React from 'react';

// Simulación de íconos
const VentasIcon = () => <div className="text-4xl">📈</div>;
const CostosIcon = () => <div className="text-4xl">💸</div>;
const ProdIcon = () => <div className="text-4xl">🏭</div>;
const TechIcon = () => <div className="text-4xl">🔌</div>;

const problemas = [
  {
    titulo: "Ventas y Marketing",
    descripcion: "¿Por qué mis leads se 'enfrían'? Gasto en anuncios, pero no sé qué campaña realmente genera ingresos.",
    icon: <VentasIcon />,
  },
  {
    titulo: "Costos y Operaciones",
    descripcion: "¿Dónde se me está fugando el dinero? Mis gastos, mermas y tiempo extra están fuera de control y no identifico la causa.",
    icon: <CostosIcon />,
  },
  {
    titulo: "Producción y Eficiencia",
    descripcion: "¿Por qué mis pedidos tardan tanto? Tengo cuellos de botella que no logro ver y mis clientes se quejan.",
    icon: <ProdIcon />,
  },
  {
    titulo: "Tecnología",
    descripcion: "Tengo datos en Salesforce, un ERP y Excels por todas partes... pero ninguno se habla entre sí.",
    icon: <TechIcon />,
  },
];

const InformesProblem = () => {
  return (
    // Estilo basado en ProblemSection.tsx: Fondo gris-piedra, acentos Rojo Lacre
    <section className="relative bg-gris-piedra py-20 text-blanco-pergamino">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            ¿Su operación es una 'caja negra'?
          </h2>
          <p className="mt-4 text-xl text-blanco-pergamino/80">
            Usted tiene los datos, pero no tiene las respuestas. Si alguna de estas preguntas le suena familiar, está en el lugar correcto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problemas.map((problema) => (
            // Aplicamos los estilos de acento de problema
            <div 
              key={problema.titulo}
              className="rounded-lg border border-rojo-lacre/50 bg-gray-800/20 p-6 shadow-lg transition-all duration-300 hover:shadow-rojo-lacre/30"
              style={{
                boxShadow: '0 0 15px 0 rgba(255, 50, 50, 0.1)', // Simulación de shadow-glow-red
              }}
            >
              <div className="mb-4">{problema.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold text-rojo-lacre">
                {problema.titulo}
              </h3>
              <p className="text-blanco-pergamino/90">{problema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformesProblem;