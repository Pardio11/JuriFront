<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useCustomizerStore } from '@/utils/customizer';
import sidebarItems from '@/utils/sidebarItem';
import Logo from '../shared/Logo.vue';
import Group from './Group.vue';
import Collapse from './Collapse.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
    <v-navigation-drawer
        left
        v-model="customizer.Sidebar_drawer"
        elevation="0"
        rail-width="75"
        app
        class="leftSidebar bg-primary"
        :rail="customizer.mini_sidebar"
        expand-on-hover width="270"
    >
        
        <v-locale-provider>
        <div class="pa-5">
            <Logo />
        </div>
        </v-locale-provider>

        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar">
            <v-list class="pa-6  bg-primary" density="compact">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <Group :item="item" v-if="item.header" :key="item.title" />
                    <!---If Has Child -->
                    <Collapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
                    <!---Single Item-->
                    <NavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
            </v-list>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
