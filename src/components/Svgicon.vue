<template>
    <svg class="icon" aria-hidden="true" :style="props.iconStyle">
      <use :xlink:href="'#' + props.iconClass"></use>
    </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconClass: string;
  iconStyle?: string;
}>();
</script>

<style scoped></style>
