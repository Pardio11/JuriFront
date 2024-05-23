<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useNoteStore } from '@/stores/apps/notes';
import { TrashIcon } from 'vue-tabler-icons';
import { colorVariation } from '@/_mockApis/apps/notes/index';
const store = useNoteStore();

onMounted(() => {
    store.fetchNotes();
});

const getNotes = computed(() => {
    return store.notes;
});

const NoteItem = getNotes;

const searchValue = ref('');
const filteredNotes = computed(() => {
    return NoteItem.value.filter((note) => {
        return note.title?.toLowerCase().includes(searchValue.value.toLowerCase());
    });
});

// common components
const dialog = ref(false);
const title = ref('');
const color = ref('primary');




const getNote = computed(() => {
    return store.notes;
});

function colorset(btcolor: any) {
    return (color.value = btcolor);
}
const getId = getNote.value.length;
function addNote() {
    return (
        getNote.value.push({ id: getId + 1, title: title.value, color: color.value, datef: new Date() }),
        (dialog.value = false),
        (title.value = '')
    );
}
</script>

<template>
    <v-card class="pa-8">
        <v-row>
            <v-col>
                <h1>Citas</h1>
            </v-col>
            <v-col cols="12">
                <div class="mb-5">
                    <v-text-field variant="outlined" v-model="searchValue" append-inner-icon="mdi-magnify"
                        placeholder="Buscar Cita" hide-details density="compact"></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="4" v-for="note in filteredNotes" :key="note.id">
                <v-sheet :class="'note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light' + note.color"
                    @click="store.SelectNote(note.id)" v-if="filteredNotes.length > 0">
                    
                    <h6 :class="'text-h6 text-truncate text-' + note.color">{{ note.title }}</h6>
                    <div class="d-flex mt-3 align-center">
                        <small class="text-subtitle-2 opacity-25">{{ new Date(note.datef).toLocaleDateString()
                            }}</small>
                        <v-btn icon variant="text" class="ml-auto" size="x-small"
                            @click="store.deleteNote(note.id)"><v-tooltip activator="parent" location="top">Delete
                                Note</v-tooltip>
                            <TrashIcon size="18" />
                        </v-btn>
                    </div>
                </v-sheet>
                <v-sheet v-if="filteredNotes.length === 0"><v-alert type="error" title="Opps"
                        text="The Notes you are looking for is not found"></v-alert></v-sheet>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
                <v-sheet>
                    <v-btn color="primary" @click="dialog = true">Agregar una cita</v-btn>

                    <v-dialog v-model="dialog" max-width="500">
                        <v-card>
                            <v-card-text>
                                <h4 class="text-h6 mb-10">Agregar Cita</h4>
                                <v-label>Nombre de la cita</v-label>
                                <v-text-field outlined name="Note" v-model="title" class="mb-5"></v-text-field>
                               <!--  <div class="d-flex bg-primary" style="width: 100%;"><div ><v-label>Dia</v-label></div><div style="width: 40%;"><v-label>Hora</v-label></div></div> -->
                                <v-row class="pb-10">
                                    
                                    <v-col cols="6">
                                    <v-label>Día</v-label>
                                    <v-text-field variant="outlined" hide-details type="date"></v-text-field></v-col>
                                    <v-col cols="6">
                                        <v-label>Hora</v-label>
                                        <v-text-field variant="outlined" hide-details type="time"></v-text-field></v-col>

                                </v-row>
                                

                                
                                <h4 class="text-h6 mt-4 mb-4">Nivel de importancia</h4>
                                <div class="d-flex gap-3 align-center mb-10">
                                    <v-btn icon v-for="btcolor in colorVariation" :key="btcolor.id" size="x-small"
                                        :color="btcolor.color" @click="colorset(btcolor.color)">
                                        <CheckIcon width="16" v-if="color === btcolor.color" />
                                    </v-btn>
                                </div>
                            </v-card-text>
                            <v-card-actions class="mb-5">
                                <v-btn color="primary" @click="addNote">Save</v-btn>
                                <v-btn color="primary" @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-sheet>
            </v-col>



        </v-row>
    </v-card>

</template>