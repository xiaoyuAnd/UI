<template>
  <button class="r-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>

  </button>
</template>

<script>

export default {
  name: "r-button",
  // props: ['icon', 'iconPosition']
  props:{
    icon:{},
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

</style>
