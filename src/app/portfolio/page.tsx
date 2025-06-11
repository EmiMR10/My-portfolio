'use client';
import { motion } from "framer-motion";
// Eliminamos la importación de Image, ya que no se usarán imágenes en los proyectos
import { useState } from "react"; // Necesario para el estado del menú móvil del Navbar integrado
// No se importa NavBar, ya que su código está integrado

export default function Portfolio() {
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

        <main className="relative z-10 p-8 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-6 text-white">Mi Portafolio de Proyectos</h1>
          </motion.div>
          <motion.p className="text-lg text-gray-200 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Explora algunos de los proyectos que he desarrollado. Cada uno representa una oportunidad para aplicar y expandir mis habilidades en el desarrollo de software.
          </motion.p>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Definimos los proyectos con sus propiedades */}
            {[{
                name: "Mi Primera Página Web",
                description: "Este es el portafolio personal que estás viendo actualmente, desarrollado con Next.js y Tailwind CSS, mostrando mis habilidades en desarrollo frontend.",
                githubUrl: "https://github.com/EmiMR10/mi-portafolio",
              },
              {
                name: "Sistema de Contabilidad para Autolavado",
                description: "Un sistema diseñado para gestionar las operaciones contables de un autolavado, incluyendo registro de ingresos, gastos y reportes diarios.",
                githubUrl: "https://github.com/EmiMR10/sistema-contabilidad-autolavado",
              },
              {
                name: "Juego de Buscaminas",
                description: "Implementación del clásico juego Buscaminas con lógica de juego, interfaz de usuario interactiva y diferentes niveles de dificultad.",
                githubUrl: "https://github.com/EmiMR10/juego-buscaminas",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-6 flex flex-col items-center text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {/* Se eliminó el div de la imagen y la importación de Image */}
                <h3 className="text-2xl font-semibold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 text-md mb-6 flex-grow">{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-500 transition transform hover:scale-105"
                >
                  Ver en GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
