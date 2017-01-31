<template>
    <div>
        <h1>Hello, world!</h1>
        <h2>{{ user }}</h2>

        <CcUsers></CcUsers>
    </div>
</template>

<script>
import CcUsers from './components/users/Main.vue'

export default {
    name: 'Papai',
    
    components: {
        CcUsers
    },

    computed: {
        user() {
            const { name, email } = this.$store.state.user // objeto destructuring do es6
            return `O usuário logado é ${ name } e possui o e-mail ${ email }.`
        }
    }
}
</script>

<style>
</style>
