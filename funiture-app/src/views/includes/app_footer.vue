<template>
    <footer class="border border-black rounded-[5rem] flex justify-evenly items-center w-[90%] m-auto mb-4">
        <nav>
            <router-link :to="{name: 'home'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-house"></i></span>
                    <span class="text-sm">HOME</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-black h-[40%]"></div>
        <nav>
            <router-link :to="{name: 'scan'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-eye"></i></span>
                    <span class="text-sm">SCAN</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-black h-[40%]"></div>
        <nav>
            <router-link :to="{name: 'wishlist'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-heart"></i></span>
                    <span class="text-sm">WISHLIST</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-black h-[40%]"></div>
        <div>
            <router-link :to="{name:'account'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-user"></i></span>
                    <span class="text-sm">ACCOUNT</span>
                </div>
            </router-link>
        </div>
    </footer>
</template>