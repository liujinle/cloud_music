<template>
  <div>
    <div class="tabs">
      <div class="tab" v-for="(item, i) in props.titles" :key="item.title">
        <RouterLink :to="item.path"
          ><span
            @click="spanIsActive(i)"
            :class="item.isActive ? 'tab_active tab_s ' : 'tab'"
          >
            {{ item.title }}
          </span></RouterLink
        >
      </div>
    </div>

    <div class="tab_view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/useTheme";


type Title = {
  title: string;
  isActive: boolean;
  path: string;
};
const props = defineProps<{
  titles: Title[];
}>();


const theme = useThemeStore();

function spanIsActive(i: number) {
  props.titles.forEach((item, index) => {
    item.isActive = index === i;
  });
}


</script>

<style scoped>
.tab {
  font-size: 16px;
  margin: 10px 10px;
}
.tab_s {
  font-size: 16px;
  user-select: none;
  margin: 10px 10px;
  position: relative;
  &::after {
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 75%;
    height: 3px;
    border-radius: 3px;
    background-color: v-bind("theme.themeColor");
    transition: all 0.3s;
  }
}

.tab_active {
  font-size: 20px;
  color: #333333;
  font-weight: 800;
}

.tabs {
  display: flex;
  padding: 10px 10px;
  justify-content: start;
  align-items: center;
}
</style>
