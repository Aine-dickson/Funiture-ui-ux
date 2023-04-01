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

    export default {
        components: {
            searchBar,
            sorter,
            collection
        },
    }

</script>