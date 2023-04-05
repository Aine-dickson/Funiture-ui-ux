<template>
    <item_main/>
</template>

<script>

    import item_main from '@/components/item_main.vue';
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        components: {
            item_main
        },
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit("pageManager", "item")
            })

        }
    }

</script>