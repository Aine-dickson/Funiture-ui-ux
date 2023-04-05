<template>
    <section class="text-2xl">
        <form action="post" enctype="multipart/form-data" @submit.prevent="formHandler(e)" class="border border-gray-500 w-[90%] m-auto rounded-md p-2 flex flex-col items-center space-y-4">
            <div class="space-x-2 flex items-center w-[95%] m-auto">
                <label for="email">Email:</label>
                <input v-model="userEmail" type="email" name="email" id="email" placeholder="Enter valid email" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div class="space-x-2 flex items-center w-[95%] m-auto">
                <label for="password">Password:</label>
                <input @keydown="passManager" v-model="userPassword" type="password" name="password" id="password" placeholder="Enter password" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div v-if="password" class="w-full flex justify-center">
                <button type="submit" class="p-2 bg-blue-400 text-white rounded-lg w-[50%]">Login</button>
            </div>
        </form>
        <div class="text-lg space-x-2 mt-4 ml-4">
            <span>Forgot password!</span>
            <router-link :to="{name: 'password'}">
                <span class="underline text-blue">Click here</span>
            </router-link>
        </div>
    </section>
</template>

<script>

    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()
            const router = useRouter()

            const password = ref(false)
            const userEmail = ref('')
            const userPassword = ref('')

            

            const passManager = () => {
                if(userPassword.value.length > 1){
                    password.value = true
                } else {
                    password.value = false
                }
            }

            const formHandler = (e) => {
                const userObject = {
                    email: userEmail.value,
                    password: userPassword.value
                }
                store.dispatch('login', userObject)
                .then(() => {
                    router.push('/home')
                })
                userEmail.value = ''
                userPassword.value = ''
                return true
            }

            onMounted(() => {
                store.commit("splashControl", false)
            })

            return { password, userEmail, userPassword, passManager, formHandler }
        }
    }

</script>