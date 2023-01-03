<template>
  <UserDialog ref="userDialogComponent" />
  <div class="text-right mr-5">
    <v-btn @click="openCreateUserDialog" color="primary" class="mb-2">
      新規作成
    </v-btn>
  </div>
  <v-table
    fixed-header
    height="500px">
    <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in userStore.users" :key="user.id">
        <td>
          {{ user.id }}
        </td>
        <td>
          {{ user.name }}
        </td>
        <td>
          <v-btn
            color="blue darken-1"
            text
            @click="openEditedUserDialog(user)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
  import { ref } from 'vue'
  import { useUserStore } from '@/store/user'
  import UserDialog from '@/components/dialog/UserDialog.vue'

  // store
  const userStore = useUserStore()
  userStore.getUsers()

  // ref
  const userDialogComponent = ref()

  // methods
  const openCreateUserDialog = () => {
    userDialogComponent.value.open(null, "")
  }
  const openEditedUserDialog = (user) => {
    userDialogComponent.value.open(user.id, user.name)
  }
</script>
