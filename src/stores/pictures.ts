import { defineStore } from "pinia";
import { Category } from "@/enums/category";
import { Title } from "@/enums/title";
import { Subtitle } from "@/enums/subtitle";
import { getPictures } from '@/services/pictures.service';

interface PictureInterface {
  authorId: number;
  createdAt: number;
  editorChoice: Boolean;
  id: number;
  rating: number;
  title: string;
  url: string;
}

export const usePictureStore = defineStore({
  id: 'picture',
  state: () => ({
    picturesArray: [] as PictureInterface[],
    currentCategory: Category.POPULAR,
    currentPicture: null as PictureInterface | null
  }),
  getters: {
    allPicture: (state) => state.picturesArray,
    pictures: (state) => {
      let data;
      switch (state.currentCategory) {
        case Category.POPULAR:
          data = state.picturesArray.sort((a: PictureInterface, b: PictureInterface) => {
            return b.rating - a.rating
          });
          break;
      
        case Category.NEWEST:
          data = state.picturesArray.sort((a: PictureInterface, b: PictureInterface) => {
            return a.createdAt - b.createdAt
          });
          break;
      
        case Category.EDITOR:
          data = state.picturesArray.filter((pic: PictureInterface) => {
            return pic.editorChoice
          })
          break;
      }

      return data;
    },
    category: (state) => state.currentCategory,
    title: (state) => {
      switch (state.currentCategory) {
        case Category.POPULAR:
          return Title.POPULAR
      
        case Category.NEWEST:
          return Title.NEWEST
      
        case Category.EDITOR:
          return Title.EDITOR
      
      }
    },
    subtitle: (state) => {
      switch (state.currentCategory) {
        case Category.POPULAR:
          return Subtitle.POPULAR
      
        case Category.NEWEST:
          return Subtitle.NEWEST
      
        case Category.EDITOR:
          return Subtitle.EDITOR
      
      }
    },
  },
  actions: {
    updatePictures(data: any[]) {
      this.$patch({
        picturesArray: [...data]
      })
    },
    updateCategory(data: Category) {
      this.$patch({
        currentCategory: data
      })
    },
    async loadPictures() {
      if(this.pictures.length < 1) {
        const data = await getPictures();
        this.$patch({
          picturesArray: [...data]
        })
      }
    },
    updateCurrentPicture(data: PictureInterface) {
      this.$patch({
        currentPicture: data
      })
    },
    addPicture(data: PictureInterface) {
      this.$patch({
        picturesArray: [...this.picturesArray, data]
      })
    }
  }
})