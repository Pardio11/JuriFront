<script lang="ts" setup>
import { BriefcaseIcon, } from 'vue-tabler-icons';
import { ref } from "vue";
const skill1 = ref(55);
const skill2 = ref(20);
</script>
<template>

    <v-row>
        <v-col cols="12" md="4">
            <div elevation="10" rounded="md" class="mt-6"
            style="background-image: url('/images/backgrounds/bgCard.png');
            background-position: center;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            ">
                <Banner2/>
            </div>
        </v-col>
        <v-col cols="12" md="4" >
            <v-card elevation="10" rounded="md" class="mt-6">
                <Banner2/>
            </v-card>
          
        </v-col>
        <v-col cols="12" md="4" >
            <v-card elevation="10" rounded="md" class="bg-primary mt-6">
                <Banner2/>
            </v-card>
        </v-col>
    </v-row>
</template>

