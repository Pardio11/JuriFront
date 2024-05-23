<script setup lang="ts">

const MJuriSelect = ref('Derecho Civil');
const TJ = ref([
    'Derecho Civil',
    'Derecho Penal',
    'Derecho Laboral',
    'Derecho Mercantil',
    'Derecho Administrativo',
    'Derecho Constitucional',
    'Derecho Internacional',
]);
const EProcesal = ref('Etapa 1');
const EP = ref([
    'Etapa 1',
    'Etapa 2',
    'Etapa 3',
    'Etapa 4',
    'Etapa 5'
]);
const TipoCaso = ref('Tipo 1');
const TP = ref([
    'Tipo 1',
    'Tipo 2',
    'Tipo 3',
    'Tipo 4',
    'Tipo 5'
]);
const dialog = ref('');
const dialogNew1 = ref(false);
const dialogNew2 = ref(false);
const dialogNew3 = ref(false);
</script>

<template>

    <v-card elevation="1" class="pa-md-10 ">
        <v-row class="ma-sm-n2 ma-n1 justify-center">
            <v-col cols="12" sm="7">
                <v-card elevation="4">
                    <v-card-item elevation="4" class="pa-8">
                        <h5 class="text-h5">Datos del caso</h5>
                        <div class="mt-4">
                            <v-label class="mb-1 font-weight-medium">Nombre </v-label>
                            <v-text-field class="mb-2" lor="secondary" variant="outlined" type="text" hide-details
                                maxlength="25" placeholder="Ingrese el nombre del caso" />
                            <v-label class="mb-1 font-weight-medium">Descripción </v-label>
                            <v-textarea class="mb-2" color="secondary" variant="outlined" hide-details rows="4"
                                maxlength="500" placeholder="Ingrese la descripción del caso"></v-textarea>
                            <v-label class="font-weight-medium">Cotización</v-label>
                            <v-text-field class="mb-2" color="secondary" variant="outlined" type="number" hide-details
                                maxlength="10" placeholder="Ingrese el monto"></v-text-field>
                        </div>
                    </v-card-item>
                </v-card>
                <v-card elevation="4" class="mt-10">
                    <v-card-item elevation="4" class="pa-8">
                        <div class="d-flex align-end justify-center ">  
                            <v-col cols="9" md="9">
                                <v-label class="mb-2 font-weight-medium">Materia Juridica</v-label>
                                <v-select v-model="MJuriSelect" :items="TJ" item-title="state" item-value="abbr"
                                    label="Select" return-object single-line variant="outlined" hide-details></v-select>
                            </v-col>
                            <div class="pa-3 text-center">
                                <v-dialog v-model="dialogNew1" max-width="600">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-btn class="text-none font-weight-regular" text="Nuevo" variant="tonal"
                                            v-bind="activatorProps"></v-btn>
                                    </template>

                                    <v-card title="Nueva materia juridica">
                                        <v-card-text>
                                            <v-row dense>
                                                <v-col cols="12" md="12" sm="12">
                                                    <v-text-field hint="Añade una nueva materia juridica"
                                                        label="Materia juridica"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Cancelar" variant="plain" @click="dialogNew1 = false"></v-btn>

                                            <v-btn color="primary" text="Guardar" variant="tonal"
                                                @click="dialogNew1 = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>

                        </div>
                        <div>


                        <div class="d-flex align-end justify-center ">  
                            <v-col cols="9" md="9">
                                <v-label class="mb-2 font-weight-medium">Estado Procesal</v-label>
                                <v-select v-model="EProcesal" :items="EP" item-title="state" item-value="abbr"
                                    label="Select" return-object single-line variant="outlined" hide-details></v-select>
                            </v-col>
                            <div class="pa-3 text-center">
                                <v-dialog v-model="dialogNew2" max-width="600">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-btn class="text-none font-weight-regular" text="Nuevo" variant="tonal"
                                            v-bind="activatorProps"></v-btn>
                                    </template>

                                    <v-card title="Nuevo estado procesal">
                                        <v-card-text>
                                            <v-row dense>
                                                <v-col cols="12" md="12" sm="12">
                                                    <v-text-field hint="Añade un nuevo estado procesal"
                                                        label="Estado procesal"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Cancelar" variant="plain" @click="dialogNew2 = false"></v-btn>

                                            <v-btn color="primary" text="Guardar" variant="tonal"
                                                @click="dialogNew2 = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                        </div>
                    </div>  
                        <div class="d-flex align-end justify-center ">  
                            <v-col cols="9" md="9">
                                <v-label class="mb-2 font-weight-medium">Tipo de caso</v-label>
                                <v-select v-model="TipoCaso" :items="TP" item-title="state" item-value="abbr"
                                    label="Select" return-object single-line variant="outlined" hide-details></v-select>
                            </v-col>
                            <div class="pa-3 text-center">
                                <v-dialog v-model="dialogNew3" max-width="600">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-btn class="text-none font-weight-regular" text="Nuevo" variant="tonal"
                                            v-bind="activatorProps"></v-btn>
                                    </template>

                                    <v-card title="Nuevo tipo de caso">
                                        <v-card-text>
                                            <v-row dense>
                                                <v-col cols="12" md="12" sm="12">
                                                    <v-text-field hint="Añade una nuevo tipo de caso"
                                                        label="Tipo de caso"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Cancelar" variant="plain" @click="dialogNew3 = false"></v-btn>

                                            <v-btn color="primary" text="Guardar" variant="tonal"
                                                @click="dialogNew3 = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>

                        </div>
                    
                    </v-card-item>
                </v-card>
            </v-col>
            <!-- abogados permitidos -->
            <v-col cols="12" sm="5" class="justify-center">
                <v-card elevation="4">
                    <v-card-item elevation="4" class="pa-4">
                        <h5 class="text-h5 mb-5">Abogados permitidos</h5>
                        <v-row>
                            <v-col cols="4" v-for="(n, index) in 8" :key="index">
                                <v-avatar size="100" class="pa-4 mb-2 text-center" elevation="4">
                                    <div class="clickable-avatar">
                                        <img src="/images/profile/user-1.jpg" height="100" alt="image" />
                                    </div>
                                </v-avatar>
                                <p class="mb-0 mt-2">Abogado</p>
                            </v-col>
                        </v-row>
                        <div class="pa-4 text-center">
                            <v-dialog width="auto" scrollable>
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn color="brown" text="Añadir abogados" variant="outlined"
                                        v-bind="activatorProps"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card title="Abogados disponibles">
                                        <v-divider class="mt-3"></v-divider>

                                        <v-card-text class="px-4" style="height: 300px">
                                            <v-checkbox-group v-model="dialog" messages="Selecciona colaborador" column>
                                                <v-checkbox label="Jesus Vázques" value="jesus"></v-checkbox>

                                                <v-checkbox label="Carlos Pardio" value="pardio"></v-checkbox>

                                                <v-checkbox label="Javier Tadeo" value="tadeo"></v-checkbox>
                                            </v-checkbox-group>
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-btn text="Close" @click="isActive.value = false"></v-btn>

                                            <v-spacer></v-spacer>

                                            <v-btn color="surface-variant" text="Save" variant="flat"
                                                @click="isActive.value = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </div>

                    </v-card-item>
                </v-card>
            </v-col>

        </v-row>

    </v-card>

</template>