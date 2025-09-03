import { toast } from "sonner";


export const useCopy = () => {
    const copy = async(text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success("Link copiado al portapapeles")
        } catch {
            toast.error("Error al copiar el link")
        }
    }

    return {
        copy
    }
}

