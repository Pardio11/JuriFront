<template>
    <v-row>
        <v-col class=" ma-0 pa-0 d-xs-block d-sm-none">

            <div>

                <div class="" style="background-image: url('/images/login/arriba.png');
                background-size: cover;
                background-position: bottom;
                height: 8rem;
                
                
                "></div>
                <LoginInputs />
                <div class="d-flex justify-center align-center" style="background-image: url('/images/login/abajo.png'); 
                height: 10rem;
                background-size: cover;
                ">
                    <h2 class="text-caption text-center mt-10" style="color: gray;"> <span
                            class="text-secondary">JURI</span> Todos los derechos reservados ©2024 <br>
                        un producto de <span class="text-secondary">GENCODE</span> </h2>
                </div>

            </div>
        </v-col>
        <v-col cols="12" class="d-none d-sm-flex justify-center align-center" style="background-image: url('/images/login/fondo.png');
        background-position: right">
            <v-card class="pa-10 bg-white" elevation="11" rounded="xl" width="1000"
                style="display: flex; flex-direction: row;">
                <div class="d-flex justify-center align-center flex-column " style="width: 40%;">
                    <v-img src="public/images/login/juribu.png" width="280" max-height="170">
                    </v-img>
                    <h2 class="text-h1 text-primary text font-weight-black">JURI</h2>
                </div>
                <div style="width: 60%;">
                    <LoginInputs />
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({ loading: false }),

    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
    },
}
definePageMeta({
    layout: "blank",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/clientes', // Where the user should be redirected if not logged in
    },
});



</script>

<style scoped></style>