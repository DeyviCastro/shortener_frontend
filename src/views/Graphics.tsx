import { useQuery } from "@tanstack/react-query"
import { getUser } from "../api/ShortenerAPI"
import { ClickRecharts } from "../components/ClickRecharts";

export const Graphics = () => {

    const { data, isLoading } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 2,
        //   refetchOnWindowFocus: true
    })

    if (isLoading) return "Cargando..."


    const link = data?.map((item) => ({
        slug: item.slug,
        clicks: item.clicks
    }))


    if(link) return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Estadísticas de tus Links</h1>
            <ClickRecharts link={link} />
        </div>
    );
}
