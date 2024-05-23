<script setup lang="ts">
import { ref,computed } from 'vue';
import BaseBreadcrumb from '~/components/shared/BaseBreadcrumb.vue';
import CasosClientes from '@/components/casos/CasosClientes.vue';

const search = ref('');
const page = ref({ title: 'Listado de casos' });
const breadcrumbs = ref([
    {
        text: 'Listado De Clientes',
        disabled: false,
        href: '/clientes'
    },
    {
        text: 'Listado de casos',
        disabled: true,
        href: ''
    }
]);

</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col
        v-for="index in 10"
        :key="index"
        cols="12" md="4">
            <v-card elevation="10" rounded="md" class="mt-6">
                <CasosClientes/>
            </v-card>
        </v-col>
    </v-row>
</template>
