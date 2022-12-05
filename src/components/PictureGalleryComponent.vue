<script setup lang="ts">
import Picture from '@/components/Picture.vue';

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
  pictures: Picture[]
}>();

console.log(props)

</script>

<template>
  <div class="discovery_body_wrapper">
    <div class="discovery_body">
      <div class="discovery_body_grid">
        <ul>
          <Picture v-for="picture in pictures" :picture="picture" />
          <li class="photo_thumbnail"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .discovery_body_wrapper {
    background-color: #f7f8fa;
    padding: 20px 50px;
  }

  .discovery_body {
    display: flex;
    flex-wrap: wrap;
  }

  .photo_thumbnail {
    height: 40vh;
    flex-grow: 1;
    opacity: 1;
    background-color: #eeeff2;
  }

  .photo_thumbnail:last-child {
    flex-grow: 10;
  }

  .photo_thumbnail img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  .discovery_body_grid ul {
    display: flex;
    flex-wrap: wrap;
  }

  .discovery_body_grid ul > li:last-child {
    list-style: none;
    flex-grow: 10;
  }
</style>