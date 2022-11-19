<template lang="pug">
.login
  .login_user(v-if="state.user")
    h1 Login already done!
    BlockUser
    ButtonTag.login_user_btn(@click="router.push('/')") GO TO DASHBOARD
  .login_form(v-else, @keydown.enter="submit")
    h1 Login
    .login_form_body
      InputTag(
        icon="user",
        v-model="body.username.value",
        placeholder="username",
        :error="body.username.error"
      )
      InputTag(
        icon="lock",
        v-model="body.password.value",
        type="password",
        placeholder="password",
        :error='body.password.error'
      )
      InputTag(
        v-if="superUser"
        icon='key'
        type="password",
        v-model="state.headers['X-TOURNAMENTS-KEY']"
        placeholder="API KEY",
      )
    .login_form_footer
      ButtonTag(@click="superUser = !superUser" mode='ghost') {{ superUser ? 'user' : 'superuser' }}
      ButtonTag(@click="submit" mode='icon' active) Login
        WidgetIcon(icon='login')
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const superUser = ref(false)
const { state, login } = useUserStore();

const body = ref({
  username: { value: "", error: "" },
  password: { value: "", error: "" },
});

const submit = async () => {
  if (!body.value.username.value) body.value.username.error = "Required field!";
  if (!body.value.password.value) body.value.password.error = "Required field!";
  if (!body.value.username.value || !body.value.password.value) return;
  const user = await login({
    username: body.value.username.value,
    password: body.value.password.value,
  }).then(() => {
    router.push("/");
  })
};
</script>
<style lang="sass">
.login
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  background: var(--contrast-100)
  &_user
    display: flex
    flex-direction: column
    gap: 20px
    width: 400px
    &_btn
      width: 100%
      border-radius: 4px
      justify-content: center
  &_form
    display: flex
    flex-direction: column
    gap: 40px
    padding: 40px
    border-radius: 4px
    width: 400px
    max-width: 100vw
    background: var(--contrast-200)
    &_body
      display: flex
      flex-direction: column
      gap: 10px
    &_footer
      display: flex
      justify-content: space-between
</style>