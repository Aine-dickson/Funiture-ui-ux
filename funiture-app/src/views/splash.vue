<template>
    <section class="h-screen relative">
        <div class="fixed top-0 bottom-0 w-full">
            <img src="../assets/images/splash.png" alt="splash-image" class="object-fill h-full w-full">
        </div>
        <div class="absolute bottom-10 w-full flex flex-col items-center space-y-6 text-white font-bold text-[2rem] text-center">
            <span>Modern Furniture For Your Dream House</span>
            <router-link :to="{name: 'home'}">
                <div class="outline-dashed outline-2 outline-orange-400 outline-offset-4 bg-orange-400 rounded-full w-16 h-16 flex items-center justify-center">
                    <i class="fas fa-arrow-right text-white"></i>
                </div>
            </router-link>
        </div>
    </section>
</template>