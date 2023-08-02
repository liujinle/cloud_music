<template>
  <div class="play">
    <div class="play-img">
        
    </div>

    <div class="play-main"></div>
    <div class="play-btns"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.play {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .play-img {
    flex: 25%;
  }

  .play-main {
    flex: 50%;
  }

  .play-btns {
    flex: 25%;
  }
}
</style>
