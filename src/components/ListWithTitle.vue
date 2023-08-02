<template>
  <div class="musiclist">
    <div class="musiclist-title">{{ props.title }}</div>
    <div class="musiclist-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
.musiclist {
  margin-top: 15px;
  .musiclist-title {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 15px;
    color: #333333;
    &::after {
      content: ">";
      display: inline-block;
      margin-left: 5px;
    }
  }
  .musiclist-content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
