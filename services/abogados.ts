import axios, { type AxiosResponse } from "axios"
const API_BASE_URL_ABOGADO = "http://127.0.0.1:8000/api/abogados/"

export const crearAbogado = async (abogadoData: any, token: string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await axios.post(API_BASE_URL_ABOGADO, abogadoData, {
			headers: {
				Authorization: `${token}`,
			},
		})
		return response.data
	} catch (error) {
		throw error
	}
}