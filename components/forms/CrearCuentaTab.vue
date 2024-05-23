<script setup lang="ts">
import { ref,computed } from 'vue';
import { crearAbogado } from "@/services/abogados"
import { defineProps } from 'vue'

// Definir las props
const props = defineProps({
  abogado: {
    type: Boolean,
    required: true
  }
})

/*Location Select*/
const location = ref(['Masculino', 'Femenino']);
const generoSeleccionado = ref('');

const locationWithAbbreviations = location.value.map((item) => {
    return { text: item, value: item === 'Masculino' ? 'M' : 'F' };
});

/*Currency Select*/
const Currency = ref(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']);

/*change password*/
const usuario = ref('');
const password = ref('');
const confirmpwd = ref('');
const crearUser = ref(true)

// Variables para los campos del formulario
const primerNombre = ref('');
const segundoNombre = ref('');
const apellidoPaterno = ref('');
const apellidoMaterno = ref('');
const curp = ref('');
const rfc = ref('');
const genero = ref('');
const cedulaProfesional = ref('');

const diaNacimiento = ref('');
const mesNacimiento = ref('');
const anioNacimiento = ref('');
const correo = ref('');
const numeroCelular = ref('');
const calle = ref('');
const colonia = ref('');
const pais = ref('');
const estado = ref('');
const municipio = ref('');
const cp = ref('');
const numEx = ref('');
const numInt = ref('');
const lNacimiento = ref('');
const { token } = useAuth();
const tokenValue = token.value;
const show1 = ref(false);
const show2 = ref(true);

////////////////////////Formato fecha///////////////////////////////////////////////
const formattedDia = computed(() => {
    const dia = parseInt(diaNacimiento.value ?? '');
    if (!isNaN(dia)) {
        return dia.toString().padStart(2, '0');
    }
    return '';
});


const updateDia = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value, 10);
    diaNacimiento.value = isNaN(value) ? '' : value.toString();
};

interface MesesNumeros {
    [nombreMes: string]: string;
}

const mesesNumeros: MesesNumeros = {
    'Enero': '01',
    'Febrero': '02',
    'Marzo': '03',
    'Abril': '04',
    'Mayo': '05',
    'Junio': '06',
    'Julio': '07',
    'Agosto': '08',
    'Septiembre': '09',
    'Octubre': '10',
    'Noviembre': '11',
    'Diciembre': '12'
};

const obtenerNumeroMes = (nombreMes: string) => {
    return mesesNumeros[nombreMes];
};

const limitLength = () => {
    if (anioNacimiento.value.length > 4) {
        anioNacimiento.value = anioNacimiento.value.slice(0, 4);
    }
};

//////////////////////////////////////////////////////////////////////////////////////

const sendForm = () => {

    if (generoSeleccionado.value != null) {
        if (generoSeleccionado.value == "Masculino") {
            genero.value = "M"
        } else {
            genero.value = "F"
        }
    }
    const numeroMes = obtenerNumeroMes(mesNacimiento.value);

    const fechaNacimiento = `${anioNacimiento.value}-${numeroMes}-${formattedDia.value}`;


    const formUserData= {
        username: usuario.value,
        email: correo.value,
        password: password.value,
        password2: confirmpwd.value,
    };

    const formAbogadoData = {
        nombres: primerNombre.value + " " + segundoNombre.value,
        apellido_paterno: apellidoPaterno.value,
        apellido_materno: apellidoMaterno.value,
        curp: curp.value,
        rfc: rfc.value,
        genero: genero.value,
        fecha_nacimiento: fechaNacimiento,
        correo: correo.value,
        telefono: numeroCelular.value,
        lugar_nacimiento: lNacimiento.value,
        domicilio_calle: calle.value,
        domicilio_num_ext: numEx.value,
        domicilio_num_int: numInt.value,
        domicilio_colonia: colonia.value,
        domicilio_municipio: municipio.value,
        domicilio_estado: estado.value,
        domicilio_pais: pais.value,
        domicilio_codigo_postal: cp.value,
        cedula_profesional:cedulaProfesional.value,
        usuario: ""
    };


    const formData = {
        formUserData,
        formAbogadoData
    };

    if (tokenValue != null) {
        const data = crearAbogado(formData, tokenValue);
    } else {
        console.error('El token de autenticación es nulo.');
    }
};


