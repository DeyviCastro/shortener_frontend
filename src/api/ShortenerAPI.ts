import { isAxiosError } from "axios";
import api from "../config/axios";
import type { enlace, Link, newLink } from "../types";

export async function getUser() {
    try {
        const { data } = await api.get<Link[]>('/api/links')


        return (data)

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}

export async function createShortLink(formData: newLink) {
    try {
        const { data } = await api.post<enlace>('/api/links', formData)

        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}


export async function deleteLink(formData: string) {
    try {
        console.log(formData)
        const {data} = await api.delete<string>(`/api/links/${formData}`)
        console.log(data)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}


