<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { HeartIcon, PhotoIcon, UserCircleIcon, UsersIcon,GavelIcon,CalendarTimeIcon } from 'vue-tabler-icons';
import profileBg from '/images/backgrounds/profilebg.jpg';
import UserImage from '/images/profile/c2.jpg';

const tab = ref(null);
</script>

<template>
    <v-card elevation="10" class="overflow-hidden pb-5">
        <img :src="profileBg" alt="profile" class="w-100" />
        <div>
            <v-row class="mt-1">
                <v-col cols="12" lg="4" sm="12" class="d-flex justify-center order-sml-first">
                    <div class="text-center top-spacer">
                        <div class="avatar-border">
                            <v-avatar size="100" class="userImage">
                                <img :src="UserImage" width="100" alt="Mathew" />
                            </v-avatar>
                        </div>
                        <h5 class="text-h5 mt-3">Carlos Alberto</h5>
                        <span class="text-h6 font-weight-regular">Pardio Loaiza</span>
                    </div>
                </v-col>
                <v-col cols="12" lg="5" sm="12" class="order-sm-second">
                    <div class="px-4 py-1">
                        <v-row class="justify-center">
                            <v-col cols="4" class="text-center">
                                <FileDescriptionIcon size="20" />
                                <h4 class="text-h4">938</h4>
                                <h6 class="text-h6 font-weight-regular">Documentos</h6>
                            </v-col>
                            <v-col cols="4" class="text-center">
                                <GavelIcon size="20" />
                                <h4 class="text-h4">3,586</h4>
                                <h6 class="text-h6 font-weight-regular">Casos</h6>
                            </v-col>
                            <v-col cols="4" class="text-center">
                                <CalendarTimeIcon size="20" />
                                <h4 class="text-h4">2,659</h4>
                                <h6 class="text-h6 font-weight-regular">Citas</h6>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                
                <v-col cols="12" lg="3" class=" d-flex align-center justify-center justify-lg-center order-sm-third">
                    <div class="d-flex align-center justify-space-between px-10 py-1 gap-3">
                        <v-btn variant="flat" color="error">Eliminar Cliente</v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>
<style lang="scss">
.avatar-border {
    background-image: linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102));
    border-radius: 50%;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    .userImage {
        border: 4px solid rgb(255, 255, 255);
    }
}

.top-spacer {
    margin-top: -95px;
}

.profiletab .v-slide-group__content {
    justify-content: end;
    .v-btn--variant-text .v-btn__overlay {
        background: transparent;
    }
}

@media (max-width: 1023px) {
    .order-sm-second {
        order: 2;
    }
    .order-sml-first {
        order: 1;
    }
    .order-sm-third {
        order: 3;
    }
    .order-sm-last {
        order: 4;
    }
}

.btn-brand-facebook {
    background-color: rgb(24, 119, 242) !important;
    color: rgb(var(--v-theme-surface)) ;
}
.btn-brand-twitter {
    background-color: rgb(29, 161, 242) !important;
    color: rgb(var(--v-theme-surface)) ;
}
.btn-brand-dribbble {
    background-color: rgb(234, 76, 137) !important;
    color: rgb(var(--v-theme-surface)) ;
}
.btn-brand-youtube {
    background-color: rgb(205, 32, 31) !important;
    color: rgb(var(--v-theme-surface)) ;
}
</style>
