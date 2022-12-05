<script setup lang="ts">
  import PictureGalleryComponent from '@/components/PictureGalleryComponent.vue';
  import { getPictures } from '@/services/pictures.service';
  import { usePictureStore } from '@/stores/pictures';

  const store = usePictureStore();
  store.loadPictures();
  //const pictureData = await getPictures();
  // store.updatePictures(pictureData);
</script>

<template>
  <PictureGalleryComponent :pictures="store.pictures" />
</template>

