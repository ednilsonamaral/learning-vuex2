<template>
    <div>
        <button :disabled="!hasUser" @click="mudarDados()">Alterar Dados</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    mudarDados() {
      const payload = {
        name: 'Nashie Hirumitsu',
        email: 'nashie_hiro@yahoo.com.br',
        nivel: 'basico',
        city: 'Itapeva',
        state: 'SP'
      }

      this.changeUser(payload)
    },

    ...mapActions(['changeUser'])
  },

  computed: {
    hasUser() {
      return this.$store.state.user.name !== ''
    }
  }
}
</script>

<style>
</style>
