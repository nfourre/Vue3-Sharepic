<script setup lang="ts">
import { usePictureStore } from '@/stores/pictures';

const store = usePictureStore();
</script>

<template>
  <div class="discovery_header_wrapper">
    <div class="discovery_header">
      <h1>{{ store.title }}</h1>
      <p>{{ store.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
  .discovery_header_wrapper {
    display: flex;
    height: 130px;
    padding: 0 60px;
    background-color: #fff;
  }

  .discovery_header h1 {
    font-size: 36px;
    font-weight: 600;
    color: #222;
    margin: 32px 0 10px 0;
  }

  .discovery_header p {
    font-size: 18px;
    line-height: 1.4em;
    color: #525558;
  }
</style>