const rules = {
    required: (value: string) => !!value || 'Required.',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    emailMatch: () =>  password.value === confirmpwd.value || 'Las contraseñas no coinciden',
    max: (va: string) => va.length <= 5 || 'Max 25 characters',
    email:(value: string)  => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
    phoneNumber: (value: string) => {
  const phoneNumberRegex = /^[0-9]{10}$/; 
  return phoneNumberRegex.test(value) || 'Invalid phone number.';
},


};

const step = ref(1);

const currentTitle = computed(() => {
  switch (step.value) {
    case 1:
      return 'Sign-up';
    case 2:
      return 'Create a password';
    default:
      return 'Account created';
  }
});

</script>

<template>
    <v-card elevation="1" class="pa-md-10">
        <v-row class="ma-sm-n2 ma-n1 justify-center">
            <v-col cols="12" sm="5" class="">
                <v-card elevation="4">
                    <v-card-item elevation="4" class="pa-4">
                        <h5 class="text-h5">Imagen</h5>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">Fotografia para el usuario
                        </div>
                        <div class="text-center mt-6 mb-6">
                            <v-avatar size="120">
                                <img src="/images/profile/user-1.jpg" height="120" alt="image" />
                            </v-avatar>
                        </div>
                        <div :class="{'d-flex justify-center pb-15 pt-6':abogado ,'d-flex justify-center' : !abogado }">
                            <v-btn color="secondary" class="mx-2" flat> Cargar</v-btn>
                            <v-btn color="error" class="mx-2" variant="outlined" flat>Eliminar</v-btn>
                        </div>
                        <v-checkbox v-if="!abogado" class="mt-4" v-model="crearUser"
                         label="Crear cuenta para el Usuario " color="primary"></v-checkbox>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col  cols="12" sm="7">
                <v-card elevation="4">
                    <v-card-item elevation="4" class="pa-8">
                        <h5 class="text-h5">Informacion de Cuenta</h5>
                        <!-- <div class="text-subtitle-1 text-medium-emphasis mt-2">El usuario podra cambiarla una vez
                            iniciada la secion</div> -->
                        <div class="mt-4">
                            <v-label class="mb-1 font-weight-medium">Nombre de Usuario</v-label>
                            <v-text-field v-model="usuario" class="mb-2" lor="secondary" variant="outlined" type="text"
                                :disabled="!crearUser"
                                hide-details maxlength="25" />
                            <v-label class="mb-2 font-weight-medium">Contraseña</v-label>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :disabled="!crearUser"
                                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                class="input-group--focused" hint="At least 8 characters" name="input-10-2"
                                @click:append="show1 = !show1"></v-text-field>
                            <v-label class="font-weight-medium">Confirmar Contraseña</v-label>
                            <v-text-field v-model="confirmpwd" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :disabled="!crearUser" 
                                :rules="[rules.required, rules.min, rules.emailMatch]"
                                :type="show2 ? 'text' : 'password'" class="input-group--focused"
                                hint="At least 8 characters" name="input-10-2"
                                @click:append="show2 = !show2"></v-text-field>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card elevation="4">
                    <v-card-item class="pa-8">
                        <h5 class="text-h5 mb-10">Informacion Personal</h5>

                        <div class="mt-5">
                            <v-row>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Primer Nombre</v-label>
                                    <v-text-field v-model="primerNombre" color="secondary" variant="outlined"
                                        type="text" hide-details maxlength="25" />
                                </v-col>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Segundo Nombre</v-label>
                                    <v-text-field v-model="segundoNombre" color="secondary" variant="outlined"
                                        type="text" hide-details maxlength="25" />
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Apellido Paterno</v-label>
                                    <v-text-field v-model="apellidoPaterno" color="secondary" variant="outlined"
                                        type="text" hide-details maxlength="25" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Apellido Materno</v-label>
                                    <v-text-field v-model="apellidoMaterno" color="secondary" variant="outlined"
                                        type="text" hide-details maxlength="25" />
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">CURP</v-label>
                                    <v-text-field v-model="curp" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="18" />
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">RFC</v-label>
                                    <v-text-field v-model="rfc" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="13" />
                                </v-col>

                                <v-col v-if="abogado" cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium" maxlength="5">Cédula profesional</v-label>
                                    <v-text-field v-model="cedulaProfesional" color="secondary" variant="outlined"
                                        type="text" hide-details maxlength="20" />
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Género</v-label>
                                    <v-select v-model="generoSeleccionado" :items="location"
                                        label="Selecciona un género" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>


                                <v-col cols="12" sm="6" class="justify-center d-flex">
                                    <v-label class="mt-4 mb-2 mb-md-n5 font-weight-medium">Fecha de nacimiento</v-label>
                                </v-col>

                                <v-col cols="6" class="d-none d-sm-block"></v-col>

                                <v-col cols="4" md="2">
                                    <v-label class="mb-2 font-weight-medium">Día</v-label>
                                    <v-text-field v-model="diaNacimiento" :value="formattedDia" color="secondary"
                                        variant="outlined" type="number" :min="1" :max="31" @input="updateDia"
                                        hide-details></v-text-field>
                                </v-col>
                                <v-col cols="8" md="2">
                                    <v-label class="mb-2 font-weight-medium">Mes</v-label>
                                    <v-select v-model="mesNacimiento" :items="Currency" item-title="state"
                                        item-value="abbr" label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>

                                <v-col cols="12" md="2">
                                    <v-label class="mb-2 font-weight-medium">Año</v-label>
                                    <v-text-field v-model="anioNacimiento" color="secondary" variant="outlined"
                                        type="number" :min="0" hide-details maxlength="4"
                                        @input="limitLength">
                                    </v-text-field>

                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Correo</v-label>
                                    <v-text-field v-model="correo" color="secondary" variant="outlined" type="email"
                                        maxlength="50" :rules="[rules.required, rules.email]"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-label class="mb-2 font-weight-medium">Numero Celular</v-label>
                                    <v-text-field v-model="numeroCelular" color="secondary" variant="outlined"
                                        type="text" maxlength="25" hide-details></v-text-field>
                                </v-col>




                            </v-row>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>



            <v-col cols="12">
                <v-card elevation="4 pa-8">
                    <v-card-item>
                        <h5 class="text-h5 mb-8">Dirección</h5>

                        <div class="mt-5">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Calle</v-label>
                                    <v-text-field v-model="calle" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="50" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-label class="mb-2 font-weight-medium">Colonia</v-label>
                                    <v-text-field v-model="colonia" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="50" />
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">Pais</v-label>
                                    <v-text-field v-model="pais" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="50" />
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">Estado</v-label>
                                    <v-text-field v-model="estado" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="50" />
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">Municipio</v-label>
                                    <v-select v-model="municipio" :items="location" item-title="state" item-value="abbr"
                                        label="Select" return-object single-line variant="outlined"
                                        hide-details></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">CP</v-label>
                                    <v-text-field v-model="cp" color="secondary" variant="outlined" type="text"
                                        hide-details maxlength="15" />
                                </v-col>
                                <v-col cols="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">Num/Ext</v-label>
                                    <v-text-field v-model="numEx" :min="0" color="secondary" variant="outlined"
                                        type="number" hide-details />
                                </v-col>
                                <v-col cols="6" md="3">
                                    <v-label class="mb-2 font-weight-medium">Num/Int</v-label>
                                    <v-text-field v-model="numInt" :min="0" color="secondary" variant="outlined"
                                        type="number" hide-details />

                                </v-col>
                                <v-col cols="12">
                                    <v-label class="mb-2 font-weight-medium">Lugar de nacimiento</v-label>
                                    <v-text-field v-model="lNacimiento" color="secondary" variant="outlined" type="text"
                                        maxlength="50" hide-details></v-text-field>
                                </v-col>

                            </v-row>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>




        </v-row>
        <div class="d-flex justify-end mt-5">
            <v-btn size="large" color="secondary" class="mr-4" @click="sendForm" flat>Guardar</v-btn>
            <v-btn size="large" class="bg-lighterror text-error" flat>Cancelar</v-btn>
        </div>

    </v-card>
</template>
