import axios, { type AxiosResponse } from "axios"
const API_BASE_URL_PERFIL = "http://127.0.0.1:8000/api/clientes/"

export const perfil = async (token: string, id: number): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL_PERFIL}${id}`, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
