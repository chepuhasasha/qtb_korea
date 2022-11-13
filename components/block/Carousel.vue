<template lang="pug">
.carousel(
  :style="{ backgroundImage: `url(${selected && selected.url})` }"
  @mouseenter="mousein = true"
  @click="mousein = true"
  @mouseleave="mousein = false"
  )
  h2 {{ selected && selected.title }}
  .carousel_bar
    .carousel_bar_item(
      v-for="img in images",
      :key="img.url",
      @click="select(img)",
      :class="{ carousel_bar_item_active: img === selected }"
    )
    .carousel_bar_empty
    WidgetButton(
      v-if="selected && selected.link",
      @click="router.push(selected.link.url)"
    ) {{ selected.link.text }}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

export interface IImg {
  url: string;
  title: string | null;
  link: {
    text: string;
    url: string;
  } | null;
}

const router = useRouter();
const selected = ref<IImg | null>(null);
const mousein = ref<boolean>(false);
const counter = ref<number>(0);

const select = (img: IImg) => {
  selected.value = img;
};

const props = defineProps({
  images: {
    type: Array as PropType<IImg[]>,
    default: () => [],
  },
  interval: {
    type: Number as PropType<number>,
    default: 5,
  },
});

onMounted(() => {
  if (props.images.length > 0) {
    selected.value = props.images[counter.value];
    setInterval(() => {
      if (mousein.value) return;
      if (counter.value < props.images.length - 1) {
        counter.value += 1;
      } else {
        counter.value = 0;
      }
      selected.value = props.images[counter.value];
    }, 1000 * props.interval);
  }
});
</script>
<style lang="sass">
.carousel
  transition: all ease 1s
  display: flex
  flex-direction: column
  justify-content: space-between
  background: var(--contrast-200)
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  max-width: 100%
  max-height: 100%
  background-repeat: no-repeat
  background-position: center
  // background-size: 
  padding: 100px
  &_bar
    display: flex
    gap: 10px
    justify-self: flex-end
    width: 100%
    align-items: flex-end
    .button
      justify-self: flex-end
    &_item
      width: 20px
      height: 20px
      min-width: 20px
      min-height: 20px
      border: 1px solid var(--contrast-500)
      background: var(--contrast-200)
      border-radius: 10px
      cursor: pointer
      &:hover, &_active
        background: var(--contrast-500)

    &_empty
      width: 100%
</style>
