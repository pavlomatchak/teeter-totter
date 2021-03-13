<template>
  <component :is="shape" />
</template>

<script>
import Rectangle from './shapes/rectangle.vue';
import Square from './shapes/square.vue';
import Triangle from './shapes/triangle.vue';

export default {
  name: 'weight',
  components: {
    Rectangle,
    Square,
    Triangle,
  },
  props: {
    shape: String,
  },
};
</script>