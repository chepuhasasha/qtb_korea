export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('area', (el: HTMLElement, binding) => {
    el.style.gridArea = binding.value
  })
})