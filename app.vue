<template lang="pug">
//- .placeholder(v-if="isload")
//-   img(src="@/assets/images/logo_min.svg")
NuxtPage
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
// const isload = useState(() => true);

const screen = useScreen();

const setScreen = () => {
  if (window.innerWidth < 1100 && window.innerWidth > 760)
    screen.value = "tablet";
  if (window.innerWidth < 760) screen.value = "mobile";
  if (window.innerWidth > 1100) screen.value = "desktop";
};

// onBeforeMount(() => {
//   isload.value = false;
// })
onMounted(() => {
  setScreen()
  window.addEventListener("resize", () => {
    setScreen();
  });
});
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