<template>
  <!-- 
    v-app-bar
    https://next.vuetifyjs.com/en/components/app-bars/
   -->
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
      {{ title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  const title = import.meta.env.VITE_TITLE
</script>
