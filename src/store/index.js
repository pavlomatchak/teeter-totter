import { addLoad, calculateOffset, calculateLoadDifference, generateBlock } from '../helpers';
import { constants, sides } from '../config';
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
    swingTilt: constants.DEFAULT_TILT,
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
    clearLeftSideBlocks(state) {
      state[sides.LEFT_SIDE_BLOCKS] = [];
    },
    clearRightSideBlocks(state) {
      state[sides.RIGHT_SIDE_BLOCKS] = [];
    },
    finishFalling(state) {
      const fallingBlock = state.fallingBlock;
      state.fallingBlock = null;
      fallingBlock.position.top = 'auto';
      fallingBlock.position.bottom = 0;
      fallingBlock.position.left = fallingBlock.position.left - state.swingPosition.left;
      state[state.currentSide].push(fallingBlock);
      state.currentSide = state.currentSide === sides.RIGHT_SIDE_BLOCKS ?
        sides.LEFT_SIDE_BLOCKS : sides.RIGHT_SIDE_BLOCKS;
    },
    moveBlockHorizontally(state, left) {
      state.fallingBlock.position.left = left;
    },
    setFallingBlock(state, block) {
      state.fallingBlock = block;
    },
    setGameOver(state, isGameOver) {
      state.isGameOver = isGameOver;
    },
    setOffset(state, offset) {
      state.fallingBlock.offset = offset;
    },
    setSwingPosition(state, position) {
      state.swingPosition = position;
    },
    setSwingTilt(state, tilt) {
      state.swingTilt = tilt;
    },
    togglePaused(state, status) {
      state.isGamePaused = status;
    },
  },
  actions: {
    addBlock({ commit }) {
      commit('addBlock');
    },
    calculateLoadDifference({ state, getters, commit }) {
      commit('setSwingTilt', calculateLoadDifference({
        leftLoad: Number(getters.getLeftLoad),
        rightLoad: Number(getters.getRightLoad),
      }));

      if (!state[sides.LEFT_SIDE_BLOCKS].length || state.swingTilt.difference < 30) {
        commit('addBlock');
      } else {
        commit('setGameOver', true);
      }
    },
    finishFalling({ state, dispatch, commit }) {
      commit('setOffset', calculateOffset({
        item: state.fallingBlock,
        side: state.currentSide,
        swingPosition: state.swingPosition,
      }));
      commit('finishFalling');
      setTimeout(() => {
        dispatch('calculateLoadDifference');
      }, 10);

    },
    restartGame({ commit }) {
      commit('clearLeftSideBlocks');
      commit('clearRightSideBlocks');
      commit('setFallingBlock', null);
      commit('changeSide', sides.RIGHT_SIDE_BLOCKS);
      commit('setSwingTilt', constants.DEFAULT_TILT);
      commit('togglePaused', false);
      commit('setGameOver', false);
      setTimeout(() => {
        commit('addBlock');
      }, 100);
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
