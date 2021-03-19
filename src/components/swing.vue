<template>
  <div
    :style="inlineStyle"
    ref="swing">
    <blocks />

    <div :class="$style.swing" />
  </div>
</template>

<script>
import { constants } from '../config';
import { mapMutations, mapState } from 'vuex';
import Blocks from'./blocks';

export default {
  name: 'swing',
  components: { Blocks },
  computed: {
    ...mapState({
      swingTilt: state => state.swingTilt,
      inlineStyle() {
        let rotateDegree = (this.swingTilt.difference * 17) / 30; // 17 - degree to ground. 30% - max tilt

        if (rotateDegree > 17) {
          rotateDegree = 17;
        }

        if (this.swingTilt.direction === constants.LEFT) {
          rotateDegree = `-${rotateDegree.toString()}`;
        }

        return { transform: `rotate(${rotateDegree}deg)` };
      },
    }),
  },
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