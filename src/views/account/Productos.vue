<template>
  <div>
    <Appbar />
    
    <v-container fluid="">
      <!--layout principal -->
      
      <v-card>
        <v-row>
          <!--columna para imagen principal y slide de imagenes en miniatura-->
          <v-col cols="12" md="5">
            <v-sheet class="pa-4 " width="100%">
              <v-card class="pa-0 my-2">
                <v-img
                  :src="imagenPrincipal"
                  contain
                  width="100%"
                  max-height="300"
                ></v-img>
              </v-card>
              <v-sheet width="100%" class="pa-0">
                <v-slide-group show-arrows center-active="" mandatory="">
                  <v-slide-item
                    v-for="(n, index) in imagenes"
                    :key="index"
                    class="ma-4"
                    v-slot:default="{ active, toggle }"
                  >
                    <!--contenedor para las imagenes en mminiatura-->
                    <v-sheet
                      :class="active ? '' : 'pa-0'"
                      :color="active ? 'grey' : ''"
                    >
                      <v-card
                        min-height="80"
                        width="80"
                        @click="toggle, cambiarimg(n)"
                      >
                        <v-img contain :src="n.imagen"></v-img>
                      </v-card>
                    </v-sheet>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-sheet>
          </v-col>

          <!-- columna para la ddescripcion del producto con precio y disponibilidad-->
          <v-col cols="12" md="7">
            <v-container class="ml-3 pl-1">
              <h4>
                <a href="/aliados/4" class="fuente-link font-weight-thin ml-3"
                  >VOLVER</a
                >
              </h4>
              <v-card-title class="mt-0 display-3">
                {{ nombreProducto }}
              </v-card-title>
              <v-card-title class="mt-0 blue--text ">
                BS.20.000.000
              </v-card-title> 
              <v-card-title style="font-size:18px !important; " class="pa-0 mt-0">
                <v-rating
               class="ml-3"
                v-model="calificacion"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="20"
              ></v-rating>
              <span  class="font-weight-thin"
                > ({{ votos }})
              </span>
              </v-card-title>
              <p class="ml-3 font-weight-thin mt-1">
                <v-icon>room</v-icon> Ubicacion
              </p>
             
               
             
              <p class="ml-3 font-weight-bold">
                Disponibilidad:
                <v-chip
                  dark=""
                  :color="disponible ? 'indigo darken-4' : 'red accent-2'"
                >
                  <span v-if="disponible">En Stock</span>
                  <span v-else>Agotado</span></v-chip
                >
              </p>
              <v-row no-gutters="" align="left"
                ><v-col cols="12" md="6">
                  <v-btn dark="" color="light-blue darken-4">
                    <v-icon> add_shopping_cart </v-icon> agregar al
                    carrito</v-btn
                  >
                </v-col>
                <v-col cols="12" md="6"> <v-btn>Comprar ahora</v-btn> </v-col>
              </v-row>
            </v-container>
            <v-divider class="mt-3"></v-divider>
            <v-card-text>
              <h3 class="font-weight-bold my-3">Descripcion del producto</h3>
              <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                totam aperiam! Earum maxime velit ipsam suscipit exercitationem
                recusandae quasi, itaque esse explicabo sequi consequuntur
                consectetur. Modi libero tempore architecto sunt.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

      <!-- seccion de productos sugeridos-->

      <v-card class=" mt-8 mb-3 pa-5">
        <h3 class="text-center display-2 mt-4">Productos Sugeridos</h3>
        <v-row class="mt-3">
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-card class="mx-auto" color="grey lighten-4" max-width="400">
              <v-img
                to="/producto/32"
                src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              >
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative;"
                to="/producto/32"
              >
                <v-btn
                  absolute
                  color="light-blue darken-4"
                  class="white--text"
                  fab
                  large
                  right
                  top
                >
                  <v-icon> add_shopping_cart </v-icon>
                </v-btn>
                <router-link style="text-decoration:none" to="/producto/nombre">
                  <h3 class="display-1  black--text mb-2">
                    Nombre producto
                  </h3></router-link
                >

                <div class="font-weight-light blue--text title mb-2">
                  BS 20.000
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <Footer />
  </div>
</template>
<script>
import Appbar from "@/components/navbar/AppBar";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/vistaProducto/Banner";
export default {
  components: {
    Appbar,
    Footer,
    Banner
  },
  data() {
    return {
      calificacion: 4,
      votos: 300,
      nombreProducto: "Gaming Laptop Asus ",
      disponible: !true,
      imagenPrincipal: require("@/assets/Producto.png"),
      imagenes: [
        { imagen: require("@/assets/Producto.png") },
        { imagen: require("@/assets/laptop1.jpg") },
        { imagen: require("@/assets/laptop2.jpg") },
        { imagen: require("@/assets/laptop3.jpg") }
      ]
    };
  },
  methods: {
    cambiarimg(i) {
      this.imagenPrincipal = i.imagen;
    }
  }
};
</script>
<style>
.fuente-link {
  font-size: 14px !important;
  color: darkgray !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
