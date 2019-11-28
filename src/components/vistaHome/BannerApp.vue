<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="grey lighten-5 pt-10">
      <h1>Descarga nuestra app para una mejor experiencia</h1></v-row
    >
    <v-row
      align="center"
      justify="center"
      class="grey lighten-5 pa-3"
      style="height: 100%;"
    >
      <v-card
        color="transparent"
        class="ma-3 text-center"
        outlined
        tile
        width="500"
        height="300"
      >
        <v-sheet width="100%" class="grey lighten-5 pa-3">
          <v-img
            width="100%"
            height="200"
            contain
            :src="require('@/assets/androidimg.jpg')"
          >
          </v-img>
        </v-sheet>

        <v-btn class="ma-2" tile large color="transparent" icon>
          <v-img width="160" :src="require('@/assets/android.svg')"></v-img>
        </v-btn>
      </v-card>

      <v-divider class="py-4 hidden-md-and-up "></v-divider>

      <v-divider vertical="" class="py-4 hidden-sm-and-down "></v-divider>

      <v-card
        color="transparent"
        class="ma-3  text-center"
        outlined
        tile
        width="500"
        height="300"
      >
        <v-sheet width="100%" height="" class="grey lighten-5 pa-3">
          <v-img
            width="100%"
            height="200"
            contain
            :src="require('@/assets/iosimg.jpg')"
          >
          </v-img>
        </v-sheet>

        <v-btn class="ma-2" tile large color="transparent" icon>
          <v-img width="160" :src="require('@/assets/ios.svg')"></v-img>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
