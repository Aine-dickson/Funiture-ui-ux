<template>
    <section class="text-2xl h-screen">
        <form action="post" enctype="multipart/form-data" class="w-full flex flex-col items-center space-y-4 mt-[10rem]">
            <div class="flex w-[90%] m-auto space-x-2 justify-center">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" name="email" required class="border border-gray-500 rounded w-[80%]">
            </div>
            <button type="submit" class="bg-blue-400 text-white rounded-lg w-[70%] m-auto p-2">Reset Password</button>
        </form>
    </section>
</template>

<script>

    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()

            const email = ref('')

            onMounted(() => {
                store.commit("splashControl", true)
            })

            return { email }
        }
    }

</script>