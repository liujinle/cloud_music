<template>
  <div class="play">
    <div class="play-img-container">
      <div class="play-img"></div>
      <div class="play-info">
        <div class="play-info-name">青花瓷</div>
        <div class="play-info-desc">作者</div>
      </div>
    </div>

    <div class="play-main">
      <div class="play-main-btns">
        <div
          class="play-main-btn"
          v-for="item in data.iplay"
          :style="{ backgroundColor: item.backgroundColor }"
        >
          <Svgicon
            :icon-class="item.name"
            iconStyle="height:1.2em;width:1.2em"
          />
        </div>
      </div>
      <div class="play-main-lines">
        <a-slider v-model:value="data.value" :tooltip-open="true" />
      </div>
      <div class="play-main-audio">
        
        
      </div>
    </div>
    <div class="play-btns"></div>
  </div>
</template>

<script setup lang="ts">
type IPlay = {
  name: string;
  backgroundColor?: string;
  event:()=>void
};

type Data = {
  iplay: IPlay[];
  value: number;
};

const data = <Data>reactive({
  value: 0,
  iplay: [
    {
      name: "icon-xunhuan",
      
    },
    {
      name: "icon-shangyishou",
    },
    {
      name: "icon-bofang",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    {
      name: "icon-xiayishou",
    },
    {
      name: "icon-geciweidianji",
    },
  ],
});
</script>

<style scoped lang="scss">
.play {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .play-img-container {
    flex: 25%;
    padding: 0 8px 0;
    display: flex;
    .play-img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      background-color: red;
    }
    .play-info {
      width: 75%;
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .play-info-name {
        font-size: 16px;
      }
      .play-info-desc {
        font-size: 14px;
      }
    }
  }

  .play-main {
    flex: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .play-main-btns {
      margin-top: 10px;
      display: flex;
      .play-main-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }
    .play-main-lines {
      width: 100%;
    }
  }

  .play-btns {
    flex: 25%;
    height: 100%;
  }
}
</style>
