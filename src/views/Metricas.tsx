

export const Metricas = () => {
  return (
        <section className="py-20 bg-gray-800">
          <div className="max-w-[85rem] mx-auto px-6 grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-blue-500">99.95%</p>
              <p className="mt-2 text-gray-400">Precisión y rapidez</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5V4H2v16h5v2h10v-2z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-green-500">2,000+</p>
              <p className="mt-2 text-gray-400">Usuarios y proyectos</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-yellow-500">85%</p>
              <p className="mt-2 text-gray-400">Clientes satisfechos</p>
            </div>
          </div>
        </section>
  )
}
