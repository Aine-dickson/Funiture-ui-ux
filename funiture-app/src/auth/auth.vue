<template>
    <section>
        <div>
            <nav v-if="!splash" class="text-2xl flex items-center space-x-1 mt-8 justify-center text-black">
                <router-link :to="{name: 'login'}">
                    <span>Login</span>
                </router-link>
                <span>|</span>
                <router-link :to="{name: 'signup'}">
                    <span>Sign Up</span>
                </router-link>
            </nav>
            <div v-else>
                <span>Password reset</span>
            </div>
        </div>
        <div class="my-8">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>

    import { onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    export default {
        setup(){
            const router = useRouter()
            const store = useStore()

            const splash = computed(() => store.state.splash)

            onMounted(() => {
                router.push('/login')
            })

            return { splash }
        }
    }

</script>