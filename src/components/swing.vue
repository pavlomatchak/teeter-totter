<template>
  <div
    :class="$style.component"
    ref="swing">
    <blocks />

    <div :class="$style.swing" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Blocks from'./blocks';

export default {
  name: 'swing',
  components: { Blocks },
  mounted() {
    const { x, y, height, width, top, left} = this.$refs.swing.getBoundingClientRect();
    this.setSwingPosition({ x, y, height, width, top, left});
  },
  methods: {
    ...mapMutations(['setSwingPosition']),
  },

};
</script>

<style lang="scss" module>
.swing {
  background-color: #db0944;
  height: 5px;
  width: 1000px;
}
</style>