<template>
  <div class="titlebox">
    <h3>{{$route.meta.title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import '@/styles/variables';
.titlebox {
  height: 40px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #e9e9e9;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #666666;
    line-height: 25px;
    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 20px;
      background: $themeColor;
      vertical-align: top;
      margin-top: 2px;
      margin-right: 10px;
    }
  }
  button {
    width: 100px;
  }
}
</style>