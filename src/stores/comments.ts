import { defineStore } from "pinia";

interface AuthorInterface {
  id: number;
  firstname: string;
  lastname: string;
}

interface CommentInterface {
  id: number;
  text: string;
  authorId: number;
  imageId: number;
  createdAt: number;
  author?: AuthorInterface;
}

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    commentArray: [] as CommentInterface[]
  }),
  getters: {
    comments: (state) => state.commentArray
  },
  actions: {
    updateCommentArray(data: CommentInterface[]) {
      this.$patch({
        commentArray: [...data]
      })
    },
    addComment(data: CommentInterface) {
      this.$patch({
        commentArray: [...this.commentArray, data]
      })
    }
  }
})