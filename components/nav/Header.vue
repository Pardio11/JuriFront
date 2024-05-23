<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCustomizerStore } from '@/utils/customizer';
import { useEcomStore } from '@/stores/eCommerce';
// Icon Imports
import { GridDotsIcon, LanguageIcon, SearchIcon, Menu2Icon, BellRingingIcon, ShoppingCartIcon } from 'vue-tabler-icons';
const customizer = useCustomizerStore();
const showSearch = ref(false);
const drawer = ref(false);
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
    showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
    // yes, console.log() is a side effect
    priority.value = newPriority;
});
// count items
const store = useEcomStore();
const getCart = computed(() => {
    return store.cart;
});
</script>

<template>
    <v-app-bar elevation="0" :priority="priority" height="70" class="">
        <v-btn class="hidden-md-and-down custom-hover-primary" icon color="primary" variant="text"
            @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <v-btn class="hidden-lg-and-up " icon variant="flat" @click.stop="customizer.SET_SIDEBAR_DRAWER"
            size="small">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>

    
    </v-app-bar>
</template>
~/utils/customizer