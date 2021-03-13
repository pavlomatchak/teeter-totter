<template>
  <div :class="$style.component">
    <weight shape="square" />
    <weight shape="triangle" />
    <weight shape="rectangle" />
    <swing />
    <support />
  </div>
</template>

<script>
import Support from './support.vue';
import Swing from './swing.vue';
import Weight from './weight.vue';

export default {
  name: 'teeter-totter',
  components: {
    Support,
    Swing,
    Weight,
  },
};
</script>

<style lang="scss" module>
.component {
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: flex-end;
}
</style>