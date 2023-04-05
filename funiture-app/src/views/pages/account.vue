<template>
    <section>
        <p>Account loading...</p>
    </section>
</template>

<script>

    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit("pageManager", "account")
            })
        }
    }

</script>