import axios, { type AxiosResponse } from "axios"
const API_BASE_URL_tipoJuicio = "http://127.0.0.1:8000/api/tiposjuicio/"
const API_BASE_URL_MATERIAS = "http://127.0.0.1:8000/api/materias/"
const API_BASE_URL_ESTADOS = "http://127.0.0.1:8000/api/estadosprocesales/"
const API_BASE_URL_NOMBREABG = "http://127.0.0.1:8000/api/abogados/"

export const obtenerTipoJuicio = async (token: string): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(API_BASE_URL_tipoJuicio, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const obtenerMateria = async (token: string): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(API_BASE_URL_MATERIAS, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const obtenerEstado = async (token: string): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(API_BASE_URL_ESTADOS, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const obtenerAbogado = async (token: string): Promise<any[]> => {
    try {
        const response: AxiosResponse<any> = await axios.get(API_BASE_URL_NOMBREABG, {
            headers: {
                Authorization: token,
            },
        });
        // Extraer solo el nombre y el apellido de cada abogado
        const abogados = response.data.map((abogado: any) => ({
            nombre: abogado.nombres,
        }));
        return abogados;
    } catch (error) {
        throw error;
    }
};
