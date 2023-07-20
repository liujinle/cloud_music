<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;"> </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          <template v-if="theme.isThemeOpen">
            <ThemeBox />
          </template>
        </n-layout-content>
      </n-layout>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/useTheme";
const theme = useThemeStore();
</script>

<style scoped></style>
