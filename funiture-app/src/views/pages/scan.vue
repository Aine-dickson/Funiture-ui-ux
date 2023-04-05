<template>
    <section>
        <p>Scanner loading...</p>
    </section>
</template>

<script>

    import { useStore } from 'vuex';
    import { onMounted } from 'vue';

    export default {
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit("pageManager", "scan")
            })

        }
    }

</script>