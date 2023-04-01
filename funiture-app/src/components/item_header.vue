<template>
    <header class="flex justify-between m-4 text-xl items-center">
        <router-link :to="{name: 'home'}">
            <div class="border border-gray-500 flex justify-center items-center rounded-[50%] w-8">
                <i class="fas fa-arrow-left"></i>
            </div>
        </router-link>
        <span>{{ name }}</span>
        <div @click="favMaker" class="border border-gray-500 flex justify-center items-center rounded-full w-8">
            <i v-if="isFav" class="fas fa-heart text-red-500"></i>
            <i v-else class="fas- fa-heart"></i>
        </div>
    </header>
</template>

<script>

    import { ref } from 'vue';

    export default {
        props: [
            "item_name",
            "item_state",
            "item_id"
        ],
        setup(props){
            const name = ref(props.item_name)
            const isFav = ref(props.item_state)

            const favMaker = () => {
                console.log(`Added ${props.item_id} to favorites`)
            }

            return { favMaker, name, isFav }
        }
    }

</script>