<template>
  <div :class="$style.support" />
</template>

<script>
export default {
  name: 'support',
};
</script>

<style lang="scss" module>
.support {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 150px 50px;
  border-color: transparent transparent #637282 transparent;
}
</style>