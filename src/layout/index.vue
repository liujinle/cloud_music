<template>
  <a-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider> 
        <Sider />
      </a-layout-sider>
      <a-layout-content> 
        <content />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import content from "@/views/index.vue";
</script>

<style scoped>
.ant-layout .ant-layout-header {
  padding-inline: 0px;
  line-height:0px;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-layout .ant-layout-sider{
  background-color: #f5f5f5;
}
</style>
