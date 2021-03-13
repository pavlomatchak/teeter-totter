<template>
  <div
    v-text="'3kg'"
    :class="$style.component" />
</template>

<script>
export default {
  name: 'square',
};
</script>

<style lang="scss" module>
.component {
  align-items: center;
  background-color: #059415;
  display: inline-flex;
  height: 80px;
  justify-content: center;
  width: 80px;
}
</style>