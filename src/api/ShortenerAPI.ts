import { isAxiosError } from "axios";
import api from "../config/axios";
import type { enlace, Link, newLink } from "../types";

export async function getUser() {
    try {
        const { data } = await api.get<Link[]>('/getLinks')


        return (data)

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}

export async function createShortLink(formData: newLink) {
    try {
        const { data } = await api.post<enlace>('/home', formData)

        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}


export async function deleteLink(formData: string) {
    try {

        const {data} = await api.delete<string>(`/links/${formData}`)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);

        }
    }
}


