<script setup lang="ts">
  import DiscoveryHeader from '@/components/DiscoveryHeader.vue';
  import Navigation from '@/components/Navigation.vue';
  import PictureGalleryContainer from '@/components/PictureGalleryContainer.vue';
</script>

<template>
  <div id="content">
    <DiscoveryHeader />
    <Navigation />
    <Suspense>
    <template #default>
      <PictureGalleryContainer />
    </template>
    <template #fallback>
      <div class="loading">
        Loading Images...
      </div>
    </template>
  </Suspense>
  </div>
</template>

<style scoped>
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
