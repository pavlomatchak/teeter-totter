import { generateBlock } from '../helpers';
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
      state.fallingBlock = generateBlock(state.swingPosition, state.currentSide);
    },
    changeSide(state, side) {
      state.currentSide = side;
    },
    changeTopPosition(state, position) {
      state.fallingBlock.position.top = position;
    },
    finishFalling(state) {
      state[state.currentSide].push(state.fallingBlock);
      state.fallingBlock = null;
      state.currentSide = state.currentSide === sides.RIGHT_SIDE_BLOCKS ?
        sides.LEFT_SIDE_BLOCKS : sides.RIGHT_SIDE_BLOCKS;
    },
    setFallingBlock(state, block) {
      state.fallingBlock = block;
    },
    setSwingPosition(state, position) {
      state.swingPosition = position;
    },
    toggleGame(state) {
      state.isGamePaused = !state.isGamePaused;
    },
  },
  actions: {
    addBlock(context, side) {
      context.commit('addBlock', side);
    },
    finishFalling(context) {
      context.commit('finishFalling');
      context.commit('addBlock');
    },
  },
});
