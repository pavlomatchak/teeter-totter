<template>
  <div :class="$style.component">
    <div :class="$style.actions">
      <button
        v-text="'Restart'"
        @click="restartGame" />

      <button
        v-text="buttonLabel"
        @click="toggleGame" />
    </div>

    <div :class="$style.status">
      <span>Left load: {{ getLeftLoad }}</span>

      <span>Right load: {{ getRightLoad }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'game-header',
  computed: {
    ...mapState({
      isGamePaused: state => state.isGamePaused,
    }),
    ...mapGetters([
      'getLeftLoad',
      'getRightLoad',
    ]),
    buttonLabel() {
      return this.isGamePaused ? 'Resume' : 'Pause';
    },
  },
  methods: {
    ...mapActions(['restartGame']),
    ...mapMutations(['togglePaused']),
    toggleGame() {
      this.togglePaused(!this.isGamePaused);
    },
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

.actions {
  button:first-child {
    margin-right: 10px;
  }
}

.status {
  display: flex;

  span {
    display: inline-flex;

    &:first-child {
      margin-right: 10px;
    }
  }
}
</style>
