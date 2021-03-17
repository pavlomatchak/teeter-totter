<template>
  <div>
    <block
      v-for="block in leftSideBlocks"
      :details="block"
      :key="block.id" />

    <block
      v-for="block in rightSideBlocks"
      :details="block"
      :key="block.id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { sides } from '../config';
import Block from './block.vue';

export default {
  name: 'Blocks',
  components: { Block },
  data() {
    return {
      sides,
    };
  },
  computed: {
    ...mapState({
      leftSideBlocks: state => state[sides.LEFT_SIDE_BLOCKS],
      rightSideBlocks: state => state[sides.RIGHT_SIDE_BLOCKS],
    }),
  },
};
</script>