import { Testimonios } from "../components/Testimonios";
import { Metricas } from "./Metricas";
import { Link } from "react-router-dom";

export const HomeView = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main id="content" className="flex-grow">
        {/* HEADER */}
        <header className="w-full z-50 text-sm py-3">
          <nav className="max-w-[85rem] mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/vite.svg" alt="logo" className="h-8" />
              <span className="font-bold text-lg">Shortly</span>
            </div>
            <div className="flex items-center gap-4">

              <Link to="/auth/login">
                <button className="text-gray-300 hover:text-white cursor-pointer">
                  iniciar sesion
                </button>
              </Link>


              <Link to="/auth/register"><button className="py-2 px-4 rounded-lg bg-violet-700 hover:bg-violet-600 font-medium cursor-pointer">Registrarse</button></Link>

            </div>
          </nav>
        </header>

        {/* HERO */}
        <section className="relative py-20">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-700 bg-clip-text text-transparent">
              Acorta tus links de forma simple y transparente
            </h1>
            <p className="mt-4 text-gray-300">
              Haz que tus enlaces sean más fáciles de compartir, medir y gestionar.
            </p>

          </div>
        </section>

        {/* MÉTRICAS */}
        <Metricas />

        {/* TESTIMONIOS */}
        <Testimonios />

        {/* CTA FINAL */}
        <section className="py-20 text-center bg-gradient-to-r from-violet-700 to-fuchsia-700">
          <h2 className="text-3xl font-bold">Empieza hoy mismo</h2>
          <p className="mt-3 text-gray-200">
            Optimiza tus enlaces en segundos y lleva tu marca al siguiente nivel.
          </p>

          <Link to={"/auth/register"}>
            <button className="mt-6 px-8 py-4 bg-white text-violet-700 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer">
              Crear cuenta gratis
            </button>
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 py-10 mt-10">
          <div className="max-w-[85rem] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">




          </div>
          <div className="mt-10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Shortly. Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
};
