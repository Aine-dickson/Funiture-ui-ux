<template>
    <section class="screen">
        <div class="header">
            <app_header class="h-full"></app_header>
        </div>
        <div class="main">
            <app_main class="h-full"></app_main>
        </div>
        <div class="footer">
            <app_footer class="h-full"></app_footer>
        </div>
    </section>
</template>

<script>

    import app_footer from './includes/app_footer.vue'
    import app_header from './includes/app_header.vue'
    import app_main from './includes/app_main.vue'

    import { useRouter } from 'vue-router'
    import { onMounted } from 'vue'

    export default {
        components: {
            app_footer,
            app_header,
            app_main
        },
        setup(){
            const router = useRouter()

            onMounted(() => {
                router.push('/home')
            })
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