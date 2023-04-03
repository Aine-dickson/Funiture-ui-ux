<template>
    <footer class="border border-black dark:bg-white rounded-[5rem] flex justify-evenly items-center w-[90%] m-auto h-14 bg-black">
        <nav>
            <router-link :to="{name: 'home'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-house"></i></span>
                    <span class="text-xs">HOME</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-white h-[40%]"></div>
        <nav>
            <router-link :to="{name: 'scan'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-eye"></i></span>
                    <span class="text-xs">SCAN</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-white h-[40%]"></div>
        <nav>
            <router-link :to="{name: 'wishlist'}">
                <div class="flex flex-col items-center text-2xl">
                    <span><i class="fas fa-heart"></i></span>
                    <span class="text-xs">WISHLIST</span>
                </div>
            </router-link>
        </nav>
        <div class="border-l border-l-white h-[40%]"></div>
        <div>
            <nav>
                <router-link :to="{name:'account'}">
                    <div class="flex flex-col items-center text-2xl">
                        <span><i class="fas fa-user"></i></span>
                        <span class="text-xs">ACCOUNT</span>
                    </div>
                </router-link>
            </nav>
        </div>
    </footer>
</template>
