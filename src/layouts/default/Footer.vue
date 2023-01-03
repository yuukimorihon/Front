<template>
  <!-- 
    v-footer
    https://next.vuetifyjs.com/en/components/footers/
   -->
  <v-footer color="primary">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link.label" color="white" variant="text" class="mx-2" rounded="xl">
        <router-link :to="link.to">{{ link.label }}</router-link>
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — 
        <strong><a :href="`https://github.com/${authorId}/`" target="_blank">{{ authorId }}</a></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  const links = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About Us',
      to: '/about',
    },
    {
      label: 'Team',
      to: '/team',
    },
    {
      label: 'Services',
      to: '/services',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'Contact Us',
      to: '/contact',
    },
  ]
  const authorId = import.meta.env.VITE_AUTHOR_GITHUB_ID
</script>
