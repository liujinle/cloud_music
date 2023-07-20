import { defineStore } from "pinia";

export const useThemeStore = defineStore(
  "main",
  () => {
    const themeColor = ref("#ec4141");
    const isThemeOpen = ref<boolean>(false);
    function changeThemeColor(color: string) {
      themeColor.value = color;
    }
    function changeThemeOpen() {
      isThemeOpen.value = !isThemeOpen.value;
    }

    return { themeColor, isThemeOpen, changeThemeColor, changeThemeOpen };
  },
  {
    persist: true,
  }
);
