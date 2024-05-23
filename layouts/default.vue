<script setup>
import { useTheme } from 'vuetify'
import { useCustomizerStore } from '@/utils/customizer';
//Components
import Sidebar from '~/components/nav/Sidebar.vue';
import Header from '~/components/nav/Header.vue';
//Variables
const customizer = useCustomizerStore();
</script>

<template>
  
    <v-locale-provider> 
        <v-app
            :theme="customizer.actTheme"
            :class="[
                customizer.actTheme,
                customizer.mini_sidebar ? 'mini-sidebar' : '',
                customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
                customizer.setBorderCard ? 'cardBordered' : ''
            ]"
        >
             <!---Customizer location right side--->
            <Sidebar v-if="!customizer.setHorizontalLayout" />
            <Header v-if="!customizer.setHorizontalLayout" />
            <v-main>
               <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'maxWidth' : ''">
                        <NuxtPage />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
  </template>
<style>
</style>~/utils/customizer