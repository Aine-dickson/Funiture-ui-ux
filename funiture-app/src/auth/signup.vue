<template>
    <section class="text-2xl">
        <form action="post" enctype="multipart/form-data" @submit.prevent="formHandler(e)" class="border border-gray-500 w-[90%] m-auto rounded-md p-2 flex flex-col items-center space-y-4">
            <div class="space-x-2 flex items-center w-[95%] m-auto">
                <label for="userName">Name:</label>
                <input v-model="userName" type="text" id="userName" name="userName" placeholder="Enter full name" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div class="space-x-2 flex items-center w-[95%] m-auto">
                <label for="email">Email:</label>
                <input v-model="userEmail" type="email" name="email" id="email" placeholder="Enter valid email" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div class="space-x-2 flex items-center w-[95%] m-auto">
                <label for="password">Password:</label>
                <input @keydown="passManager" v-model="userPassword" type="password" name="password" id="password" placeholder="Enter password" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div v-if="password">
                <label for="confirm">Confirm Password</label>
                <input v-model="confirm" type="password" name="confirm" id="confirm" required class="focus:outline-none text-xl bg-transparent border border-gray-500 rounded-md w-[80%] p-1 h-8">
            </div>
            <div v-if="errors.length" class="flex">
                <span v-for="(error, index) in errors" :key="index">Error: {{ error.message }}</span>
            </div>
            <div v-if="password">
                <button type="submit" class="p-2 bg-blue-400 text-white rounded-lg">Create Account</button>
            </div>
        </form>
        <div class="text-lg space-x-2 mt-4 ml-4">
            <span>Already have an account?</span>
            <router-link :to="{name: 'login'}">
                <span class="underline text-blue">Login here</span>
            </router-link>
        </div>
    </section>
</template>

<script>

    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const store = useStore()

            const password = ref(false)
            const confirm = ref('')
            const userName = ref('')
            const userEmail = ref('')
            const userPassword = ref('')

            
            const errors = ref([])

            const errorHandler = (type) => {
                switch (type) {
                    case password:
                        errors.value.push(
                            {
                                message: "Entry doesn't match password"
                            }
                        )
                        break;
                    case email:
                        errors.value.push(
                            {
                                message: "Invalid email"
                            }
                        )
                        break;
                    case userName:
                        errors.value.push(
                            {
                                message: "Please enter name"
                            }
                        )
                        break;
                }
            }
            const passManager = () => {
                if (userPassword.value.length > 1) {
                    password.value = true
                } else {
                    password.value = false
                }
            } 
            const formHandler = (e) => {
                const user = {
                    name: userName.value,
                    password: userPassword.value,
                    email: userEmail.value
                }
                store.dispatch("signUp", user)
                userPassword.value = ''
                userEmail.value = ''
                userName.value = ''
                password.value = ''
                return true
            }

            onMounted(() => {
                store.commit("splashControl", false)
            })

            return {password, confirm, userName, userEmail, userPassword, errors, formHandler, passManager}
        }
    }

</script>