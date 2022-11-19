<template lang="pug">
.loader
  div
  div
  div
  div
</template>

<script lang="ts" setup>
</script>

<style lang="sass">
.loader
  display: block
  position: relative
  width: 80px
  height: 80px
  div
    position: absolute
    border: 2px solid #fff
    opacity: 1
    border-radius: 50%
    animation: loader 1s linear infinite
  div:nth-child(2)
    animation-delay: -1s

@keyframes loader
  0%
    top: 45%
    left: 45%
    width: 10%
    height: 10%
    opacity: 1
  100%
    top: 0px
    left: 0px
    width: 100%
    height: 100%
    opacity: 0
</style>
  