<template>
    <article class="flex justify-between items-center p-2 text-2xl">
        <div class="flex h-8 rounded-[4rem] border bg-pink-100 dark:bg-slate-500 overflow-hidden items-center px-4 py-5 w-[80%]">
            <i class="fas fa-search"></i>
            <input type="search" placeholder="Search" class="bg-transparent focus:outline-none max-w-full">
        </div>
        <div @click="toggleTheme" class="bg-black text-white text-lg rounded-full flex justify-center items-center w-8 h-8 dark:bg-white dark:text-black">
            <i class="fa-solid fa-shuffle"></i>
        </div>
    </article>
</template>

<script>
    

    export default {
        setup(){
            const app = document.querySelector("#app")

            const toggleTheme = () => {
                if(app.classList.contains("dark")){
                    app.classList.remove("dark")
                } else {
                    app.classList.add("dark")
                }
            }

            return { toggleTheme }
        }
    }

</script>