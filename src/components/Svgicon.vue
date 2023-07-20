<template>
  <svg class="icon" aria-hidden="true" :style="props.iconStyle" >
    <use :xlink:href="'#' + props.iconClass"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconClass: string;
  iconStyle?: string;
  iconEvent?:string
}>();


</script>

<style scoped lang="scss">
svg {
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
</style>
