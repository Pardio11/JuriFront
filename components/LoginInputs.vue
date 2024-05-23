<script setup>

const email = ref('')
const password = ref('')
const visible = ref(false)
const { signIn } = useAuth()

const signInWithCredentials = async () => {
  const credentials = {
    email: email.value,
    password: password.value
  }
  try {
    // This sends a POST request to the `auth.provider.endpoints.signIn` endpoint with `credentials` as the body
    await signIn(
      credentials,
      { callbackUrl: '/CrearCuenta' }
    )
    alert('Successfully logged in!')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>

  <div class="bg-white pl-12 pr-12  mt-0 pt-0" style="height: 100%; width: 100%;">

    <v-img class="mx-auto pt-10 " max-width="198" src="public/images/login/logoCliente.png">
    </v-img>

    <v-text-field v-model="email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
      variant="outlined" rounded="pill"></v-text-field>



    <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
      rounded="pill"></v-text-field>


    <v-layout>
      <v-row class="d-flex justify-center">
        <v-col>
          <v-checkbox class=" d-flex text-decoration-none" color="primary">
            <template v-slot:label>
              <span style="font-size: smaller;">Mantener Sesión</span>
            </template>
          </v-checkbox>
        </v-col>

        <v-col class="d-flex justify-center align-center">
          <a class="text-caption text-decoration-none text-blue" href="" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </v-col>
      </v-row>
    </v-layout>



    <v-btn class="text-none mb-4 mt-5" color="primary" size="x-large" variant="elevated" block
      @click="signInWithCredentials()" rounded="pill">
      INICIAR SESIÓN
    </v-btn>

    <v-img class="mx-auto mb-n10 ml-10 mt-2  d-xs-block d-sm-none" max-width="78" src="public/images/login/juribu.png">
    </v-img>
    <div class="d-flex justify-center border d-xs-block d-sm-none">

      <h2 class="text-primary text-h2 font-weight-black " style="z-index: 10;">JURI</h2>
    </div>



  </div>

</template>