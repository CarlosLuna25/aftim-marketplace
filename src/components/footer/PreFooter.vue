<template>
    <div>
        <v-divider/>

        <v-layout row class="pa-8 hidden-sm-and-down "   wrap>
            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3 align-self-center>
                     <v-img :src="require('@/assets/e-commerce.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center class="black--text">
                      <div style="color:#1E88E5" class="font-weight-bold">
                          Pagos Online
                    </div>  
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3>
                       <v-img :src="require('@/assets/e-comer.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center>
                          <div style="color:#1E88E5" class="font-weight-bold">
                     Compras a todas horas
                    
                    </div>  

                      
                    
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3>
                        <v-img :src="require('@/assets/seguridad.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center>
                          <div style="color:#1E88E5" class="font-weight-bold">

                            Privacidad garantizada  
                    </div>  

                        
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>