<template>
  <a-table
    size="middle"
    :columns="columns"
    :data-source="tableData"
    :bordered="false"
    :pagination="false"
  >
  </a-table>
</template>

<script setup lang="ts">
import * as dayjs from "dayjs";
const tracks: any = inject("tracks");

console.log(tracks.value);

const tableData = ref<
  {
    key: number;
    control: string;
    title: string;
    singer: string;
    album: string;
    duration: string;
  }[]
>([]);

tableData.value = tracks.value.map((track: any, index: number) => {
  return {
    key: index + 1,
    title: track.name,
    singer: track.ar[0].name,
    album: track.al.name,
    duration: dayjs(track.dt).format("mm:ss"),
  };
});

const columns = [
  {
    title: "操作",
    dataIndex: "control",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "歌手",
    dataIndex: "singer",
  },
  {
    title: "专辑",
    dataIndex: "album",
  },
  {
    title: "时间",
    dataIndex: "duration",
  },
];
</script>

<style >
.table-striped{
    background-color: rgba(0, 0, 0, 0.1);
}


</style>
