// ===============================|| Blank Layout ||=============================== //
<script setup lang="ts">
import { useCustomizerStore } from '@/utils/customizer';
const customizer = useCustomizerStore();
</script>
<template>
  <!-----LTR LAYOUT------->
  <v-locale-provider>
    <v-app :theme="customizer.actTheme">
      <NuxtPage />
    </v-app>
  </v-locale-provider>
</template>


~/utils/customizer