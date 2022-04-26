<template>
  <button class="r-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <r-icon :icon="icon" v-if="icon && !loading" class="icon"></r-icon>
    <r-icon icon="loading" class="loading icon" v-if="loading"></r-icon>
    <div class="content">
      <slot></slot>
    </div>

  </button>
</template>

<script>

export default {
  name: "r-button",
  data(){
    return{
      a:true
    }
  },
  // props: ['icon', 'iconPosition']
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default: false
    },
    iconPosition:{
      type: String,
      required: false,
      default: 'left',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['left', 'right', ].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.r-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1
  }

  > .content {
    order: 2;
    padding-left: .1em
  }

  &.icon-right {
    > .icon {
      order: 2;
    }

    > .content {
      order: 1;
      padding-left: 0;
      padding-right: .1em
    }
  }
}
.loading{
  animation: spin 1.5s infinite linear;
}

</style>
