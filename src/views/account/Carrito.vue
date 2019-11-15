<template>
  <div>
    <AppBar />
    <v-container fluid="">
      <v-row>
        <v-col cols="12" md="7">
           <v-card width="100%" class="pa-5 my-3">
        <v-card
          v-for="(n, index) in productos"
          :key="index"
          class="mx-auto my-2"
          max-width="50%"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                <v-icon>delete</v-icon>
                <v-btn text x-small="" @click="Eliminar(index)"
                  >Eliminar producto</v-btn
                >
              </div>
              <v-list-item-title class="headline mb-1"
                ><p>{{ n.nombre }}</p></v-list-item-title
              >
              <v-list-item-title class="headline mb-1 blue--text">
                <p class="ml-auto">BS {{ n.precio }}</p></v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-avatar title size="70" color="grey">
              <v-sheet width="100%"
                ><v-img
                  width="100%"
                  :src="require('@/assets/Producto.png')"
                ></v-img
              ></v-sheet>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item class="mb-2 ml-10 pl-5">
            <v-btn
              
              v-if="productos[index].cantidad > 1"
             
             icon
              @click="productos[index].cantidad--"
              ><v-icon>remove</v-icon></v-btn
            >
            <v-btn
             
              v-else
              disabled=""
            
             icon
              @click="productos[index].cantidad--"
              ><v-icon>remove</v-icon></v-btn
            >
            <v-btn icon v-model="n.cantidad" class="font-weight-bold">{{
              productos[index].cantidad
            }}</v-btn>
            <v-btn
              color="light-blue darken-4"
              dark
              depressed
              icon=""
              class="display-1"
              @click="productos[index].cantidad++"
              ><v-icon>add</v-icon></v-btn
            >
          </v-list-item>
        </v-card>
      
      </v-card>

        </v-col> 
       
       
        <v-col md="5" class="mt-3"  >
 <v-card min-height="300" class="text-center">
          <v-card-text class="pa-10 text-center">
             <h2 class=" pt-10">Subtotal= Bs. {{ Subtotal }}</h2>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
     
    </v-container>
    <Footer />
  </div>
</template>
<script>
import AppBar from "@/components/navbar/AppBar";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    AppBar,
    Footer
  },
  data() {
    return {
      total: 121,
      productos: [
        {
          nombre: "Gaming Laptop asus",
          precio: 200000,
          cantidad: 1
        },
        {
          nombre: "Mouse",
          precio: 200000,
          cantidad: 1
        },
        {
          nombre: "Teclado",
          precio: 200000,
          cantidad: 1
        },
        {
          nombre: "memoria Ram",
          precio: 200000,
          cantidad: 1
        }
      ]
    };
  },
  computed: {
    Subtotal() {
        let sumatoria=0;
        for (let index = 0; index < this.productos.length; index++) {
          let temporal= this.productos[index].precio*this.productos[index].cantidad;
          sumatoria=sumatoria+temporal
           
        }
        
      return sumatoria;
    }
  }
};
</script>
