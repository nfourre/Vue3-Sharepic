<script setup lang="ts">
import { Category } from '@/enums/category';
import { usePictureStore } from '@/stores/pictures';

const store = usePictureStore();
</script>

<template>
  <div class="tab_navigation_wrapper">
    <ul class="tabs">
      <li :class="{active: store.category === Category.POPULAR}">
        <a @click="store.updateCategory(Category.POPULAR)">populaire</a>
      </li>
      <li :class="{active: store.category === Category.NEWEST}">
        <a @click="store.updateCategory(Category.NEWEST)">nouveautés</a>
      </li>
      <li :class="{active: store.category === Category.EDITOR}">
        <a @click="store.updateCategory(Category.EDITOR)">editors' choice</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .tab_navigation_wrapper {
    position: relative;
    transform: translateZ(0);
    border-bottom: 1px solid #eeeff2;
  }

  .tab_navigation_wrapper .tabs {
    background-color: #fff;
    list-style-type: none;
    text-align: left;
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 50px;
  }

  .tab_navigation_wrapper .tabs > li {
    display: inline;
    margin: 0 10px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
    list-style: none;
  }

  .tab_navigation_wrapper .tabs > li > a {
    font-size: 14px;
    display: inline-block;
    padding: 15px 0;
    border-bottom: 2px solid transparent;
    color: #71767a;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }

  .tab_navigation_wrapper .tabs > li.active > a {
    color: #0099e5;
    border-bottom: 2px solid #0099e5;
  }
</style>