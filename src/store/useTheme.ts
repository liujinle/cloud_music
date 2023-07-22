import { defineStore } from "pinia";

export const useThemeStore = defineStore(
  "main",
  () => {
    type Data = {
      colors: Colors[];
    };

    type Colors = {
      colorName: string;
      color: string;
      isSelect?: boolean;
    };
    const themeColor = ref("#ec4141");
    const isThemeOpen = ref<boolean>(false);

    const colors = ref<Colors[]>([
      {
        colorName: "酷炫黑",
        color: "#2a2d33",
        isSelect: false,
      },
      {
        colorName: "官方红",
        color: "#cd3835",
        isSelect: true,
      },
      {
        colorName: "可爱粉",
        color: "#ed97bb",
        isSelect: false,
      },
      {
        colorName: "天际蓝",
        color: "#48b2fd",
        isSelect: false,
      },
      {
        colorName: "清新绿",
        color: "#40965b",
        isSelect: false,
      },
      {
        colorName: "土豪金",
        color: "#e1b672",
        isSelect: false,
      },
    ]);

    function changeThemeColor(color: string) {
      themeColor.value = color;
    }
    function changeThemeOpen() {
      isThemeOpen.value = !isThemeOpen.value;
    }

    return {
      themeColor,
      colors,
      isThemeOpen,
      changeThemeColor,
      changeThemeOpen,
    };
  },
  {
    persist: true,
  }
);
