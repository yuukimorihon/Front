<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex fill-height">
      <!-- 
        リストの設定
        https://next.vuetifyjs.com/en/components/lists/
       -->
      <v-list dense>
        <v-subheader>メニュー</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="page in pages" :key="page.name" :href="page.path">
            <!-- アイコン設定 -->
            <template v-slot:prepend>
              <v-icon :icon="page.icon"></v-icon>
            </template>
            <!-- 遷移先タイトル設定 -->
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-responsive>
  </v-container>
</template>

<script setup>
  const pages = [
    {
      name: "ユーザーリスト",
      icon: "mdi-account-multiple",
      path: "/users",
    },
  ]
</script>
