<template lang="pug">
NuxtLayout(name='admin')
  WrapperGrid
    h1 Admin
</template>
<script lang="ts" setup>
useMeta({
  title: 'QTB - Admin'
})
</script>
<style lang="sass">
h1
  color: var(--test)
</style>