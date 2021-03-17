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
import { mapActions, mapState } from 'vuex';
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
      fallingBlock: state => state.fallingBlock,
    }),
  },
  mounted() {
    this.addBlock();
  },
  methods: {
    ...mapActions([
       'addBlock',
    ]),
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