<template>
  <div :class="$style.component">
    <div
      v-if="isGameOver"
      v-text="'Game Over'"
      :class="$style['game-over']" />

    <falling-block
      v-if="fallingBlock"
      :falling-block="fallingBlock"
      @update-block-width="onUpdateBlockWidth" />

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
  data() {
    return {
      blockWidth: this.fallingBlock.width,
    };
  },
  computed: {
  ...mapState({
      currentSide: state => state.currentSide,
      fallingBlock: state => state.fallingBlock,
      isGameOver: state => state.isGameOver,
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
            if (this.fallingBlock.position.left >= (leftBorder + (this.blockWidth / 2))) {
              this.moveBlockHorizontally(this.fallingBlock.position.left - 20);
            }
          }

          if (event.keyCode == 39) {
            if (this.fallingBlock.position.left <= (center - (this.blockWidth / 2))) {
              this.moveBlockHorizontally(this.fallingBlock.position.left + 20);
            }
          }
        }
      });
    },
    onUpdateBlockWidth(width) {
      this.blockWidth = width;
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

.game-over {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  font-size: 30px;
  left: 0;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 1;
}
</style>