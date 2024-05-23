<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { HeartIcon, UsersIcon, TrashIcon, BriefcaseIcon } from 'vue-tabler-icons';

import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';

import { useFrinedsStore } from '@/stores/apps/userprofile/friends';

const store = useFrinedsStore();

onMounted(() => {
    store.fetchFrineds();
});

const getfriends: any = computed(() => {
    return store.friends;
});
const searchValue = ref('');
// dropdown data
const actionDD = ref([
    { title: 'Favorite', icon: HeartIcon },
    { title: 'Edit Friend List', icon: UsersIcon },
    { title: 'Remove', icon: TrashIcon }
]);
const page = ref({ title: 'Social Profile' });

const filteredCards = computed(() => {
    return getfriends.value.filter((card: any) => {
        return card.name.toLowerCase().includes(searchValue.value.toLowerCase());
    });
});

const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Social Profile',
        disabled: true,
        href: ''
    }
]);
</script>

<template>

    <v-row class="mt-4">
        <v-col cols="12">
            <h4 class="text-h4">Casos</h4>
        </v-col>
    </v-row>
    <v-row> <!-- Set align="stretch" on the v-row to make all v-cols have the same height -->
        <v-col cols="12" md="5" sm="6" v-for="(card, i) in filteredCards" :key="i">
            <v-card elevation="10" class="card-hover h-100 d-flex flex-column">
                <v-card-item class="text-center">
                    <v-avatar size="50" class="userImage" style="background-color: #F2F6FA;">
                        <BriefcaseIcon size="21" />
                    </v-avatar>
                    <h4 class="text-h8 mt-3">{{ card.name }}</h4>
                    <span class="d-block gap-2 text-subtitle-2 mt-2 text-center">
                        {{ card.role }}
                    </span>
                </v-card-item>
                <v-spacer></v-spacer>
                <v-divider />
                <v-sheet class="bg-grey100 px-4 py-2 d-flex flex-column align-start justify-center gap-2 mt-auto">
                    <div class="d-flex align-end justify-center gap-1">
                        <h8 class="text-subtitle-1">Actor:</h8>
                        <p class="text-subtitle-2">Jesus</p>
                    </div>
                    <div class="d-flex align-end justify-center gap-1">
                        <h8 class="text-subtitle-1">Demandado:</h8>
                        <p class="text-subtitle-2">Pedro</p>
                    </div>
                </v-sheet>
            </v-card>
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped>
.text-facebook {
    color: rgb(24, 119, 242) !important;
}

.text-instagram {
    color: rgb(215, 51, 109) !important;
}

.text-github {
    color: rgb(0, 96, 151) !important;
}

.text-twitter {
    color: rgb(28, 156, 234) !important;
}
</style>
