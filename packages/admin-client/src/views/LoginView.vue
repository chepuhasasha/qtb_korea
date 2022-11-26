<template lang="pug">
.login
  .login_user(v-if="state.user")
    h1 Login already done!
    BlockUser
    ButtonTag.login_user_btn(@click="router.push('/')") GO TO DASHBOARD
  .login_form(v-else, @keydown.enter="submit")
    h1 {{ !isLogin ? 'Sign Up!' : 'Login' }}
    .login_form_body
      InputTag(
        icon="user",
        v-model="body.username",
        placeholder="username",
        :error='validate.username.$errors[0]?.$message'
      )
      InputTag(
        icon="lock",
        v-model="body.password",
        type="password",
        placeholder="password",
        :error='validate.password.$errors[0]?.$message'
      )
      InputTag(
        v-if="!isLogin"
        icon='key'
        type="password",
        v-model="state.headers['X-QTB-KEY']"
        placeholder="API KEY",
      )
    .login_form_footer
      ButtonTag(@click="isLogin = !isLogin" mode='ghost') {{ isLogin ? 'Sign Up!' : 'Login' }}
      ButtonTag(@click="submit" mode='icon' active) {{ !isLogin ? 'Sign Up!' : 'Login' }}
        WidgetIcon(icon='login')
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import type { ILogin } from "@qtb_korea/types";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const router = useRouter();
const isLogin = ref(true);
const { state, login, signup } = useUserStore();

const body = reactive<ILogin>({
  username: "",
  password: "",
});

const validate = useVuelidate(
  {
    username: { required },
    password: { required },
  },
  body
);
const submit = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    if (isLogin.value) {
      await login(body).then(() => {
        router.push("/");
      });
    } else {
      await signup(body).then(() => {
        isLogin.value = true
      });
    }
  }
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
