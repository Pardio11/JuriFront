<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { UsersGroupIcon, UserPlusIcon } from 'vue-tabler-icons';
import { perfil } from '@/services/perfil'; // Importa la función para obtener la información del cliente

import BaseBreadcrumb from '~/components/shared/BaseBreadcrumb.vue';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import { useClientesStore } from '@/stores/apps/userprofile/clientes.store';

const store = useClientesStore();
const { token } = useAuth()

onMounted(() => {
    if (token.value != null)
        store.fetchClientes(token.value);
});

const getClientes: any = computed(() => {
    return store.filteredClientesCard;
});
const searchValue = ref('');
const page = ref({ title: 'Listado De Clientes' });

const filteredCards = computed(() => {
    return getClientes.value.filter((card: any) => {
        console.log("card:")
        console.log(card)
        return card.nombre.toLowerCase().includes(searchValue.value.toLowerCase());
    });
});

const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Listado De Clientes',
        disabled: true,
        href: ''
    }
]);

const tab = ref(null);
const items = shallowRef([

    { tab: 'Clientes', icon: UsersGroupIcon, href: '/clientes' },
    { tab: 'Crear Cliente', icon: UserPlusIcon, href: '/clientes/crearcliente' },
]);

const verInformacionCliente =  (id: number) => {
    store.setClienteActualById(id)
};



</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <!-- <ProfileBanner /> -->
    <v-row>
        <v-col md="12" class="order-sm-last">
            <v-tabs v-model="tab" color="primary" dark class="profiletab bg-grey100">
                <v-tab v-for="item in items" :key="item.tab" :to="item.href">
                    <component :is="item.icon" size="18" stroke-width="1.5" class="mr-2"></component>
                    {{ item.tab }}
                </v-tab>
            </v-tabs>
        </v-col>
    </v-row>
    <v-row class="justify-content-end mt-5">
        <v-col cols="12">
            <div class="d-sm-flex align-center mb-5">
                <h3 class="text-h3">
                    Clientes
                    <v-chip size="small" class="ml-2 elevation-0" variant="elevated" color="secondary">{{
        filteredCards.length }}</v-chip>
                </h3>
                <v-sheet width="250" class="ml-0 ml-sm-auto mt-3 mt-sm-0">
                    <v-text-field color="primary" hide-details variant="outlined" placeholder="Buscar Cliente"
                        density="compact" prepend-inner-icon="mdi-magnify" v-model="searchValue">
                    </v-text-field>
                </v-sheet>
            </div>

            <v-row>
                <v-col cols="12" md="4" sm="6" v-for="(card, i) in filteredCards" :key="i">
                    <v-card elevation="10">
                        <v-card-text>
                            <div class="d-flex align-center gap-3">
                                <v-avatar size="40" style="background-color: #5FC6FF">
                                    <span class="text-indigo-darken-2 headline">{{ card.iniciales }}</span>
                                </v-avatar>
                                <div class="w-50">
                                    <h6 class="text-h6">{{ card.nombre }}
                                    </h6>
                                    <span class="text-truncate d-flex align-center gap-2 mt-1">
                                        <IdIcon size="14" />
                                        <span class="text-subtitle-2">{{ card.RFC }}</span>
                                    </span>
                                </div>
                                <div class="ml-auto">
                                    <v-btn variant="outlined" color="primary" 
                                    @click="verInformacionCliente(card.Id)" to="/clientes/perfil">
                                        Ver Info
                                    </v-btn>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>