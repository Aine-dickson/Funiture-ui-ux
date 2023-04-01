<template>
    <section>
        <searchBar/>
        <sorter/>
        <collection/>
    </section>
</template>

<script>

    import searchBar from '@/components/search.vue'
    import sorter from '@/components/sorter.vue';
    import collection from '@/components/collection.vue'
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';

    export default {
        components: {
            searchBar,
            sorter,
            collection
        },
        setup(){
            const store = useStore()
            const screenState = ref(store.state.screen)

            onMounted(() => {
                store.commit("screenControl", "general")
            })
        }
    }

</script>