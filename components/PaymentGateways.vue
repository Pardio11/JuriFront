<script setup lang="ts">
import { paymentGateways } from '@/_mockApis/components/dashboard/ecommerceData';
import { DownloadIcon } from 'vue-tabler-icons';
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Documentos Subidos</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Platform For Income</v-card-subtitle>
            <v-row>
                <v-col cols="2" md="4" class="d-flex align-center mt-6" v-for="list in paymentGateways" :key="list.title">
                    <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
                        <img :src="list.img" alt="icon" width="25" />
                    </v-avatar>
                    <v-row >
                        <v-col cols="7" >
                            <div class="pl-4 ">
                        <h5 class="text-h6">{{ list.title }}</h5>
                       <!--  <h6 class="text-subtitle-1 textSecondary mt-1">{{ list.subtitle }}</h6> -->
                    </div>
                        </v-col>
                        <v-col cols="5" >
                            <!-- <div :class="'ml-10 font-weight-bold text-subtitle-1 text-medium-' + list.disable">{{ list.rank }}</div> -->
                            <DownloadIcon size="20" />
                        </v-col>
                    </v-row>
                    
                </v-col>
            </v-row>
            <div class="mt-sm-10 mt-5">
                
                <v-btn class="mt-sm-15 mt-10" block variant="outlined" color="primary">Ver todos los documentos</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
