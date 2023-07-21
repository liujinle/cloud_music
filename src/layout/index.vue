<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider width="200">
          <Sider />
        </n-layout-sider>
        <n-layout-content>
        <RouterView />  
        
        
        </n-layout-content>
      </n-layout>
      <n-layout-footer style="height: 68px">成府路</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts"></script>

<style scoped></style>
