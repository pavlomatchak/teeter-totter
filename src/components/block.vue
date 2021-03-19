<template>
  <div
    ref="block"
    :class="[
      $style.component,
      $style[details.shape],
    ]"
    :style="inlineStyles">
    <span
      v-text="details.weight"
      :style="labelStyle" />
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
  },
  computed: {
    inlineStyles() {
      const { bottom, left, top } = this.details.position;
      const { height, width } = this.details;

      if (this.details.shape === 'triangle') {
        return {
          borderWidth: `0 ${width}px ${width}px`,
          bottom: `${bottom}px`,
          left: `${left}px`,
          top: `${top}px`,
        };
      }

      return {
        bottom: `${bottom}px`,
        width: `${width}px`,
        left: `${left}px`,
        top: `${top}px`,
        height: `${height}px`,
      };
    },
    labelStyle() {
      const { fontSize } = this.details;

      return {
        fontSize: `${fontSize}px`,
      };
    },
  },
  mounted() {
    this.$emit('update-block', this.$refs.block.getBoundingClientRect());
  },
};
</script>

<style lang="scss" module>
.component {
  position: absolute;
  transform: translateX(-50%);

  span {
    display: block;
  }
}

.circle {
  background-color: #78d8f0;
  border-radius: 50%;
}

.square {
  background-color: #059415;
}

.circle,
.square {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}

.triangle {
  border: .05em solid rgba(0,0,0,.1);
  border-color: transparent transparent rgba(0,0,0,.1);

  span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>