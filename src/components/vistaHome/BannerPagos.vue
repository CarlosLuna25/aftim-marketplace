<template>
  
   <v-sheet width="100%"  max-height="540">
<v-carousel 
            height="100%"
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
        >
            <v-carousel-item>
             
                    <v-img contain=""
                    :src="require('@/assets/ola.png')"
                    aria-placeholder="asdasdasda"
                    width="100%"
                    >
                    <v-row align="start" justify="start">
                      <v-card outlined light="" width="100" height="100" class="pa-1 ml-10 mt-10" color="transparent">
                        <v-img class="animated pulse infinite parrafo" :src="require('@/assets/aftim.png')"></v-img>
                      </v-card>
                    </v-row>
                    <v-row align="center" justify="center" >
                     <h3>ASDADASD</h3>
                    </v-row>
                    
                    </v-img>
              
            </v-carousel-item>
    
          
        </v-carousel>

   </v-sheet>
        
 
</template>
<script>

export default {
   

    
}
</script>
<style scoped>
.parrafo{
  animation-delay: 1s;
  animation-duration: 2s !important;
  text-align: center

}
.animacionImagen1{
  animation-name: imagen1;
  animation-duration: 10s;
  animation-iteration-count: 3;
  animation-delay: 5s;
  
  
}
@keyframes imagen1
 { from{
   right: -1000px;
 }
 to{
   right: 50px;
 }

  }
  


</style>
<style src="@/plugins/animate.css" scoped>

</style>