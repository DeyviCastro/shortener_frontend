import { Navigate, Outlet } from "react-router-dom";
import NavigationTabs from "../components/NavigationTabs";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/ShortenerAPI";
import { Toaster } from "sonner";
import { CerrarSesion } from "../components/CerrarSesion";


export const AppLayout = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
    retry: 2,
    refetchOnWindowFocus: false
  })

  if (isLoading) return "Cargando..."

  if (isError) {
    return <Navigate to="/auth/login" />
  }


  if (data) return (
    <>

      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-slate-800 p-10">
          <div className="flex items-center justify-between flex-1 flex-wrap ">
            <div className="flex items-center">
              <img src="/vite.svg" alt="" />
              <h1 className="text-center font-bold sm:text-xl md:text-3xl text-white">Acortador de Links</h1>
            </div>

            <CerrarSesion />

          </div>
        </header>

        {/* Contenido principal */}
        <div className="bg-slate-200 flex-1">
          <main className="mx-auto max-w-5xl p-10 md:p-0">
            <NavigationTabs />
            <Outlet />
          </main>
        </div>

        <Toaster position="top-right" />
      </div>
    </>
  )
}
