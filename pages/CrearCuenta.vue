<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "~/components/shared/BaseBreadcrumb.vue";

/*import tabler icons*/
import {
  UserCircleIcon,
} from "vue-tabler-icons";

//components
import CrearCuentaTab from "@/components/forms/CrearCuentaTab.vue";

/*tab*/
const tab = ref(null);
// theme breadcrumb
const page = ref({ title: "Crear Usuario" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "/",
  },
  {
    text: "Crear Usuario",
    disabled: true,
    href: "",
  },
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row class="justify-center">
    <!--Account Settings tabs-->
    <v-col cols="12" md="12">
      <v-card elevation="3" class=" " rounded="md">
        <v-tabs v-model="tab" bg-color="transparent" min-height="70" height="70" color="primary">
          <v-tab value="Account" class="text-medium-emphasis">
            <UserCircleIcon class="mr-2" size="20" />Cliente
          </v-tab>
          <v-tab value="Cliente" class="text-medium-emphasis">
            <UserCircleIcon class="mr-2" size="20" />Abogado
          </v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
          <v-window v-model="tab">
            <v-window-item value="Account">
              <CrearCuentaTab :abogado="false" />
            </v-window-item>
            <v-window-item value="Cliente">
              <CrearCuentaTab :abogado="true" />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
