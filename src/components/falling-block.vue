<template>
  <block
    :details="details"
    @update-block-height="onUpdateBlockHeight" />
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
      isGamePaused: state => state.isGamePaused,
      swingPosition: state => state.swingPosition,
    }),
  },
  mounted() {
    const fall = setInterval(() => {
      if (!this.isGamePaused) {
        if (this.details.position.top < (this.swingPosition.top - this.blockHeight)) {
          this.details.position.top += 1;
        } else {
          clearInterval(fall);
          this.finishFalling(this.details);
        }
      }
    },1);
  },
  methods: {
    ...mapActions(['finishFalling']),
    onUpdateBlockHeight(height) {
      this.blockHeight = height;
    },
  },
};
</script>