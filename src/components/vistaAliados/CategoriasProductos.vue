<template>
  <div>
    <v-card color="#f5f5f5" elevation="4" v-if="activo">
      <v-img
        gradient="to bottom right, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="400"
        :src="aliado.imagen2"
        contain
      >
        <v-row>
          <v-col cols="12" md="5" sm="10" lg="5" class="mt-12 mx-10">
            <v-card elevation="5" width="100%" height="250">
              <v-card-title class="mx-10 headline font-weight-bold">
                {{ aliado.nombre }}
              </v-card-title>
              <div>
                <p class="my-5 mx-10 overline font-weight-bold">
                  <span class="green--text">$$</span>
                  • {{ aliado.tipo1 }} • {{ aliado.tipo2 }} •
                  {{ aliado.tipo3 }} • {{ aliado.tipo4 }}...
                </p>

                <p class="my-5 mx-10 overline font-weight-bold">
                  {{ aliado.ubicacion }} •
                  <router-link to="" class="green--text">
                    <span class="green--text">
                      Mas información
                    </span>
                  </router-link>
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
 <SkeletonAliados v-else/>
    <v-tabs color="#000" centered class="mt-5" background-color="#f5f5f5">
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="n in grupos" :key="n.id" :href="`#tab-${n.nombre}`">
        {{ n.nombre }}
      </v-tab>

      <v-tab-item
        v-for="n in grupos"
        :key="n.id"
        :value="'tab-' + n.nombre"
        class="color"
      >
        <v-card class="mx-10 mt-10" elevation="0" color="#f5f5f5" width="100%">
          <span class="subtitle-1 font-weight-bold">{{ n.nombre}}</span>
          <v-row>
            <v-col cols="12" md="3">
              <v-card class="mx-auto my-10" max-width="374">
                <v-img
                ref="/Producto/asdasd"
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title > <router-link class="black--text" style="text-decoration:none" :to="{name:'Productos', params:{id:'cafe-badilico'}}"> Cafe Badilico</router-link> </v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 subtitle-1 black--text">
                   <p>$ • Italian, Cafe  <v-btn  icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn></p> 
                    
                  
                  </div>
                 
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text class="text-justify">
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import router from "@/router";
import firebase from "firebase";
import SkeletonAliados from '@/components/layouts/SkeletonAliados';
export default {
  components:{
    SkeletonAliados,
  },
  data() {
    return {
       activo:false,
         show: false,
      num: [
        { id: "Sugeridos" },
        { id: "Promociones" },
        { id: "Calorias" },
        { id: "Nuevos" }
      ],
      aliado: {
        nombre: "",
        ubicacion: "",
        tipo1: "",
        tipo2: "",
        tipo3: "",
        tipo4: "",
        imagen2: "",
      },
    grupos:[],
    }
  },

 

  mounted() {
    this.getAliado();
  },
   watch: {
            grupos(){
                this.activo = true;
                console.log(this.activo);
            }
        },

  methods: {
    async getAliado() {
      var uid = this.$route.params.id;
      var ref = await firebase
        .firestore()
        .collection("aliados")
        .doc(uid);

      ref.onSnapshot(snap => {
        this.aliado.nombre = snap.data().nombre;
        this.aliado.ubicacion = snap.data().ubicacion;
        this.aliado.imagen2 = snap.data().imagen2;
        this.aliado.tipo1 = snap.data().tipo1;
        this.aliado.tipo2 = snap.data().tipo2;
        this.aliado.tipo3 = snap.data().tipo3;
        this.aliado.tipo4 = snap.data().tipo4;
          this.grupos = snap.data().grupos;
      });
    }
  }
};
</script>
<style scope>
.mapa {
  height: 200px;
}

.color {
  background-color: #f5f5f5;
}
</style>
