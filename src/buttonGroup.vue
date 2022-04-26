<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "buttonGroup",
  mounted() {
   for (let node of this.$el.children){
     // console.log(node.nodeName)
     let name = node.nodeName.toLowerCase()
     if( name !== 'button'){
       console.warn(`r-button-group的子元素必须是r-button，但是你写的是${name}`)
     }
   }

  }
}
</script>

<style scoped lang="scss">
.button-group {
  display: inline-flex;
  vertical-align: middle;

  & > .r-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }

    &:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
    }
    &:last-child{
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>
