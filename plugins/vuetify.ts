import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueTablerIcons from "vue-tabler-icons";
//Mock Api data
import "../_mockApis";

import Maska from "maska";
import "vue3-carousel/dist/carousel.css";
import "@/assets/scss/style.scss";

//DragScroll
import { VueDraggableNext } from "vue-draggable-next";

// Table
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";



import {
  BLUE_THEME,
} from "@/theme/LightTheme";


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    //blueprint: md3,
    components: {
      draggable: VueDraggableNext,
      ...components,
    },
    directives,
    theme: {
      defaultTheme: "BLUE_THEME",
      themes: {
        BLUE_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: "md",
        elevation:10
      },

      VTextField: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VTextarea: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VSelect: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VListItem: {
        minHeight: "45px",
      },
      VTooltip: {
        location: "top",
      },
      VBtn: {
        style: "text-transform: capitalize; letter-spacing:0",
        rounded: "md",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.component("EasyDataTable", Vue3EasyDataTable);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueTablerIcons);
  nuxtApp.vueApp.use(Maska);
});
