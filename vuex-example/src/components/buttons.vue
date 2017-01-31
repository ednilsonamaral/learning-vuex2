<template>
    <div>
        <button v-on:click="mudarDados()">Alterar Dados</button>
    </div>
</template>

<script>
export default {
    methods: {
        mudarDados() {
            console.log("muda, vai, filhão..")
        }
    }
}
</script>

<style>
</style>
