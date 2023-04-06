<template>
    <main class="text-xl">
        <article class="rounded-t-[10rem] h-[18rem] w-[80%] m-auto bg-yellow-200 mb-4 flex items-center justify-center">
            <div class="h-[65%] w-[70%]">
                <img :src="item.img" :alt="item.name" class="object-fill h-full w-full">
            </div>
        </article>
        <section class="space-y-2">
            <div class="flex justify-between items-center">
                <div class="flex flex-col">
                    <span>{{ item.name }}</span>
                    <span>{{ item.reviews }}</span>
                </div>
                <div class="flex justify-between items-center w-28 bg-gray-500 rounded-3xl h-9 text-2xl dark:text-black">
                    <span @click="dec" class="flex justify-center items-center bg-white rounded-full h-full w-9">-</span>
                    <span class="font-bold text-white">{{ quantity }}</span>
                    <span @click="inc" class="flex justify-center items-center bg-white rounded-full h-full w-9">+</span>
                </div>
            </div>
            <div class="border-b border-b-black border-dashed"></div>
            <div class="flex space-x-4 items-center overflow-x-auto">
                <span class="font-bold ml-4">Colors:</span>
                <div class="flex items-center w-auto h-12 rounded-[2rem] bg-slate-500 space-x-2 p-2">
                    <div @click="colorPicker('Orange')" class="bg-orange-500 rounded-full h-[95%] w-[2rem]"></div>
                    <span @click="colorPicker('red')" class="bg-red-500 rounded-full h-[95%] w-[2rem]"></span>
                    <span @click="colorPicker('white')" class="bg-white rounded-full h-[95%] w-[2rem]"></span>
                    <span @click="colorPicker('green')" class="bg-green-500 rounded-full h-[95%] w-[2rem]"></span>
                </div>
            </div>
            <div class="border-b border-b-black border-dashed"></div>
            <div class="ml-4">
                <span class="font-bold">Description:</span>
                <div>{{ item.desc }}</div>
            </div>
        </section>
    </main>
</template>

<script>

    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        props: [
            "item_id",
            "name"
        ],
        setup: (props) => {
            const store = useStore()

            const name = ref(props.name)
            const reviews = ref((Math.random())*100)
            const desc = ref("Lorem ipsum dolor et sare fineo, ripoto ")
            const quantity = ref(1)
            const color = ref([])

            const item = {
                name: name.value,
                img: `/assets/images/${name.value}.png`,
                review: reviews.value,
                desc: desc.value,
                quantity: quantity.value
            }

            const fetchItem = async() => {
                try{
                    await fetch('#')
                    .then(() => {
                        console.log("Fetch succesful")
                    })
                } catch {
                    (err) => {
                        console.log("Fetch failed!")
                    }
                }
            }
            const colorPicker = (color) => {
                let colorIndex = color.value.indexOf(color)
                if(colorIndex >= 0){
                    color.value.splice(colorIndex, 1)
                    console.log(color.value)
                } else {
                    color.value.push(color)
                    console.log(color.value)
                }
            }
            const inc = () => {
                quantity.value += 1
            }
            const dec = () => {
                if(quantity.value == 1){
                    return
                } else {
                    quantity.value -= 1
                }
            }

            onMounted(() => {
                store.commit("screenControl", "derived")
            })

            // fetchItem()

            return {quantity, item, inc, dec, colorPicker}
        }
    }

</script>