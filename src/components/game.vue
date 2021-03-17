<template>
  <div :class="$style.component">
    <game-header />
    <teeter-totter />
  </div>
</template>

<script>
import GameHeader from './game-header.vue';
import TeeterTotter from './teeter-totter.vue';

export default {
  name: 'game',
  components: {
    GameHeader,
    TeeterTotter,
  },
};
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 16px);
}
</style>