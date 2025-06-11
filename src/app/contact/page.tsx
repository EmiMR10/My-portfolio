'use client';
import { motion } from "framer-motion";
// Eliminamos la importación de Image de "next/image"
import { useState } from "react"; // Necesario para el estado del menú móvil del Navbar integrado
// No se importa NavBar, ya que su código está integrado

export default function Contact() {
  // --- Código del Navbar integrado (inicia aquí) ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar integrado */}
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo + nombre del portafolio */}
          <div className="flex lg:flex-1 items-center gap-2">
            <a href="/" className="-m-1.5 p-1.5 flex items-center group">
              <span className="ml-2 text-2xl font-extrabold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                Mi Portafolio
              </span>
            </a>
          </div>

          {/* Botón de menú hamburguesa para móviles (visible solo en pantallas pequeñas) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Menú de navegación para escritorio (oculto en pantallas pequeñas) */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  text-base font-medium transition-all duration-300 px-1 py-1
                  text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Menú móvil (aparece cuando mobileMenuOpen es true) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm px-6 py-6 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="ml-2 text-2xl font-extrabold text-gray-800">Mi Portafolio</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-red-500 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú de navegación"
              >
                <span className="sr-only">Cerrar menú</span>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        -mx-3 block rounded-lg px-3 py-3 text-lg font-semibold leading-7 transition-colors duration-200
                        text-gray-900 hover:bg-gray-100 hover:text-blue-700
                      `}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* --- Código del Navbar integrado (termina aquí) --- */}

      {/* Contenedor principal con imagen de fondo y superposición */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/fondo.png')" }}
      >
        {/* Superposición oscura para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <main className="relative z-10 p-8 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-6 text-white">Contáctame</h1>
          </motion.div>
          <motion.p className="text-lg text-gray-200 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Puedes encontrarme en las siguientes plataformas o enviarme un correo. ¡Estaré encantado de conectar contigo!
          </motion.p>

          <motion.div className="flex justify-center gap-10 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {/* GitHub */}
            <a
              href="https://github.com/EmiMR10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition transform hover:scale-110"
            >
              {/* Se usa <img> en lugar de <Image> para compatibilidad */}
              <img src="/github.png" alt="GitHub" width={60} height={60} className="filter drop-shadow-lg" />
              <span className="mt-3 text-lg font-medium text-white">GitHub</span>
            </a>

           

            {/* Email */}
            <a
              href="mailto:emimr.1011@gmail.com"
              className="flex flex-col items-center hover:opacity-80 transition transform hover:scale-110"
            >
              {/* Se usa <img> en lugar de <Image> para compatibilidad */}
              <img src="/email.png" alt="Email" width={60} height={60} className="filter drop-shadow-lg" />
              <span className="mt-3 text-lg font-medium text-white">Correo</span>
            </a>
          </motion.div>

          {/* Sección del Formulario de Contacto */}
          <motion.div
            className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Envíame un Mensaje</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-200 text-left mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-200 text-left mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="tu.correo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-md font-medium text-gray-200 text-left mb-2">Tu Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </main>
      </div>
    </>
  );
}