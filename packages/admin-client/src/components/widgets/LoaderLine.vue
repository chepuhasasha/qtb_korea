<template lang="pug">
.loaderline
</template>

<script lang="ts" setup></script>

<style lang="sass">
.loaderline
  display: block
  width: 100%
  height: 10px
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)
  background-size: 400% 400%
  animation: loaderline 3s ease infinite

@keyframes loaderline
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%
</style>
