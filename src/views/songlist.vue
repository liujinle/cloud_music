<template>
  <a-spin tip="加载中" :spinning="spinning" />
  <div class="song-list" v-if="!spinning">
    <div class="song-info">
      <div class="song-info-left">
        <a-image
          :width="188"
          :height="188"
          :preview="false"
          :src="data.playlist.coverImgUrl"
        />
      </div>
      <div class="song-info-right">
        <div class="song-info-name">
          <span>歌单</span>
          {{ data.playlist.name }}
        </div>
        <div class="song-info-creator">
          <div class="song-info-creator-name">
            <a-avatar size="small" :src="data.playlist.creator.avatarUrl">
            </a-avatar>
            <span class="autor">{{ data.playlist.creator.nickname }}</span>
            <span class="time"
              >{{
                dayjs(data.playlist.createTime).format("YYYY-MM-DD")
              }}
              创建</span
            >
          </div>
          <div class="song-info-creator-btns">
            <div class="play btn">
              <div class="play-left">
                <Svgicon icon-class="icon-bofang" />
                <span>播放全部</span>
              </div>
              <div class="play-right">
                <Svgicon icon-class="icon-chuangjian" />
              </div>
            </div>

            <div class="favorites btn">
              <Svgicon icon-class="icon-shoucang" />
              <span
                >收藏({{
                  data.playlist.subscribedCount > 10000
                    ? Math.trunc(data.playlist.subscribedCount / 10000) + "万"
                    : data.playlist.subscribedCount
                }})</span
              >
            </div>
            <div class="share btn">
              <Svgicon icon-class="icon-fabudaochuzhuomiankuaijie" />
              <span
                >分享({{
                  data.playlist.shareCount > 10000
                    ? Math.trunc(data.playlist.shareCount / 10000) + "万"
                    : data.playlist.shareCount
                }})</span
              >
            </div>
            <div class="download btn">
              <Svgicon icon-class="icon-xiazai" />
              <span>下载全部</span>
            </div>
          </div>
        </div>
        <div class="song-info-desc">
          <p>
            标签：<a-tag v-for="tag in data.playlist.tags">{{ tag }}</a-tag>
          </p>
          <p style="margin: 5px 0">
            <span style="margin-right: 5px"
              >歌曲：{{ data.playlist.tracks.length }}</span
            >
            <span
              >播放：{{ Math.trunc(data.playlist.playCount / 10000) }}万</span
            >
          </p>
          <p
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            "
          >
            简介：{{ data.playlist.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="list-container"> <SongListBox /></div>

   
  </div>
</template>

<script setup lang="ts">
import { getSongListDetail } from "@/api/index";
import * as dayjs from "dayjs";
const spinning = ref(true);
const route = useRoute();
const data = reactive({
  playlist: {} as any,
});
provide(
  "tracks",
  computed(() => data.playlist.tracks)
);
onMounted(async () => {
  const { playlist } = await getSongListDetail(route.query.id as any);
  data.playlist = playlist;
  spinning.value = false;
});
</script>

<style scoped lang="scss">
.song-list {
  width: 820px;
  height: calc(100vh - 128px);
  overflow-y: scroll;
  .song-info {
    padding: 30px 20px;
    display: flex;
    align-items: center;

    .song-info-left {
      margin-right: 16px;
    }
    .song-info-right {
      .song-info-name {
        font-size: 20px;
        font-weight: 800;
        span {
          padding: 2px;
          font-size: 14px;
          border: 1px solid red;
          color: red;
          border-radius: 5px;
        }
      }
      .song-info-creator {
        margin: 8px 0;
        .song-info-creator-name {
          .autor {
            font-size: 12px;
            margin-left: 5px;
            color: #a9bfd7;
          }
          .time {
            font-size: 12px;
            margin-left: 8px;
          }
        }
      }
      .song-info-creator-btns {
        margin: 8px 0;
        display: flex;
        .btn {
          padding: 8px 12px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          border: 1px solid #e1e1e1;
          margin-right: 10px;
          span {
            margin: 0 6px;
          }
        }
        .play {
          background-color: red;
          color: #ffffff;
          font-size: 16px;
        }
      }
      .song-info-desc {
        margin-top: 18px;
        p {
          font-size: 14px;
        }
      }
    }
  }
  .list-container{
    padding: 8px 8px;
  }
}
</style>
