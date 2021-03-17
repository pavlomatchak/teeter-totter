<template>
  <div
    v-text="weight"
    ref="block"
    :class="[
      $style.component,
      $style[details.shape],
    ]"
    :style="inlineStyles" />
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
  },
  computed: {
    inlineStyles() {
      return {
        left: `${this.details.position.left}px`,
        top: `${this.details.position.top}px`,
      };
    },
    weight() {
      return `${this.details.weight}kg`;
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
}

.rectangle {
  align-items: center;
  background-color: #78d8f0;
  display: inline-flex;
  height: 100px;
  justify-content: center;
  width: 80px;
}

.square {
  align-items: center;
  background-color: #059415;
  display: inline-flex;
  height: 80px;
  justify-content: center;
  width: 80px;
}

.triangle {
  align-items: center;
  border-color: transparent transparent #ded304 transparent;
  border-style: solid;
  border-width: 0 35px 80px 35px;
  display: inline-flex;
  height: 0;
  justify-content: center;
  width: 0;
}
</style>