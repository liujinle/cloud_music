<template>
  <div class="view_container">
    <!-- <n-card style="margin-bottom: 16px">
      <n-tabs type="line" animated>
        <template v-for="(item, i) in data.titles" :key="item.title">
          <n-tab-pane :name="item.title" :tab="item.path">
            <template v-slot:tab>
              
            </template>
            <component :is="item.path"></component>
          </n-tab-pane>
        </template>
      </n-tabs>
    </n-card> -->

    <tabs :titles="data.titles" />
  </div>
</template>

<script setup lang="ts">
import { definePage } from "vue-router/auto";
definePage({
  redirect: "/findmusic/personal",
});
type Data = {
  titles: Titles[];
};

type Titles = {
  title: string;
  isActive: boolean;
  path: string;
};
const data = <Data>reactive({
  titles: [
    {
      title: "个性推荐",
      isActive: true,
      path: "/findmusic/exclusive",
    },
    {
      title: "专属定制",
      isActive: false,
      path: "/findmusic/personal",
    },
    {
      title: "歌单",
      isActive: false,
      path: "/findmusic/musiclist",
    },
    {
      title: "排行榜",
      isActive: false,
      path: "/findmusic/ranklist",
    },
    {
      title: "歌手",
      isActive: false,
      path: "/findmusic/singer",
    },
    {
      title: "最新音乐",
      isActive: false,
      path: "/findmusic/newmusic",
    },
  ],
});


</script>

<style scoped lang="scss">


.view_container {
  user-select: none;
}
</style>
