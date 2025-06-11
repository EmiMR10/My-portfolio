'use client';

import { motion } from "framer-motion";
// No se importa Image, ya que se usará <img> para la foto de perfil
import { useState } from "react"; // Necesario para el estado del menú móvil del Navbar integrado

export default function About() {
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

        <main className="relative z-10 p-8 max-w-3xl mx-auto text-center rounded-xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-white">Sobre Mí</h1>
          </motion.div>

          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Se usa <img> para la foto de perfil */}
            <img
              src="/perfil.jpg" // Asegúrate de que esta imagen exista en la carpeta /public
              alt="Foto de perfil"
              width={180}
              height={180}
              className="rounded-full border-4 border-indigo-500 shadow-lg"
            />
          </motion.div>

          <motion.p className="text-lg text-gray-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Soy estudiante de la <strong>Universidad Vasco de Quiroga (UVAQ)</strong>, actualmente cursando el <strong>4to semestre</strong> de la carrera de <strong>Ingeniería en Sistemas Computacionales</strong>.
          </motion.p>

          <motion.p className="text-lg text-gray-200 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            He participado en <strong>tres concursos de programación</strong>, desarrollando habilidades en lógica computacional y resolución de problemas complejos.
          </motion.p>

          <motion.p className="text-lg text-gray-200 mt-4 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            Me apasiona el desarrollo de software, la tecnología y aprender cosas nuevas todos los días. Siempre busco nuevas oportunidades para crecer y aplicar mis conocimientos en proyectos desafiantes.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <h2 className="text-3xl font-semibold text-white mb-6">Mis Habilidades</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center" // Grid responsivo ajustado para descripciones
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">HTML</h3>
              <p className="text-sm text-gray-200">Dominio en la estructuración de contenido para la web, creando la base de cada página.</p>
            </div>
           
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">Next.js</h3>
              <p className="text-sm text-gray-200">Experiencia en el desarrollo de aplicaciones React optimizadas para producción, con renderizado del lado del servidor y generación estática.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">Java</h3>
              <p className="text-sm text-gray-200">Desarrollo de aplicaciones robustas y escalables, tanto de escritorio como empresariales.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">Python</h3>
              <p className="text-sm text-gray-200">Versatilidad en el scripting, desarrollo web (backend) y análisis de datos.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">Git</h3>
              <p className="text-sm text-gray-200">Control de versiones eficiente para la colaboración en equipo y el seguimiento de cambios en el código.</p>
            </div>
            
          
          </motion.div>
        </main>
      </div>
    </>
  );
}