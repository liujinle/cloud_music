<template>
  <a-card
    :tab-list="data.tabList"
    :active-tab-key="key"
    @tabChange="(key) => onTabChange(key, 'key')"
  >
    <template v-if="key === 'songlist'">
      <ListTable />
    </template>
    <template v-else-if="key === 'commont'">
      {{ "commont" }}
    </template>
    <template v-else>
      {{ "favoritor" }}
    </template>
  </a-card>
</template>

<script setup lang="ts">
type Data = {
  tabList: TabList[];
};

type TabList = {
  key: string;
  tab: string;
};

const key = ref<string>("songlist");

const data = <Data>reactive({
  tabList: [
    {
      key: "songlist",
      tab: "歌曲列表",
    },
    {
      key: "commont",
      tab: "评论",
    },
    {
      key: "favoritor",
      tab: "收藏者",
    },
  ],
});

function onTabChange(value: string, type: string) {
  if (type === "key") {
    key.value = value;
  }
}
</script>

<style scoped></style>
