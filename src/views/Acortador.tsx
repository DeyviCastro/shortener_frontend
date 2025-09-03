import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";
import type { newLink } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createShortLink } from "../api/ShortenerAPI";
import { toast } from "sonner";
import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/20/solid";
import { useCopy } from "../hooks/useCopy";


export const Acortador = () => {

  
  const [second, setsecond] = useState("")
  
  const {copy} = useCopy()
  const ruta = `${import.meta.env.VITE_API_URL}/${second}`

  const initialValues: newLink = {
    originalUrl: "",
  }

  const { register, reset, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation({
    mutationFn: createShortLink,
    onError: () => {
      toast.error("Error al acortar el link")
    },
    onSuccess: (data) => {
      // Refresca la lista de links (si usas useQuery en ObtenerLinks)
      queryClient.invalidateQueries({ queryKey: ["links"] });
      toast.success(data?.msg)
      if (data?.slug) {
        setsecond(data.slug)
      }
      reset()
    },
  })

  const handleLink = (formData: newLink) => {
    mutate(formData);

  }

  return (
    <div className="mt-10 space-y-5">
      <form
        onSubmit={handleSubmit(handleLink)}
        className="w-full max-w-screen mx-auto"
      >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Recortar Link
        </label>

        <div className="relative">
          {/* Ícono a la izquierda */}
          <span className="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
                1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 
                4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </span>

          {/* Input */}
          <input
            type="search"
            className="block w-full h-12 ps-10 pe-28 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="Recorta tu link aquí"
            {...register("originalUrl", {
              required: "El link es requerido",
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                message: "El link debe ser válido"
              }
            })}
          />

          {/* Botón dentro del input */}
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
          >
            Recortar
          </button>
        </div>


        {errors.originalUrl && (
          <ErrorMessage>{errors.originalUrl.message}</ErrorMessage>
        )}
      </form>

      {
        isSuccess && second && (

          <div className=" bg-white p-5 flex items-center justify-center space-x-4">
            <p className=" ">{ruta}
            </p>
            <button 
            onClick={() => copy(ruta)}><ClipboardIcon width={20} className="cursor-pointer"/></button>          
          </div>
        )
      }
    </div>
    
  );
}