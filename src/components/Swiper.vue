<template>
  <div class="swiper">
    <div class="swiper_con">
      <template v-for="(item, index) in props.banners" :key="item">
        <div
          :class="[
            'swiper_item',
            data.activeIndex === index ? 'active' : '',
            data.pre === index ? 'swiper_pre' : '',
            data.nex === index ? 'swiper_nex' : '',
            ,
          ]"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        >
          <span
            :style="{
              backgroundColor: item.typeTitle.includes('歌')
                ? '#ec4141'
                : '#4a79cc',
            }"
            >{{ item.typeTitle }}</span
          >
        </div>
      </template>

      <div
        class="pre icons"
        @click="changeActiveIndex('pre', props.banners)"
      ></div>
      <div
        class="nex icons"
        @click="changeActiveIndex('nex', props.banners)"
      ></div>
    </div>
    <div class="paginations">
      <div
        class="pagination"
        v-for="(item, index) in props.banners"
        :class="data.activeIndex === index ? 'pagination_active' : ''"
        :key="item.imageUrl"
        @mouseenter="paginationEnter(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/useTheme";
import type { Imgs } from "@/types/index";

const theme = useThemeStore();

const data = reactive({
  activeIndex: 0,
  pre: 5,
  nex: 1,
});

const props = defineProps(["banners"]);

onMounted(async () => {
  setInterval(() => {
    data.activeIndex++;
    data.pre = data.activeIndex - 1;
    data.nex = data.activeIndex + 1;
    if (data.activeIndex > props.banners.length - 1) {
      data.activeIndex = 0;
      data.pre = data.activeIndex - 1;
      data.nex = data.activeIndex + 1;
    } else if (data.activeIndex === props.banners.length - 1) {
      data.nex = 0;
      data.pre = data.activeIndex - 1;
    }
  }, 2000);
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

function paginationEnter(index: number) {
  data.activeIndex = index;
  data.pre = data.activeIndex - 1;
  data.nex = data.activeIndex + 1;
  if (data.activeIndex === 0) {
    data.pre = props.banners.length - 1;
  } else if (data.activeIndex === props.banners.length - 1) {
    data.nex = 0;
  }
}
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 220px;
  padding: 15px 0;
  position: relative;
  .paginations {
    display: flex;
    align-items: center;
    position: absolute;

    left: calc((100% - 160px) / 2);
    bottom: -10px;
    width: 160px;
    height: 15px;
    .pagination {
      width: 8px;
      height: 8px;
      margin-right: 8px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .pagination_active {
      background-color: v-bind("theme.themeColor");
    }
  }

  .swiper_con {
    width: 100%;
    height: 100%;
    position: relative;
    &:hover {
      .icons {
        display: block;
      }
    }
    .icons {
      display: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: calc(50% - 14px);
      color: #e5e5e5;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }

    .pre {
      left: 0;
      &::after {
        font-size: 25px;
        content: "<";
        position: absolute;
        left: 4px;
        top: 0px;
      }
    }
    .nex {
      right: 0;
      &::after {
        font-size: 25px;
        content: ">";
        position: absolute;
        left: 4px;
        top: 0px;
      }
    }
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
      span {
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 20px;
        width: 68px;
        line-height: 20px;
        border-radius: 5px;
        font-size: 12px;
        text-align: center;
        color: #ffffff;
      }
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
