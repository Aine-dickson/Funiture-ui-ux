<template>
    <header>
        <div v-if="account" class="flex flex-col items-center space-y-8">
            <div class="rounded-full w-24 h-24 overflow-hidden">
                <img src="@/assets/images/seat.jpg" alt="profile-pic" class="object-fill h-full w-full">
            </div>
            <div class="flex items-center justify-evenly w-full">
                <span @click="viewSorter()" class="border border-gray-400 bg-slate-900 dark:bg-slate-300 text-slate-300 dark:text-slate-900 font-thin p-2 rounded-lg">General</span>
                <span @click="viewSorter()" class="border border-gray-400 bg-slate-900 dark:bg-slate-300 text-slate-300 dark:text-slate-900 font-thin p-2 rounded-lg">Cart</span>
                <span @click="viewSorter()" class="border border-gray-400 bg-slate-900 dark:bg-slate-300 text-slate-300 dark:text-slate-900 font-thin p-2 rounded-lg">Purchases</span>
            </div>
        </div>
        <div v-else class="flex flex-col items-center space-y-4 mt-8">
            <span>No account info!</span>
            <div class="flex space-x-8">
                <router-link :to="{name: 'signup'}">
                    <button class="bg-blue-500 text-white w-[10rem] p-2 rounded-lg">Create Account</button>
                </router-link>
                <router-link :to="{name: 'login'}">
                    <button class="bg-blue-500 text-white w-[10rem] p-2 rounded-lg">Login</button>
                </router-link>
            </div>
        </div>
    </header>    
</template>

<script>

    import { useStore } from 'vuex';
    import { computed } from 'vue';

    export default {
        setup(){
            const store = useStore()

            const account = computed(() => store.state.user)

            return { account }
        }
    }

</script>