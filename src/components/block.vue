<template>
  <div
    ref="block"
    :class="[
      $style.component,
      $style[details.shape],
    ]"
    :style="inlineStyles">
    <span v-text="details.weight" />
  </div>
</template>

<script>
export default {
  name: 'block',
  props: {
    details: Object,
    topPosition: {
      type: Object,
      default: () => {},
    },
    test: Boolean,
  },
  computed: {
    inlineStyles() {
      return {
        height: `${this.details.height}px`,
        left: `${this.details.position.left}px`,
        top: `${this.details.position.top}px`,
        width: `${this.details.width}px`,
      };
    },
  },
  mounted() {
    this.$emit('update-block-height', this.$refs.block.getBoundingClientRect().height);
  },
};
</script>

<style lang="scss" module>
.component {
  position: absolute;
  transform: translateX(-50%);

  span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.circle {
  background-color: #78d8f0;
  border-radius: 50%;
}

.square {
  background-color: #059415;
}

.triangle {
  border-color: transparent transparent rgba(0,0,0,.1);
  border-width: 0 .5em .5em;
  height: 0;
  width: 0;
}
</style>