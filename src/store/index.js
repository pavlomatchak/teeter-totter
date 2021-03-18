import { addLoad, calculateOffset, generateBlock } from '../helpers';
import { sides } from '../config';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSide: sides.RIGHT_SIDE_BLOCKS,
    fallingBlock: null,
    isGameOver: false,
    isGamePaused: false,
    [sides.LEFT_SIDE_BLOCKS]: [],
    [sides.RIGHT_SIDE_BLOCKS]: [],
    swingPosition: {},
  },
  mutations: {
    addBlock(state) {
      state.fallingBlock = null;
      setTimeout(() => {
        state.fallingBlock = generateBlock(state.swingPosition, state.currentSide);
      }, 100);
    },
    changeSide(state, side) {
      state.currentSide = side;
    },
    changeTopPosition(state, position) {
      state.fallingBlock.position.top = position;
    },
    finishFalling(state) {
      state[state.currentSide].push(state.fallingBlock);
      state.currentSide = state.currentSide === sides.RIGHT_SIDE_BLOCKS ?
        sides.LEFT_SIDE_BLOCKS : sides.RIGHT_SIDE_BLOCKS;
    },
    moveBlockHorizontally(state, left) {
      state.fallingBlock.position.left = left;
    },
    setFallingBlock(state, block) {
      state.fallingBlock = block;
    },
    setOffset(state, offset) {
      state.fallingBlock.offset = offset;
    },
    setSwingPosition(state, position) {
      state.swingPosition = position;
    },
    toggleGame(state) {
      state.isGamePaused = !state.isGamePaused;
    },
  },
  actions: {
    addBlock({ commit }) {
      commit('addBlock');
    },
    finishFalling({ state, commit }) {
      commit('setOffset', calculateOffset({
        item: state.fallingBlock,
        side: state.currentSide,
        swingPosition: state.swingPosition,
      }));
      commit('finishFalling');
      commit('addBlock');
    },
  },
  getters: {
    getLeftLoad(state) {
      return addLoad(state[sides.LEFT_SIDE_BLOCKS]);
    },
    getRightLoad(state) {
      return addLoad(state[sides.RIGHT_SIDE_BLOCKS]);
    },
  },
});
