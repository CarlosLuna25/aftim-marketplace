<template>
   <v-sheet width="100%"  max-height="340">
<v-carousel 
            cycle
            height="100%"
            hide-delimiter-background
        >
            <v-carousel-item >
             
                    <v-img contain=""
                    :src="require('@/assets/COMIDA.jpg')"
                    aria-placeholder="asdasdasda"
                    width="100%"
                   
                    />
              
            </v-carousel-item>
    
            <v-carousel-item >
              
                    <v-img 
                   
                        contain=""
                        :src="require('@/assets/FARMACIA.jpg')"
                        aria-placeholder="asdasdasda"
                    />
               
            </v-carousel-item>

            <v-carousel-item  >
              
                    <v-img contain=""
                    
                        :src="require('@/assets/SPORT.jpg')"
                        aria-placeholder="asdasdasda" 
                    />
              
            </v-carousel-item>
        </v-carousel>

   </v-sheet>
        
    
</template>

<script>
    export default {
        inject: ['theme'],
    }
</script>

<style lang="scss" scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
    
        position: absolute;
        width: 100%;
    }
</style>
