<template>
    <section>
        <div class="flex justify-between items-center px-4 mb-4">
            <span class="font-bold text-xl">Chairs Collection</span>
            <div class="border border-black rounded-full flex justify-center items-center w-7 h-7 dark:border-white dark:text-white">
                <i class="fas fa-arrows-turn-right"></i>
            </div>
        </div>
        <div class="flex space-x-3 px-4 overflow-x-auto min-h-[18rem]">
            <router-link v-for="(item, index) in items" :key="index" :to="{name: 'item', params: {cat: item.category, name: item.name}, props: {item_id: item.id}}" class="h-[16rem] min-w-[65%]">
                <article class="h-full w-full relative flex flex-col items-center justify-center bg-yellow-200 rounded-t-[10rem]">
                    <div class="h-[65%] w-[70%]">
                        <img src="@/assets/images/seat.jpg" :alt="item.name" class="object-fit h-full w-full">
                    </div>
                    <div class="absolute -bottom-6 w-[90%] rounded-lg m-auto flex justify-between items-center shadow-2xl bg-white px-4 py-1">
                        <div class="flex flex-col dark:text-black">
                            <span>{{ item.name }}</span>
                            <span>{{ item.price }}</span>
                        </div>
                        <div class="rounded-full flex justify-center items-center w-9 h-9 bg-yellow-500">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </article>
            </router-link>
        </div>
    </section>
</template>

<script>

    import { ref } from 'vue'

    export default {
        setup(){
            const items = ref([{
                name: "Chair",
                category: "Sofas",
                id: 234,
                price: "$25"
            }])

            const fetchItems = async() => {
                try{
                    await fetch("#")
                    .then((funiture) => {
                        items.value = funiture
                    })
                } catch {
                    (err) => {
                        console.log(err.message)
                    }
                }
            }

            return {items}
        }
    }

</script>