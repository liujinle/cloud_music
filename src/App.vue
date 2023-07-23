<script setup lang="ts">
import layout from "@/layout/index.vue";

import { useThemeStore } from "@/store/useTheme";
const theme = useThemeStore();







</script>

<template>
  <div>
    <layout />
  </div>
</template>

<style>
.n-tabs .n-tabs-bar {
    background-color: v-bind('theme.themeColor');
  }


</style>
