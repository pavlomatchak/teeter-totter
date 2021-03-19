<template>
  <block
    :details="details"
    @update-block="onUpdateBlock" />
</template>

<script>
import {mapActions, mapState } from 'vuex';
import Block from './block.vue';

export default {
  name: 'falling-block',
  components: { Block },
  props: {
    fallingBlock: Object,
  },
  data() {
    return {
      blockHeight: 0,
      details: this.fallingBlock,
    };
  },
  computed: {
    ...mapState({
      isGameOver: state => state.isGameOver,
      isGamePaused: state => state.isGamePaused,
      swingPosition: state => state.swingPosition,
    }),
  },
  mounted() {
    const fall = setInterval(() => {
      if (!this.isGamePaused && !this.isGameOver) {
        if (this.details.position.top < (this.swingPosition.top - this.blockHeight)) {
          this.details.position.top += 1;
        } else {
          clearInterval(fall);
          this.finishFalling(this.details);
        }
      }
    },10);
  },
  methods: {
    ...mapActions(['finishFalling']),
    onUpdateBlock({ height, width }) {
      this.blockHeight = height;
      this.$emit('update-block-width', width)
    },
  },
};
</script>