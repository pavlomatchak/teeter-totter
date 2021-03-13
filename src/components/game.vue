<template>
  <div :class="$style.component">
    <teeter-totter />
  </div>
</template>

<script>
import TeeterTotter from './teeter-totter.vue';

export default {
  name: 'game',
  components: { TeeterTotter },
};
</script>

<style lang="scss" module>
.component {
  height: calc(100vh - 16px);
}
</style>