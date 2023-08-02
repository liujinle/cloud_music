<template>
  <div class="layout">
    <div class="layout_header">
      <Header />
    </div>

    <div class="layout_con">
      <div class="layout_sider">
        <Sider />
      </div>
      <div class="layout_con_view">
        <content />
      </div>
    </div>

    <div class="layout_footer">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import content from "@/views/index.vue";
</script>

<style scoped lang="scss">
.ant-layout .ant-layout-header {
  padding-inline: 0px;
  line-height: 0px;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-layout .ant-layout-sider {
  background-color: #f5f5f5;
}

.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .layout_header {
    flex-shrink: 0;
  }
  .layout_con {
    flex: 1;
    height: calc(100vh - 128px);
    display: flex;
    overflow: hidden;
    .layout_sider {
      width: 160px;
    }
    .layout_con_view {
      width: 820px;
      margin: 0 auto;
    }
  }
  .layout_footer {
    background-color: pink;
    height: 74px;
    width: 100%;
    flex-shrink: 0;
  }
}
</style>
