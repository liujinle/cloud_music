<template>
  <div class="exclusive">
    <Swiper />
    
      <ListWithTitle title="推荐歌单">
        <a-skeleton active :loading="data.loading">
        <div class="musiclist-item" v-for="item in data.exclusive">
          <div class="musiclist-item-img">
            <a-image
              height="130"
              width="130"
              :preview="false"
              :src="item.picUrl"
            />
            <div class="musiclist-item-play-btn">
              <Svgicon :iconClass="'icon-bofang'" :color="'#ec4141'" />
            </div>
          </div>
          <div class="musiclist-item-info">
            <span
              @click="routeLink(item.id)"
              hover:text-blue-500
              style="cursor: pointer"
              >{{ item.name }}</span
            >
          </div>

          <div class="musiclist-item-play">
            <Svgicon :iconClass="'icon-24gl-play'" :color="'#ffffff'" />
            <span style="cursor: pointer">
              {{ changeNumber(item.playCount) }}
            </span>
          </div>
        </div>
      </a-skeleton>
      </ListWithTitle>

    <ListWithTitle title="热门播客">
      <div class="hotblock">
        <div class="hotblock-img">
          <a-image />
        </div>
        <div class="hotblock-info"></div>
      </div>
    </ListWithTitle>
  </div>
</template>

<script setup lang="ts">
import type { Exclusive } from "@/types/index";
import { getExclusive } from "@/api";
const router = useRouter();
const data = reactive({
  exclusive: [] as Exclusive[],
  loading: true as boolean,
});

onMounted(async () => {
  const { result } = await getExclusive();

  data.exclusive = result;
  data.loading = false;
});

function changeNumber(num: number) {
  if (num === 0) {
    return 0;
  } else {
    return Math.trunc(num / 100000) + "万";
  }
}

function routeLink(id: number) {
  router.push({
    path: "/songlist",
    query: {
      id,
    },
  });
}
</script>

<style scoped lang="scss">
.exclusive {
  width: 100%;
  padding: 0 0 0 20px;
  height: calc(100vh - 196px);
  overflow-y: auto;

  .musiclist-item {
    position: relative;
    width: 140px;
    height: 182px;
    margin: 0 20px 20px 0;
    .musiclist-item-img {
      position: relative;
      .musiclist-item-play-btn {
        opacity: 0;
        display: none;
      }
      &:hover {
        .musiclist-item-play-btn {
          width: 32px;
          height: 32px;
          opacity: 1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }
    }
    .musiclist-item-info {
      padding: 5px 0 5px;
      font-size: 14px;
      color: #333333;
    }
    .musiclist-item-play {
      font-size: 12px;
      padding: 2px 2px 0 0;

      position: absolute;
      top: 0;
      right: 0;
      color: #ffffff;
      span {
        margin-left: 2px;
      }
    }
  }
}
</style>
