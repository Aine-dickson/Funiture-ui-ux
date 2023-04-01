<template>
    <footer class="flex justify-between items-center rounded-[5rem] bg-black text-white text-xl w-[90%] m-auto h-[87%] p-2">
        <div v-if="inCart" class="flex-grow-[90%]">
            <i class="fas fa-shopping-cart"></i>
            <span>Add To Cart</span>
        </div>
        <div v-else class=" flex-grow-[90%] space-x-4">
            <i class="fas fa-shopping-cart"></i>
            <span>Order Now</span>
        </div>
        <div class="border-r border-r-white h-[50%]"></div>
        <div>
            {{ price }}
        </div>
    </footer>
</template>

<script>

    import { ref } from 'vue'

    export default {
        props: [
            'item_price',
            'item_state'
        ],
        setup(props){
            const price = ref(props.item_price)
            const inCart = ref(props.item_state)

            return {price, inCart}
        }
    }

</script>