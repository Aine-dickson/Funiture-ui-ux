<template>
    <section>
        <profile_header></profile_header>
    </section>
</template>

<script>

    import profile_header from '@/components/profile_header.vue';

    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        components: {
            profile_header
        },
        setup(){
            const store = useStore()

            onMounted(() => {
                store.commit("pageManager", "account")
            })
        }
    }

</script>