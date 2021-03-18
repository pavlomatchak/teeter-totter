<template>
  <div :class="$style.component">
    <falling-block
      v-if="fallingBlock"
      :falling-block="fallingBlock" />

    <swing />

    <support />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { sides } from '../config';
import FallingBlock from './falling-block.vue';
import Support from './support.vue';
import Swing from './swing.vue';

export default {
  name: 'teeter-totter',
  components: {
    FallingBlock,
    Support,
    Swing,
  },
  computed: {
  ...mapState({
      currentSide: state => state.currentSide,
      fallingBlock: state => state.fallingBlock,
      swingPosition: state => state.swingPosition,
    }),
  },
  mounted() {
    this.addBlock();
    this.arrowsListener();
  },
  methods: {
    ...mapActions(['addBlock']),
    ...mapMutations(['moveBlockHorizontally']),
    arrowsListener() {
      const leftBorder = this.swingPosition.left;
      const center = leftBorder + (this.swingPosition.width / 2);

      document.addEventListener('keydown', event => {
        if (this.fallingBlock && this.currentSide === sides.LEFT_SIDE_BLOCKS) {
          if (event.keyCode == 37) {
            if (this.fallingBlock.position.left >= (leftBorder + (this.fallingBlock.width / 2))) {
              this.moveBlockHorizontally(this.fallingBlock.position.left - 20);
            }
          }

          if (event.keyCode == 39) {
            if (this.fallingBlock.position.left <= (center - (this.fallingBlock.width / 2))) {
              this.moveBlockHorizontally(this.fallingBlock.position.left + 20);
            }
          }
        }
      });
    },
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