<script setup lang="ts">
  import { ref } from 'vue';
  import Header from './components/Header.vue';
  import Upload from './components/Upload.vue';

  const showUploadBool = ref(false);
  const onShowUpload = () => {
    showUploadBool.value = true;
  }

  const onHideUpload = () => {
    showUploadBool.value = false;
  }
</script>

<template>
  <Header @show-upload="onShowUpload" />
  <Suspense>
    <RouterView />
  </Suspense>
  <Upload v-if="showUploadBool" @hide-upload="onHideUpload" />
</template>

<style scoped>
</style>