import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

export const useCasoStore = defineStore({
    id: 'Casos',
    state: () => ({
        casos: []
    }),
    getters: {},
    actions: {
        // Fetch followers from action
        async fetchContacts() {
            try {
                const response = await axios.get('/api/casos');
                this.casos = response.data.casos;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    }
});
