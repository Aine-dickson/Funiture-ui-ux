<template>
    <header class="flex justify-between p-4 text-xl items-center">
        <div class="border border-gray-500 flex justify-center items-center rounded-full w-8 h-8 bg-black text-white">
            <i class="fas fa-bars"></i>
        </div>
        <span v-if="page !== 'account'" class="font-bold text-2xl"> Octo Furniture </span>
        <span v-else class="font-bold text-2xl">{{ userName }}</span>
        <div class="border border-gray-500 flex justify-center items-center rounded-full w-8 h-8 relative">
            <div class="absolute top-[0.25rem] right-1 rounded-full w-2 h-2 bg-red-600"></div>
            <i class="fas fa-bell"></i>
        </div>
    </header>
</template>

<script>

    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()
            
            const page = computed(() => store.state.page)

            const userName = computed(() => {
                if(store.state.user){
                    return store.state.user.userName
                } else {
                    return "No account yet!"
                }
            })

            return { page, userName }
        }
    }

</script>