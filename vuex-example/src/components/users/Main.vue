<template>
    <div>
        <p><strong>E-mail:</strong> {{ email }}</p>
        <p><strong>Localidade:</strong> {{ localidade }}</p>

        <CcButtons></CcButtons>
    </div>
</template>

<script>
import CcButtons from '../buttons.vue'

export default {
  components: {
    CcButtons
  },

  computed: {
    email() {
      return this.$store.state.user.email
    },

    localidade() {
      return this.$store.getters.localidade
    }
  }
}
</script>

<style>
</style>
