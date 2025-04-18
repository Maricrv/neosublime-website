// Proyecto React + Tailwind inspirado en estilo Wix para NeoSublime

import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from './assets/images/logo.jpg';
import decor1 from './assets/images/decor1.png';
import decor2 from './assets/images/decor2.png';


function App() {
  const [modalImg, setModalImg] = useState(null);

  const productos = [
    {
      img: '/productos/taza1.png',
      title: 'Taza Feliz día Mamá (11 onzas)',
      desc: 'Con nombre y frase Feliz día Mamá',
      link: 'Hola!%20Quiero%20pedir%20la%20taza%20Feliz%20día%20Mamá'
    },
    {
      img: '/productos/taza2.png',
      title: 'Taza Personalizada',
      desc: 'Personaliza tu mensaje + fotos',
      link: 'Hola!%20Quiero%20pedir%20taza%20personalizada%20con%20mensaje%20y%20fotos'
    },
    {
      img: '/productos/tomatodo.jpg',
      title: 'Skinny Tumbler (20 onzas)',
      desc: 'Incluye taza + cuadro + sticker personalizado',
      link: 'Hola!%20Me%20interesa%20el%20combo%20del%20Día%20de%20la%20Madre'
    },
    {
      img: '/productos/llavero.png',
      title: 'Llavero con Inicial',
      desc: 'Letras con resina y glitter a tu elección',
      link: 'Hola!%20Quiero%20un%20llavero%20personalizado'
    },
    {
      img: '/productos/portavaso.jpg',
      title: 'Set de Posavaso Circular',
      desc: 'Con frases motivadoras o diseño a elección',
      link: 'Hola!%20Quiero%20el%20set%20de%20portavasos'
    },
    {
      img: '/productos/cuadros.png',
      title: 'Cuadro Metálico Personalizado',
      desc: 'Con frase divertida o diseño único',
      link: 'Hola!%20Estoy%20interesado%20en%20un%20cuadro%20personalizado'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Banner con fondo completo */}
      <section id="inicio" className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${decor1})` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-2xl">
          <img src={logo} alt="NeoSublime logo" className="h-20 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Regalos que hablan por ti 💝</h1>
          <p className="mb-4">Detalles personalizados desde Huancayo. Hechos con amor en cada diseño.</p>
          <a href="https://wa.me/51912073536" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg">
            Hacer pedido por WhatsApp
          </a>
        </div>
      </section>

      <main className="p-6 space-y-16 bg-pink-50">
        {/* Frase decorativa */}
        <section className="text-center py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600">“Cada regalo es una historia. Creamos la tuya con arte.”</h2>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="text-center">

          <h2 className="text-2xl font-bold text-pink-600 mb-2">Catálogo – Día de la Madre</h2>
          <p className="text-gray-600 mb-6">Explora nuestros productos personalizados diseñados con amor 💕</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
            {productos.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 text-center">
                <div className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer" onClick={() => setModalImg(item.img)}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <h3 className="text-lg font-semibold text-pink-600 mt-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.desc}</p>
                <a
                  href={`https://wa.me/51912073536?text=${item.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>


        <section className="text-center py-8"> 
            <h2 className="text-2xl sm:text-2xl font-bold text-pink-600">
              “Diseñamos emociones. Personalizamos momentos que se quedan para siempre.”
            </h2>
            <div className="mt-6">
              <a
                href="/catalogo-dia-madre.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 mb-6"
              >
                Ver catálogo completo (PDF)
              </a>
            </div>
          </section>



       {/* Imagen decorativa con frase motivacional */}
        <section className="text-center">
        <img
        src={decor2}
        alt="Decoración inspiradora"
        className="w-full max-w-md sm:max-w-xl h-auto mx-auto rounded-xl shadow-lg mb-4"
        />

          <p className="text-lg italic text-pink-600">“Detalles únicos que despiertan sonrisas.”</p>
        </section>

        {/* Sobre nosotros */}
        <section id="nosotros" className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Sobre Nosotros</h2>
          <p className="text-gray-700">Somos un emprendimiento en Huancayo dedicado a crear productos personalizados con sublimación y resina epóxica. Nos apasiona convertir tus ideas en detalles inolvidables.</p>
        </section>

        {/* Contacto */}
        <section id="contacto" className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-600">Contacto</h2>
          <p>📍 Huancayo, Perú</p>
          <p>📱 WhatsApp: +51 912 073 536</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://instagram.com/NeoSublimeHuancayo" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/NeoSublimeHuancayo" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/51912073536" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </section>

        {modalImg && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Vista ampliada" className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg" />
          </div>
        )}
      </main>

      <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t">
        © 2025 NeoSublime – Espacio Creativo
      </footer>
    </div>
  );
}

export default App;