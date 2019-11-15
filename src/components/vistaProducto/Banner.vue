<template>
<v-container fluid="" class="p-0 m-0">
   <v-layout class="blue p-0 m-0">
  
           <v-img contain="" height="240" width="100%" :src="require('@/assets/Asuslogo.png')"></v-img>
       
       
 
    </v-layout>
</v-container>
   
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