<template>
  <div
    v-text="'10kg'"
    :class="$style.component" />
</template>

<script>
export default {
  name: 'rectangle',
};
</script>

<style lang="scss" module>
.component {
  align-items: center;
  background-color: #78d8f0;
  display: inline-flex;
  height: 100px;
  justify-content: center;
  width: 80px;
}
</style>