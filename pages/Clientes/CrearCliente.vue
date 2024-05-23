<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { HeartIcon, UsersIcon, TrashIcon, UsersGroupIcon, UserPlusIcon } from 'vue-tabler-icons';
import CrearCuentaTab from '~/components/forms/CrearCuentaTab.vue';
import BaseBreadcrumb from '~/components/shared/BaseBreadcrumb.vue';
const searchValue = ref('');
// dropdown data

const page = ref({ title: 'Crear Cliente' });
const breadcrumbs = ref([
    {
        text: 'Listado De Clientes',
        disabled: false,
        href: '/clientes'
    },
    {
        text: 'Crear Cliente',
        disabled: true,
        href: ''
    }
]);

const tab = ref(null);
const items = shallowRef([

    { tab: 'Clientes', icon: UsersGroupIcon, href: '/clientes' },
    { tab: 'Crear Cliente', icon: UserPlusIcon, href: '/clientes/crearcliente' },

]);

</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

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

    <v-container class="pt-4 pa-0">
        <CrearCuentaTab :abogado="false"  />

    </v-container>
</template>