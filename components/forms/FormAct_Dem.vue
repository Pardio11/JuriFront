<script setup lang="ts">

import { defineProps } from 'vue'

// Definir las props
const props = defineProps({
  titulo: {
    type: String,
    required: true
  }
})

const tab = ref(null);
const select = ref('');
const PaisSelect = ref('México');
const location = ref(['Masculino', 'Femenino']);
const Pais = ref([
    'Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita',
    'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés',
    'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia',
    'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China',
    'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur',
    'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto',
    'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España',
    'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón',
    'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guyana', 'Guinea', 'Guinea-Bisáu',
    'Guinea Ecuatorial', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán',
    'Irlanda', 'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón',
    'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia',
    'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Macedonia del Norte',
    'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania',
    'México', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia',
    'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos',
    'Pakistán', 'Palaos', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal',
    'Reino Unido', 'República Centroafricana', 'República Checa', 'República del Congo',
    'República Democrática del Congo', 'República Dominicana', 'República Sudafricana', 'Ruanda',
    'Rumanía', 'Rusia', 'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas',
    'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur',
    'Siria', 'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Surinam',
    'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez',
    'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu',
    'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue'
]);
const selectedDay = ref('');
/*change password*/
const currenypwd = ref('123456789142');
const newpwd = ref('123456789142');
const confirmpwd = ref('123456789142');
/*personal detail*/
const namemodel = ref('Mathew Anderson');
const storemodel = ref('Maxima Studio');
const storemail = ref('info@modernize.com');
const storephone = ref('+91 12345 65478');
const storeaddress = ref('814 Howard Street, 120065, India');
const show1 = ref(false);
const show2 = ref(true);
const show3 = ref(true);

const Currencyselect = ref('Enero');
const Currency = ref(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']);
const EstadoSelect = ref('Michoacán');
const Estado = ref(['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']);

const rules = {
    /* required: (value: string) => !!value || 'Required.', */
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`Las contraseñas son diferentes`),
    max: (va: string) => va.length <= 5 || 'Max 25 characters',
    maxDigitsYr: (va: string) => va.length <= 4 || 'año invalido',
    email: (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Correo Invalido'
    },
    alphanumeric: (value: string) => {
        const regex = /^[A-Za-z0-9]*$/
        return regex.test(value) || 'Solo se permiten letras y números'
    },
    numers: (value: string) =>{
        const numName = /^[0-9]*$/
        return numName.test(value) || 'Solo es posible ingresar números'
    }
};
</script>

<template>
    <v-card elevation="1" class="pa-md-10 "> 

        <v-row class="ma-sm-n2 ma-n1 justify-center">
            
            <v-col cols="12">
              
                    <v-card-item class="pa-8">
                        <h5 class="text-h5 mb-10">{{ titulo }}</h5>

                        <div class="mt-5">
                            <v-row>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Nombre</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="25" />
                                </v-col>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Apellido Paterno</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="25" />
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Apellido Materno</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="25" />
                                </v-col>
                                <!--  <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Curp</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="18" />
                                </v-col> -->

                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Curp</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text"
                                        maxlength="18" :rules="[rules.alphanumeric]" />
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">RFC</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" 
                                        maxlength="13" :rules="[rules.alphanumeric]" />
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Celular</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" maxlength="10"
                                    :rules="[rules.numers]"
                                        ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Correo</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="email" maxlength="50"
                                        :rules="[rules.email]"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Genero</v-label>
                                    <v-select v-model="select" :items="location" item-title="state" item-value="abbr"
                                        label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>


                                <v-col cols="12" sm="6" class="justify-center d-flex">
                                    <v-label class="mt-0 mb-2 mb-md-n5 font-weight-medium">Fecha de nacimiento</v-label>
                                </v-col>

                                <v-col cols="6" class="d-none d-sm-block"></v-col>

                                <v-col cols="4" md="2">
                                    <v-label class="mb-2 font-weight-medium">Día</v-label>
                                    <v-number-input v-model="selectedDay" :min="1" :max="31" :controls="false" label=""
                                        controlVariant="default" :hideInput="false" inset
                                        variant="outlined"></v-number-input>

                                    <v-text-field v-model="selectedDay" color="secondary" variant="outlined"
                                        type="number" :min="1" :max="31" hide-details></v-text-field>
                                </v-col>


                                <v-col cols="8" md="2">
                                    <v-label class="mb-2 font-weight-medium">Mes</v-label>
                                    <v-select v-model="Currencyselect" :items="Currency" item-title="state"
                                        item-value="abbr" label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>
                                <v-col cols="12" md="2">
                                    <v-label class="mb-2 font-weight-medium">Año</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="number" :min="1920"
                                        :max="2050" maxlength="4" :rules="[rules.maxDigitsYr]"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-label class="mb-2 font-weight-medium">Lugar de nacimiento</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="40" />
                                </v-col>
                                <v-col cols="8" md="2">
                                    <v-label class="mb-2 font-weight-medium">País</v-label>
                                    <v-select v-model="PaisSelect" :items="Pais" item-title="country" item-value="code"
                                        label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>



                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Calle</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="50" />
                                </v-col>

                                <v-col cols="12" md="2">
                                    <v-label class="mb-2 font-weight-medium">Número ext</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="8" />
                                </v-col>
                                <v-col cols="12" md="2">
                                    <v-label class="mb-2 font-weight-medium">Número int</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="8" />
                                </v-col>
                                <v-col cols="12" md="2">
                                    <v-label class="mb-2 font-weight-medium">Código postal</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="5" />
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Colonia</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="50" />
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Municipio</v-label>
                                    <v-text-field color="secondary" variant="outlined" type="text" hide-details
                                        maxlength="50" />
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Estado</v-label>
                                    <v-select v-model="EstadoSelect" :items="Estado" item-title="state"
                                        item-value="abbr" label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>


                            </v-row>
                        </div>
                    </v-card-item>
               
            </v-col>






        </v-row>
        
 

    </v-card>
</template>