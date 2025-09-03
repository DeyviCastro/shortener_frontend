import { useQueryClient } from "@tanstack/react-query";

export const CerrarSesion = () => {

    const queryClient = useQueryClient();

    const logout = () => {
        localStorage.removeItem("token")
        queryClient.invalidateQueries({queryKey: ["user"]})
    }

    return (
            <button
              onClick={logout}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 
             focus:outline-none focus:ring-4 focus:ring-blue-300 
             font-medium rounded-full 
             text-xs sm:text-sm md:text-base 
             px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
             text-center me-2 mb-2 
             dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cerrar sesión
            </button>
    )
}
