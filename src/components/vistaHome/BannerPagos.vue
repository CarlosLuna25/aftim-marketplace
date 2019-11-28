<template>
  <v-sheet width="100%" max-height="540">
    <v-carousel
      height="100%"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
    >
      <v-img
        contain=""
        :src="require('@/assets/ola.png')"
        aria-placeholder="asdasdasda"
        width="100%"
        class="img"
        gradient="to top right, rgba(205,233,288,.55), rgba(115,194,236,.2)"
      >
        <v-row align="start" justify="start">
          <v-card
            outlined
            light=""
            width="100"
            height="100"
            class="pa-1 ml-10 mt-10"
            color="transparent"
          >
            <v-img
              class="animated pulse infinite parrafo"
              :src="require('@/assets/aftim.png')"
            ></v-img>
          </v-card>
          <v-row class="mt-6 ml-10 pl-10 pt-5" align="center" justify="start">
            <h3
              class="overpass-italic font-weight-light display-2 ml-10 text-uppercase"
            >
              Paga facil, Rapido y seguro
            </h3>
          </v-row>
        </v-row>
        <v-row class="ml-10" align="center" justify="center">
          <v-col cols="4" md="2">
            <v-card elevation="0" width="100" height="100">
              <v-img
                class="animated pulse infinite parrafo"
                height="100%"
                :src="require('@/assets/visaMaster.jpg')"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4" md="2">
            <v-card elevation="0" width="100" height="100" color="white">
              <v-img
                class="animated pulse infinite parrafo"
                height="100%"
                :src="require('@/assets/bpm.png')"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="4" md="2">
            <v-card elevation="0" width="100" height="100">
              <v-img
                class="animated pulse infinite parrafo"
                height="100%"
                :src="require('@/assets/visaMaster.jpg')"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </v-carousel>
  </v-sheet>
</template>
<script>
export default {};
</script>
<style scoped>
.absolutee {
  z-index: 1000;
}
.img {
  opacity: 1 !important;
}
.parrafo {
  animation-delay: 1s;
  animation-duration: 2s !important;
  text-align: center;
}
.animacionImagen1 {
  animation-name: imagen1;
  animation-duration: 10s;
  animation-iteration-count: 3;
  animation-delay: 5s;
}

@keyframes imagen1 {
  from {
    right: -1000px;
  }
  to {
    right: 50px;
  }
}
</style>
<style src="@/plugins/animate.css" scoped></style>
<style src="@/plugins/fuentes/fuentes.css" scoped></style>
