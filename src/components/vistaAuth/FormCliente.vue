<template>
    <v-form v-model="valid" @submit.prevent="">
        <v-stepper v-model="e1" class="elevation-0">
            <v-stepper-header class="elevation-0">
                <v-stepper-step 
                    step="1" 
                    :complete="valid1" 
                    :color="valid1 ? 'green':'#005598'"
                >Datos basicos
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step 
                    step="2" 
                    :complete="valid2" 
                    :color="valid2 ? 'green':'#005598'"
                >Telefono
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" :complete="valid3" :color="valid3 ? 'green':'#005598'">Datos privados</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12" height="150" elevation="0">
                        <v-form v-model="valid1" @submit.prevent="">
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="6">
                                    <v-text-field 
                                        type="text"
                                        v-model="user.nombre"
                                        label="Nombre(s)"
                                        color="#005598"
                                        outlined
                                        dense
                                        clearable
                                        append-icon="person"
                                        counter="40"
                                        :rules="[required('Nombre(s)'), minLength('Nombre(s)',3),maxLength('Nombre(s)',40)]"
                                    />
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="6">
                                    <v-text-field 
                                        type="text"
                                        append-icon="person"
                                        v-model="user.apellido"
                                        label="Apellido(s)"
                                        clearable
                                        color="#005598"
                                        outlined
                                        dense
                                        counter="40"
                                        :rules="[required('Apellido(s)'), minLength('Apellido(s)',3),maxLength('Apellido(s)',40)]"
                                    />
                                </v-col>

                                <v-col cols="12" lg="6" md="6" sm="6" offset="3">
                                    <v-text-field 
                                        type="text"
                                        append-icon="payment"
                                        v-model="user.cedula"
                                        prefix="V-"
                                        clearable
                                        color="#005598"
                                        outlined
                                        single-line
                                        dense
                                        counter="8"
                                        autofocus
                                        :rules="[required('Cedula'), minLength('Cedula',6),maxLength('Cedula',8)]"
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                     <div class="text-end">
                        <v-btn @click="e1=2" color="info" :disabled="!valid1">
                            Siguiente
                        </v-btn>
                    </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card class="mb-12" height="150" elevation="0">
                        <v-form v-model="valid2" @submit.prevent="">
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="6" offset="3">
                                    <v-text-field 
                                        type="text"
                                        v-model="user.telefono"
                                        color="#005598"
                                        outlined
                                        append-icon="phone"
                                        prefix="+58"
                                        counter="10"
                                        :rules="[required('Telefono'), minLength('Telefono',10),maxLength('Telefono',10)]"
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                    <v-row>
                        <v-col cols="12" md="3" lg="3" sm="3">
                            <v-btn @click="e1=1" text icon>
                                <v-icon large>
                                    arrow_back
                                </v-icon>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" md="3" lg="3" sm="3" offset="6">
                            <v-btn @click="e1=3" color="info" :disabled="!valid2">
                                Siguiente
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-form v-model="valid3" @submit.prevent="">
                        <v-card class="mb-12" height="150" elevation="0">
                            <v-row>
                                <v-col cols="12" lg="6" md="6" sm="6" offset="3">
                                    <v-text-field
                                        label="Email"
                                        v-model="user.email"
                                        type="email"
                                        clearable
                                        prepend-inner-icon="email"
                                        outlined
                                        color="#005598"
                                        dense
                                        single-line
                                        counter="50"
                                        :rules="[required('Email'), emailFormat(), maxLength('Email',50)]"
                                    />
                                </v-col>
                                <v-col cols="12" lg="6" md="6" sm="6" offset="3">
                                    <v-text-field
                                        v-model="user.password"
                                        label="Password"
                                        counter="true"
                                        single-line
                                        :type="showPassword ? 'text' : 'password' "
                                        :rules="[required('password'), minLength('password',8)]"
                                        @click:append="showPassword = !showPassword"
                                        :append-icon="showPassword ?  'visibility' : 'visibility_off'"
                                        :prepend-inner-icon="showPassword ?  'lock_open' : 'lock'"
                                        outlined
                                        color="#005598"
                                        dense
                                    />
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-row>
                            <v-col cols="12" md="3" lg="3" sm="3">
                                <v-btn @click="e1=2" text icon>
                                    <v-icon large>
                                        arrow_back
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="3" lg="3" sm="3" offset="6">
                                <v-btn 
                                    block 
                                    type="submit" 
                                    :disabled="!valid3 || loading" 
                                    color="#005598" 
                                    :dark="valid3 && !loading"
                                    :loading="loading"
                                    @click="register()"
                                >
                                    Enviar
                                    <template v-slot:loader>
                                        <span class="custom-loader">
                                        <v-icon light>cached</v-icon>
                                        </span>
                                    </template>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        
        <!--snakbar para mensaje de registro completado o fallido-->
        <v-snackbar v-model="snackbar" :color="error != null? 'red':'green'" right>
            <div v-if="error==null">
                se ha registrado exitosamente.
            </div>
            <div v-if="error">
                {{error}}
            </div>
        </v-snackbar>
    </v-form>
</template>
<script>
import validations from '@/validations/validations';
import firebase from 'firebase';
import router from '@/router';

    export default {
        data(){
            return {
                valid:false,
                valid1:false,
                valid2:false,
                valid3:false,
                showPassword:false,
                error:null,
                snackbar:false,
                terms:false,
                conditions:false,
                user:{
                    nombre:'',
                    apellido:'',
                    email:'',
                    password:'',
                    telefono:'',
                    sexo:'',
                    fechaNac:'',
                    cedula:'',
                },
                ...validations,
                e1:0,
                loading:false,
            }
        },

        watch: {
            loading() {
                setTimeout(() => (this.loading = false), 2000)
            },
        },

        methods:{
            register(){
                this.loading = true;

                firebase.auth().createUserWithEmailAndPassword(
                    this.user.email, this.user.password
                ).then(data => {
                    firebase.firestore().collection('profile').doc(data.user.uid).set({
                        nombre: this.user.nombre,
                        apellido:this.user.apellido,
                        cedula:this.user.cedula,
                        telefono:this.user.telefono,
                        imagen:"https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilustr.jpg?ver=6"
                    }).then(() => {
                        this.snackbar=true;
                        setTimeout(() => {
                            this.error=null;
                            router.push('/');
                        },1000);
                    });
                }).catch(err => {
                    this.snackbar=true;
                    this.error = err.message;
                });
            }
        }
    }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>