<template lang="pug">
.user(v-if="state.user")
  .user_wrap
    .user_info
      .user_name
        WidgetIcon(
          v-if='state.user.role === "root"' 
          icon='star'
          :size='14'
          :width='1.5'
        )
        | {{ state.user.username }}
      span {{ state.user.role }}
    ButtonTag(mode="icon", @click="logoutHandler")
      WidgetIcon(icon="logout")
  InputTag(
    v-if="state.user.role === 'root'"
    icon='key'
    type="password",
    v-model="state.headers['X-QTB-KEY']"
    placeholder="API KEY",
  )
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const { state, logout } = useUserStore();
const router = useRouter();

const logoutHandler = async () => {
  const isLogout = await logout();
  if (isLogout) router.push("/login");
};
</script>
<style lang="sass">
.user
  display: flex
  padding: 10px
  align-items: center
  gap: 10px
  flex-direction: column
  background: var(--contrast-200)
  .input
    width: 100%
  &_wrap
    display: flex
    justify-content: space-between
    align-items: center
    gap: 10px
    width: 100%
    path
      stroke: var(--primary-100)
  &_info
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 100%
  &_name
    display: flex
    align-items: center
    gap: 5px
    font: var(--font-100)
    color: var(--text-color-100)
</style>