<template>
  <div class="list">
    <div class="list_view">
      <template v-for="(item, i) in data.lists">
        <div @click="changeView(i)">
          <span :class="item.listView ? 'active' : ''">{{
            item.listName
          }}</span>
        </div>
      </template>
    </div>
    <div class="list_music">
      <div class="list_mymusic">
        <div class="title">我的音乐</div>
        <div class="mymusic_box">
          <template v-for="(item) in data.mymusic" :key="item.iconname">
            <div>
              <Svgicon :icon-class="item.iconClass"></Svgicon>
              {{ item.iconName }}
            </div>
          </template>
        </div>
      </div>
      <div class="list_music_list">
        <div class="title">创建的歌单</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Data = {
  lists: Lists[];
  mymusic: MymusicBox[];
};
type Lists = {
  listName: string;
  listView: boolean;
};
type MymusicBox = {
  iconClass: string;
  iconName: string;
};

const data = <Data>reactive({
  mymusic: [
    {
      iconClass: "icon-aixin",
      iconName: "我喜欢的音乐",
    },
    {
      iconClass: "icon-xiazai",
      iconName: "本地与下载",
    },
    {
      iconClass: "icon-zuijinbofang",
      iconName: "最近播放",
    },
  ],
  lists: [
    {
      listName: "发现音乐",
      listView: true,
    },
    {
      listName: "播客",
      listView: false,
    },
    {
      listName: "视频",
      listView: false,
    },
    {
      listName: "关注",
      listView: false,
    },
    {
      listName: "直播",
      listView: false,
    },
    {
      listName: "私人漫游",
      listView: false,
    },
  ],
});

function changeView(index: number) {
  data.lists.forEach((item, i) => {
    item.listView = index === i;
  });
}
</script>

<style scoped lang="scss">
.active {
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: 600;
}
.list {
    border-right:1px solid #e0e0e0 ;
  cursor: pointer;
  padding: 0 2px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .list_view {
    display: flex;
    flex-direction: column;
    div {
      padding: 4px 2px 4px 0;
      span {
        display: inline-block;
        width: 100%;
        padding: 6px 0 6px 4px;
        border-radius: 2px;
        user-select: none;

        box-sizing: border-box;
      }
    }
  }
  .list_music {
    .title {
      font-size: 12px;
      color: #999999;
      padding: 10px 2px 10px 0;
    }

    .mymusic_box {
      font-size: 14px;
      div{
        padding: 10px 2px 10px 0;
      }
    }
  }
}
</style>
