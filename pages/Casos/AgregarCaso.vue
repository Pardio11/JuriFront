<script setup lang="ts">
import { ref, computed } from 'vue';

// common components
import BaseBreadcrumb from '~/components/shared/BaseBreadcrumb.vue';
import FormPrueba1 from '@/components/forms/FormAbogadosPerm.vue';
import FormPrueba2 from '@/components/forms/FormAct_Dem.vue';
// theme breadcrumb
const tab = ref(null);
const valor =ref(90);
const page = ref({ title: 'Contact List' });
const breadcrumbs = ref([
    {
        text: '2 New Contacts',
        disabled: true,
        href: ''
    }
]);
const step = ref(1);

const currentTitle = computed(() => {
  switch (step.value) {
    case 1:
      return 'Formulario ';
    case 2:
      return 'Formulario ';
    default:
      return 'Formulario ';
  }
});

const select = ref('');
const location = ref(['Masculino', 'Femenino']);
/*Currency Select*/
const Currencyselect = ref('Enero');
const Currency = ref(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']);
const EstadoSelect = ref('Michoacán');
const Estado = ref(['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']);
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
const PaisSelect = ref('México');
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
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
   
     <v-card
    class="mx-auto"
    max-width=""
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text >
            <v-row>
                <v-col cols="12" >
                    <FormPrueba1/>
                </v-col>
               
            </v-row>
          
        </v-card-text>
      </v-window-item>
      <v-window-item :value="2">
        <v-card-text>
          <FormPrueba2 titulo="Actores"/>
        </v-card-text>
      </v-window-item>
      <v-window-item :value="3">
        <v-card-text>
          <FormPrueba2 titulo="Demandados"/>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        v-if="step > 1"
        variant="text"
        @click="step--"
      >
        Regresar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="step < 3"
        color="primary"
        variant="flat"
        @click="step++"
      >
        Siguiente
      </v-btn>
      <v-btn
        v-if="step == 3"
        color="primary"
        variant="flat"
        @click=""
      >
        Guardar
      </v-btn>
    </v-card-actions>
  </v-card>
    
</template>
