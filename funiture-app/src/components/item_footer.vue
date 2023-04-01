<template>
    <footer>
        <div v-if="inCart">
            <i class="fas fa-shopping-cart"></i>
            <span>Add To Cart</span>
        </div>
        <div v-else>
            <!-- <i class="fas fa-shopping-cart"></i> -->
            <span>Order Now</span>
        </div>
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