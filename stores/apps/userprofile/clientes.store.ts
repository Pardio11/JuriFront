import { defineStore } from "pinia"
import { fetchClientes } from "../../../services/clientes"

interface ClienteCard {
	nombre: string
	iniciales: string
	RFC: string
}

interface Cliente {
	id: number
	nombres: string
	apellido_paterno: string
	apellido_materno: string
	curp: string
	rfc: string
	genero: string
	fecha_nacimiento: string
	correo: string
	telefono: string
	lugar_nacimiento: string
	domicilio_calle: string
	domicilio_num_ext: string
	domicilio_num_int: string
	domicilio_colonia: string
	domicilio_municipio: string
	domicilio_estado: string
	domicilio_pais: string
	domicilio_codigo_postal: string
	usuario: string // You can define a specific type for usuario if needed
}
type ClientesState = Cliente[]

export const useClientesStore = defineStore({
	id: "clientes",
	state: (): { clientes: ClientesState, clienteActual: Cliente | null  } => ({
		clientes: [],
		clienteActual: null
	}),
	getters: {
		filteredClientesCard(): ClienteCard[] {
			return this.clientes.map((cliente) => ({
				nombre: cliente.nombres + " " + cliente.apellido_paterno + " " + cliente.apellido_materno,
				iniciales: cliente.nombres.charAt(0) + cliente.apellido_paterno.charAt(0),
				RFC: cliente.rfc, Id: cliente.id
			}))
		},
	},
	actions: {
		async fetchClientes(token: string) {
			try {
				let data
				if (token != null) {
					data = await fetchClientes(token)
					this.clientes = data.clientes
				}
			} catch (error) {
				console.error("Error fetching data:", error)
			}
		},
		setClienteActualById(id: number) {
            const cliente = this.clientes.find(cliente => cliente.id === id);
            if (cliente) {
                this.clienteActual = cliente
            } else {
                this.clienteActual = null;
            }
        },
	},
})
