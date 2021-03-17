<template>
  <div :class="$style.component">
    <button
      v-text="buttonLabel"
      @click="toggleGame" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'game-header',
  computed: {
    ...mapState({
      isGamePaused: state => state.isGamePaused,
    }),
    buttonLabel() {
      return this.isGamePaused ? 'Resume' : 'Pause';
    },
  },
  methods: {
    ...mapMutations(['toggleGame']),
  },
};
</script>

<style lang="scss" module>
.component {
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  padding: 10px 10%;
}
</style>
