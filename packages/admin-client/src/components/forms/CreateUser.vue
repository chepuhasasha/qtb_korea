<template lang="pug">
WrapperForm
  ButtonTag(@click="createUser") Create
  template(v-slot:body)
    InputTag(
      label="username",
      placeholder="some username...",
      v-model="state.username"
      :error='validate.username.$errors[0]?.$message'
    )
    InputTag(
      label="password",
      placeholder="some password...",
      v-model="state.password"
      :error='validate.password.$errors[0]?.$message'
    )
    SelectTag(
        label="role",
        v-model="state.role",
        :error='validate.role.$errors[0]?.$message'
      )
        option user
        option admin
        option root
</template>
<script lang="ts" setup>
import type { UserRole } from "@qtb_korea/types";
import { useUsersStore } from "@/stores";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const { create } = useUsersStore();

const state = reactive({
  username: "",
  password: "",
  role: "user" as UserRole,
});

const validate = useVuelidate(
  {
    username: { required },
    password: { required },
    role: { required },
  },
  state
);

const createUser = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state);
  }
};
</script>