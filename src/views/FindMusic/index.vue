<template>
  <div class="view_container">
    <n-card style="margin-bottom: 16px">
      <n-tabs type="line" animated>
        <template v-for="(item, i) in data.titles" :key="item.title">
          <n-tab-pane :name="item.title" :tab="item.path">
            <template v-slot:tab>
              <span
                @click="spanIsActive(i)"
                :class="item.isActive ? 'tab_active tab' : 'tab'"
              >
                {{ item.title }}
              </span>
            </template>
            <component :is="item.path"></component>
          </n-tab-pane>
        </template>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import exclusive from "@/views/FindMusic/Exclusive/index.vue";
import personal from "@/views/FindMusic/Personal/index.vue";
type Data = {
  titles: Titles[];
};

type Titles = {
  title: string;
  isActive: boolean;
  path: VNode;
};
const data = <Data>(<unknown>shallowReactive({
  titles: [
    {
      title: "个性推荐",
      isActive: true,
      path: exclusive,
    },
    {
      title: "专属定制",
      isActive: false,
      path: personal,
    },
    {
      title: "歌单",
      isActive: false,
      path: exclusive,
    },
    {
      title: "排行榜",
      isActive: false,
      path: exclusive,
    },
    {
      title: "歌手",
      isActive: false,
      path: exclusive,
    },
    {
      title: "最新音乐",
      isActive: false,
      path: exclusive,
    },
  ],
}));

function spanIsActive(i: number) {
  data.titles.forEach((item, index) => {
    item.isActive = index === i;
  });
}
</script>

<style scoped lang="scss">
.tab {
  font-size: 16px;
  user-select: none;
}

.tab_active {
  font-size: 20px;
  color: #333333;
  font-weight: 800;
}

.view_container {
  user-select: none;
}
</style>
