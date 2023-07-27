<template>
  <div class="swiper">
    <div class="swiper_con">
      <template v-for="(item, index) in data.banners" :key="item">
        <div
          :class="[
            'swiper_item',
            data.activeIndex === index ? 'active' : '',
            data.pre === index ? 'swiper_pre' : '',
            data.nex === index ? 'swiper_nex' : '',
            ,
          ]"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        ></div>
      </template>
    </div>
  </div>
  <a-button @click="changeActiveIndex('pre',data.banners)">前</a-button>
  <a-button @click="changeActiveIndex('nex',data.banners)">后</a-button>
</template>

<script setup lang="ts">
import { getBanner } from "@/api/index";
import type { Imgs } from "@/types/index";

const data = reactive({
  banners: [] as Imgs[],
  activeIndex: 0,
  pre: 5,
  nex: 1,
});

onMounted(async () => {
  const { banners } = await getBanner();

  data.banners = banners;
});

function changeActiveIndex(type: string, arr: Imgs[]) {
  if (type === "pre") {
    data.activeIndex--;
    data.pre = data.activeIndex - 1;
    data.nex = data.activeIndex + 1;
    if (data.activeIndex < 0) {
      data.activeIndex = arr.length - 1;
      data.pre = data.activeIndex - 1;
      data.nex = 0;
    } else if (data.activeIndex === 0) {
      data.pre = arr.length - 1;

      data.nex = data.activeIndex + 1;
    }
  }
  if (type === "nex") {
    data.activeIndex++;
    data.pre = data.activeIndex - 1;
    data.nex = data.activeIndex + 1;
    if (data.activeIndex > arr.length - 1) {
      data.activeIndex = 0;
      data.pre = arr.length - 1;
      data.nex = data.activeIndex + 1;
    } else if (data.activeIndex === arr.length - 1) {
      data.nex = 0;
      data.pre = data.activeIndex - 1;
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 220px;
  padding: 15px 30px;
  .swiper_con {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper_item {
      position: absolute;
      border-radius: 10px;
      left: calc(50% - 300px);
      opacity: 0;
      top: 0;
      width: 600px;
      height: 100%;
      transition: all 0.5s linear;
      background-size: 100% 100%;
      /* background-repeat: no-repeat; */
    }
    .swiper_pre {
      transform: translateX(21%) scale(0.85);
      opacity: 1;
    }
    .swiper_nex {
      transform: translateX(-21%) scale(0.85);
      opacity: 1;
    }
  }
}

.active {
  z-index: 100;
  opacity: 1 !important;
}
</style>
