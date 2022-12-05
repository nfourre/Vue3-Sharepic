import { defineStore } from "pinia";

interface AuthorInterface {
  id: number,
  firstname: string,
  lastname: string,
}

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    currentAuthor: null as AuthorInterface | null,
  }),
  getters: {
    author: (state) => state.currentAuthor,
  },
  actions: {
    updateCurrentAuthor(data: AuthorInterface) {
      this.$patch({
        currentAuthor: data
      })
    }
  }
})