// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: []
  }),
  actions: {
    // ユーザー一覧取得
    async getUsers() {
      const response = await axios.get('/user/')
      this.users = response.data.users
    },
    // ユーザー作成
    async createUser(name) {
      await axios.post('/user/', { name })
      await this.getUsers()
    },
    // ユーザー更新
    async updateUser(id, name) {
      await axios.put('/user/', { id, name })
      await this.getUsers()
    }
  }
})
