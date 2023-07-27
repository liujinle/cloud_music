<template>
  <div class="bg">

    <a-card
      :tab-list="data.tabList"
      :active-tab-key="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <a-row>
        <template v-for="(item, i) in theme.colors" :key="item.colorName">
          <a-col>
            <div
              class="theme_color"
              :style="{ backgroundColor: item.color }"
              @click="changeTheme(i)"
            >
              <span>{{ item.colorName }}</span>
              <div class="theme_select" v-show="item.isSelect">
                <Svgicon
                  icon-class="icon-zhengque"
                  :icon-style="'font-size:18px;' + 'color:' + item.color + ';'"
                ></Svgicon>
              </div>
            </div>
          </a-col>
        </template>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/useTheme";
type Data = {
  tabList: TabList[];
};

type TabList = {
  key: string;
  tab: string;
};

const key = ref<string>("theme");

const theme = useThemeStore();

const data = <Data>reactive({
  tabList: [
    {
      key: "theme",
      tab: "主题",
    },
    {
      key: "color",
      tab: "纯色",
    },
  ],
});

function onTabChange(value: string, type: string) {
  if (type === "key") {
    key.value = value;
  }
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
