<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '~/components/shared/BaseBreadcrumb.vue';
// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';

const page = ref({ title: 'Perfil de Carlos' });
const breadcrumbs = ref([
    {
        text: 'Listado De Clientes',
        disabled: false,
        href: '/clientes'
    },
    {
        text: 'Perfil de Carlos',
        disabled: true,
        href: ''
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <ProfileBanner />
    <v-row class="mt-4">
        <v-col cols="12">
            <IntroCard />
        </v-col>
        <v-col cols="12">
            <BestSellingProducts />
        </v-col>
        <!--  <v-col cols="12">
            <v-card elevation="10">
        <AppBaseCard>
            <template v-slot:leftpart> <NotesListing /></template>
<template v-slot:rightpart><NotesContent /> </template>

<template v-slot:mobileLeftContent><NotesListing /> </template>
</AppBaseCard>
</v-card>
</v-col> -->
        <v-col cols="12">
            <CitasComponent />
        </v-col>
        <v-col cols="12">
            <PaymentGateways />
        </v-col>


     
    </v-row>
</template>
