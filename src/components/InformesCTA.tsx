'use client'; 

import React, { useState } from 'react';

const InformesCTA = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    dolor: 'No sé mis costos reales.', 
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando...');
    
    try {
      const response = await fetch('/api/clarity-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Gracias! Su auditoría ha sido agendada.');
        setFormData({ nombre: '', correo: '', dolor: 'No sé mis costos reales.' }); 
      } else {
        throw new Error('Error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error en el formulario:', error);
      setStatus('Error. Por favor intente de nuevo.');
    }
  };

  return (
    <section id="cta-final" className="relative bg-azul-zafiro py-24 text-blanco-pergamino">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Deje de adivinar. Empiece a decidir.
        </h2>
        <p className="mt-4 mb-10 text-xl text-blanco-pergamino/80">
          Está a una auditoría gratuita de convertir sus datos dispersos en su activo más rentable.
        </p> {/* <-- ¡CORRECCIÓN AQUÍ! Era </f> */}

        <form 
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg rounded-lg bg-blanco-pergamino p-8 text-left shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-azul-zafiro focus:ring-azul-zafiro"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-800">
                Correo Corporativo
              </label>
              <input
                type="email"
                name="correo"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-azul-zafiro focus:ring-azul-zafiro"
              />
            </div>

            <div>
              <label htmlFor="dolor" className="block text-sm font-medium text-gray-800">
                ¿Cuál es su mayor "dolor" de datos?
              </label>
              <select
                id="dolor"
                name="dolor"
                value={formData.dolor}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-azul-zafiro focus:ring-azul-zafiro"
              >
                <option>No sé mis costos reales.</option>
                <option>Mis ventas son muy lentas.</option>
                <option>Mi producción es ineficiente.</option>
                <option>Mis sistemas no se hablan.</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'enviando...'}
                className="w-full rounded-md bg-oro-antiguo px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-oro-antiguo/90 focus:outline-none focus:ring-2 focus:ring-oro-antiguo focus:ring-offset-2 disabled:opacity-50"
              >
                {status === 'enviando...' ? 'Agendando...' : 'Agendar mi Auditoría de Claridad'}
              </button>
              {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InformesCTA;