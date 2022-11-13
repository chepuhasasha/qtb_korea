<template lang="pug">
.placeholder(v-if='isload')
  img(src="@/assets/images/logo_min.svg")
NuxtPage
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const isload = ref(true)

onMounted(() => {
  isload.value = false
})

</script>
<style lang="sass">
@import '@/assets/main.sass'

.placeholder
  display: flex
  align-items: center
  justify-content: center
  position: absolute
  width: 100vw
  height: 100vh
  background: var(--contrast-200)
  z-index: 9999
</style>