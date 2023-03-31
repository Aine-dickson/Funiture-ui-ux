
import App_header from './includes/app_header.vue';

<template>
    <section>
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

    import {app_footer} from './includes/app_footer.vue'
    import {app_header} from './includes/app_header.vue'
    import {app_main} from './includes/app_main.vue'

    export default {
        components: {
            app_footer,
            app_header,
            app_main
        }
    }

</script>

<style scoped>
    section{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: 
        "header",
        "main"
        "footer";
    }
    .header{
        grid-area: header;
        background-color: blue;
    }
    .main{
        grid-area: main;
        background-color: green;
    }
    .footer{
        grid-area: footer;
        background-color: blue;
    }
</style>