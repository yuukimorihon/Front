<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">ユーザー{{ labelText }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-if="user.id">
            <v-col cols="12">
              <v-text-field v-model="user.id" label="ID" disabled />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.name"
                label="Name"
                required />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="close">
          キャンセル
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          :disabled="loading"
          :loading="loading"
          @click="user.id ? updateUser(): createUser()">
          {{ labelText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'

// data
const dialog = ref(false)
const user = ref({ id: null, name: "" })
const loading = ref(false)

// store
const userStore = useUserStore()

// computed
const labelText = computed(() => user.value.id ? '更新': '作成')

// methods
const open = (id, name) => {
  dialog.value = true
  user.value = { id, name }
}

const createUser = async () => {
  loading.value = true
  await userStore.createUser(user.value.name)
  close()
}

const updateUser = async () => {
  loading.value = true
  await userStore.updateUser(user.value.id, user.value.name)
  close()
}

const close = () => {
  loading.value = false
  dialog.value = false
}

defineExpose({ open })
</script>
