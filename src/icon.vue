<template>
  <svg  class="r-icon" aria-hidden="true">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "r-icon",
  props:["icon"]
}
</script>

<style scoped lang="scss">

</style>
