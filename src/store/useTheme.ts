import { defineStore } from "pinia";

export const useThemeStore = defineStore(
  "main",
  () => {
    const themeColor = ref("#ec4141");

    function changeThemeColor(color: string) {
      themeColor.value = color;
    }

    return { themeColor, changeThemeColor };
  },
  {
    persist: true,
  }
);
