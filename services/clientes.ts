import axios, { type AxiosResponse } from "axios"

const API_BASE_URL = "http://127.0.0.1:8000/api/clientes/"

export const fetchClientes = async (token: string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await axios.get(`${API_BASE_URL}`, {
			headers: {
				Authorization: `${token}`,
			},
		})
		return response.data
	} catch (error) {
		throw error
	}
}

export const crearCliente = async (clienteData: any, token: string): Promise<any> => {
	try {
		const response: AxiosResponse<any> = await axios.post(API_BASE_URL, clienteData, {
			headers: {
				Authorization: `${token}`,
			},
		})
		return response.data
	} catch (error) {
		throw error
	}
}



