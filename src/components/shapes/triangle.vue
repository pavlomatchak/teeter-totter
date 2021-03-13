<template>
  <div
    v-text="'2kg'"
    :class="$style.component" />
</template>

<script>
export default {
  name: 'triangle',
};
</script>

<style lang="scss" module>
.component {
  align-items: center;
  border-color: transparent transparent #ded304 transparent;
  border-style: solid;
  border-width: 0 35px 80px 35px;
  display: inline-flex;
  height: 0;
  justify-content: center;
  width: 0;
}
</style>