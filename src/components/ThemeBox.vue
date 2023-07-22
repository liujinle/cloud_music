<template>
  <div class="bg">
    <n-card style="margin-bottom: 16px">
      <n-tabs type="line" animated>
        <n-tab-pane name="theme">
          <template v-slot:tab>
            <span
              :class="data.isActive ? 'bg_active bg_tab' : 'bg_tab'"
              @click="spanActive"
              >主题</span
            >
          </template>
          <n-grid x-gap="2" y-gap="2" :cols="3">
            <template v-for="(item, i) in theme.colors" :key="item.colorName">
              <n-gi>
                <div
                  class="theme_color"
                  :style="{ backgroundColor: item.color }"
                  @click="changeTheme(i)"
                >
                  <span>{{ item.colorName }}</span>
                  <div class="theme_select" v-show="item.isSelect">
                    <Svgicon
                      icon-class="icon-zhengque"
                      :icon-style="
                        'font-size:18px;' + 'color:' + item.color + ';'
                      "
                    ></Svgicon>
                  </div>
                </div>
              </n-gi>
            </template>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="color">
          <template v-slot:tab>
            <span
              :class="data.isActive ? 'bg_tab' : 'bg_active bg_tab'"
              @click="spanActive"
              >纯色</span
            >
          </template>
          Hey Jude
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/useTheme";
type Data = {
  isActive: boolean;
};



const theme = useThemeStore();

const data = <Data>reactive({
  isActive: true,

  
});

function spanActive() {
  data.isActive = !data.isActive;
}

function changeTheme(index: number) {
  theme.colors.forEach((item, i) => {
    item.isSelect = index === i;
  });
  theme.changeThemeColor(theme.colors[index].color);
}
</script>

<style scoped lang="scss">


.bg {
  width: 350px;
  height: 278px;
  .bg_tab {
    user-select: none;
    color: #c3c3c3;
  }

  .bg_active {
    color: #333333;
    font-weight: 800;
  }
  .theme_color {
    margin: 5px;
    width: 85px;
    height: 85px;
    border-radius: 5px;
    position: relative;
    background-color: red;
    cursor: pointer;
    & > span {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0 0 6px;
      text-align: left;
      color: #ffffff;
      font-size: 12px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: inline-block;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .theme_select {
      padding: 1px;
      background-color: #ffffff;
      border-radius: 50%;
      position: absolute;
      right: -9px;
      z-index: 10;
      bottom: -9px;
    }
  }
}
</style>
