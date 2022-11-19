<template lang="pug">
div
  TransitionGroup.messages(name="list" tag="div")
    WidgetServerMessage(
      v-for="(message, time) in messages",
      :key="time",
      :message="message"
    )
Transition.load(name='list' tag='div')
  WidgetLoaderLine(v-if='state.load')
AdminLayout(v-if="route.path != '/login'")
  RouterView
RouterView(v-else)
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import AdminLayout from "@/layouts/Admin.vue";
import { useLoaderStore, useServerMessagesStore } from "./stores";

const route = useRoute();
const { messages } = useServerMessagesStore();
const { state } = useLoaderStore();
</script>

<style lang="sass">
.messages
  position: absolute
  right: 0
  bottom: 0
  display: flex
  flex-direction: column
  padding: 20px
  gap: 10px
  color: white
  max-height: 100vh
  overflow: auto
  z-index: 2
.load
  position: absolute
  right: 0
  top: 0
</style>
