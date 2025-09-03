import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteLink, getUser } from "../api/ShortenerAPI"
import type { Link } from "../types"
import { toast } from "sonner"
import { useCopy } from "../hooks/useCopy"
import { ClipboardIcon } from "@heroicons/react/20/solid"

export const ObtenerLinks = () => {

  const { copy } = useCopy()
  const ruta = import.meta.env.VITE_API_URL

  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 2,
    refetchOnWindowFocus: true
  })

  const convertir = (dato: string) => {
    const fecha = new Date(dato)
    return fecha.toLocaleString()
  }
//eliminar
  const mutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(data)
    },
    onError: () => {
      toast.error("Hubo un error al querer eliminar el link")
    }
  })



  if (data) return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Links
              </th>
              <th scope="col" className="px-6 py-3">
                fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {
            data.map((link: Link) => (
              <tbody key={link._id}>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex">
                    <a href={`${ruta}/${link.slug}`} target="_blank" rel="noopener noreferrer">
                      {`${ruta}/${link.slug}`}
                    </a>
                    <button>
                      <ClipboardIcon onClick={() => copy(`${ruta}/${link.slug}`)} className="w-5 h-5 ml-2 cursor-pointer" />
                    </button>
                  </th>
                  <td className="px-6 py-4">
                    {convertir(link.createdAt)}
                  </td>

                  <td className="px-6 py-4">
                    { link.clicks }
                  </td>

                  <td className="px-6 py-4">
                    <button onClick={() => mutation.mutate(link._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" disabled={mutation.isPending}> Eliminar </button>
                  </td>


                </tr>
              </tbody>
            ))
          }

        </table>
      </div>

    </>
  )
}
