<template>
    <div>
        <v-sheet width="500" height="500" > 
            <v-card  width="100%" elevation="2" height="60" class="font-weight-bold text-center"> <h2 class="pt-2">Aftim <v-icon>shopping_cart</v-icon></h2> </v-card>
           <v-container v-if="vacia">
               <v-row style="height:100% " align="center" justify="center">
                  <div class="text-center">
               <p><v-icon>shopping_cart</v-icon></p>
               <p class="font-italic font-weight-bold">Tu carrito se encuentra vacio</p>
               <p class="font-italic mt-5" >Te invitamos a volver a nuestras tiendas y agregar productos a tu carrito de compras. </p>
            </div>

            </v-row>
           </v-container>
          <v-container v-else style="background-color:white">
            <v-card
            v-for="n in 3" :key="n"
    class="mx-auto mt-2"
    width="100%"
    
    elevation="0"
  >
    <v-list-item two-line>
        <v-list-item-avatar
        tile
        size="80"
       
      ><v-img src="http://www.totis.com.mx/wp-content/uploads/luchones-cat-mobile.png" ></v-img></v-list-item-avatar>
       <v-list-item-content>
          <v-list-item-title >Nombre de producto</v-list-item-title>
          <v-list-item-subtitle >precio</v-list-item-subtitle> 
          <div class=" mt-0 text-center">
              <v-btn icon><v-icon>remove</v-icon></v-btn>
              <v-btn icon text>{{cantidad}}</v-btn>
      <v-btn icon><v-icon>add</v-icon></v-btn>
      
    </div>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">delete</v-icon>
          </v-btn>
        </v-list-item-action>
        
    </v-list-item>

   
  </v-card>

          </v-container>
     
            
            
          
  <v-sheet width="500" class="fix" v-if="!vacia">
               <v-card   width="100%" elevation="2" height="60" class="font-weight-bold text-center fix"> 
                   <h2 class="pt-2">Subtotal: </h2> 
                   </v-card>

             </v-sheet>
        </v-sheet >
         
          
    </div>
</template>
<script>
export default {
    data() {
        return {
            cantidad:1,
           vacia:false, 
        productos: [
        {
                      
                        precio:'5$',
                        nombre:'Cerveza Corona',
                      
                        img:'https://upload.wikimedia.org/wikipedia/commons/9/99/Cerveza-corona-bavaria-productos-colombianos.png'
                    },
                    {
                       
                        precio:'20$',
                        nombre:'Yogurt',
                        
                        img:'https://my7.digitalexperience.ibm.com/1285e1d2-5151-4eab-9da2-775291879cb9/dxresources/a03c/a03c0636-a5a0-4f4f-8e48-5b47a81b04a9.png?resize=450px%3A450px&crop=450%3A450%3B0%2C0'
                    },
                    {
                      
                        precio:'3$',
                        nombre:'Pepito Luchon',
                        
                        img:'http://www.totis.com.mx/wp-content/uploads/luchones-cat-mobile.png'
                    },
                    {
                      
                        precio:'3$',
                        nombre:'Galleta Maria',
                      
                        img:'https://images.squarespace-cdn.com/content/v1/595a795e414fb53f397969f6/1560869332786-KEKUV9VZGA8T57XGES7C/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIedjZT6_OBzi2ofH1EqNdNeCRxNMlbxs9807lIebBlcA/productos-maria.png'
                    },
                    {
                      
                        precio:'5$',
                        nombre:'Desinfectante',
                       
                        img:'https://png.pngtree.com/png-clipart/20190225/ourmid/pngtree-cleaning-products-on-transparent-background-png-image_704301.jpg'
                    },

                    {
                       
                        precio:'5$',
                        nombre:'Grupo de -1',
                        
                        img:'https://png.pngtree.com/png-clipart/20190225/ourmid/pngtree-cleaning-products-on-transparent-background-png-image_704301.jpg'
                    },
                    
      ]
        }
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
}
</script>
<style scoped>
.fix{
    position: fixed!important;
}
</style>