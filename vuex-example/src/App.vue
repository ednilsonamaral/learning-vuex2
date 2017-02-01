<template>
    <div>
        <h1>Hello, world!</h1>
        <h2>{{ user }}</h2>

        <CcUsers></CcUsers>
    </div>
</template>

<script>
import CcUsers from './components/users/Main.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Papai',

  mounted() {
    const payload = {
      name: 'Ednilson Amaral',
      email: 'ednilsonamaral.ti@gmail.com',
      nivel: 'admin',
      city: 'Itapeva',
      state: 'SP'
    }

    setTimeout(() => {
      // this.$store.dispatch('changeUser', payload)
      this.changeUser(payload)
    }, 3000)
  },

  components: {
    CcUsers
  },

  computed: {
    ...mapState({
      user: state => {
        const { name, email } = state.user
        return `O usuário logado é ${ name } e possui o e-mail ${ email }.`
      }
    })
  },

  methods: {
    ...mapActions(['changeUser'])
  }
}
</script>

<style>
</style>
