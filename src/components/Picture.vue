<script setup lang="ts">
interface Picture {
  authorId: number;
  createdAt: number;
  editorChoice: Boolean;
  id: number;
  rating: number;
  title: string;
  url: string;
}

const props = defineProps<{
  picture: Picture
}>()
</script>

<template>
  <li class="photo_thumbnail">
    <router-link :to="`/picture/${picture.id}`">
      <img
        :src="picture.url"
        :alt="picture.title"
        loading="lazy"
      />
    </router-link>
  </li>
</template>

<style scoped>
 li {
    margin: 5px;
    height: 40vh;
    flex-grow: 1;
    list-style: none;
  }

  li > a > img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
</style>