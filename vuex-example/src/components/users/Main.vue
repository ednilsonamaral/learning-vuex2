<template>
    <div>
        <p><strong>E-mail:</strong> {{ email }}</p>

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
        }
    }
}
</script>

<style>
</style>
