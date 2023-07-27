<template>
  <div class="view_container">
    <tabs :titles="data.titles" />
  </div>
</template>

<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  redirect: "/findmusic/exclusive",
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
