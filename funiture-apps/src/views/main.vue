<template>
    <section class="screen">
        <div v-if="screenState == 'general'" class="header">
            <app_header class="h-full"></app_header>
        </div>
        <div v-else>
            <item_header/>
        </div>
        <div class="main">
            <app_main class="h-full"></app_main>
        </div>
        <div v-if="screenState == 'general'" class="footer">
            <app_footer class="h-full"></app_footer>
        </div>
        <div v-else>
            <item_footer/>
        </div>
    </section>
</template>

<script>

    import app_footer from './includes/app_footer.vue'
    import app_header from './includes/app_header.vue'
    import app_main from './includes/app_main.vue'
    import item_footer from '@/components/item_footer.vue'
    import item_header from '@/components/item_header.vue'

    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import { onMounted } from 'vue'

    export default {
        components: {
            app_footer,
            app_header,
            app_main,
            item_footer,
            item_header
        },
        setup(){
            const router = useRouter()
            const store = useStore()
            const screenState = store.state.screen

            onMounted(() => {
                router.push('/home')
            })

            return {screenState}
        }
    }

</script>

<style >
    .screen{
        height: 100vh;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 8% 82% 10%;
        grid-template-areas: 
        "header",
        "main",
        "footer";
    }
    .header{
        grid-area: "header";
    }
    .main{
        grid-area: "main";
    }
    .footer{
        grid-area: "footer";
    }
</style>