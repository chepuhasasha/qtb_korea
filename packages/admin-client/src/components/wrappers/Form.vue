<template lang="pug">
.form
  .form_body
    slot(name='body')
  slot
</template>
<style lang="sass">
.form
  padding: 10px
  display: flex
  flex-direction: column
  gap: 20px
  height: 100%
  .button
    align-self: end
    justify-self: end
  &_body
    display: flex
    flex-direction: column
    gap: 10px
  &_row
    display: flex
    gap: 10px
    .input
      width: 100%
</style>
