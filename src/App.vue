<script setup lang="ts">
import layout from "@/layout/index.vue";
import { useThemeStore } from "./store/useTheme";
const store = useThemeStore();
</script>

<template>
  <div id="app">
    <layout />
  </div>
</template>

<style>
:where(.css-dev-only-do-not-override-eq3tly).ant-tabs
  .ant-tabs-tab.ant-tabs-tab-active
  .ant-tabs-tab-btn {
  color: black;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-tabs .ant-tabs-ink-bar {
  background-color: v-bind("store.themeColor");
}
</style>
