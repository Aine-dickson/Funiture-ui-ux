<template>
    <main>
        <article class="rounded-[10rem] h-[16rem] w-[65%]">
            <div class="h-[65%] w-[70%]">
                <img src="@/assets/images/chairs.jpg" :alt="name" class="object-fill h-full w-full">
            </div>
        </article>
        <section>
            <div>
                <div>
                    <span>{{ name }}</span>
                    <span>{{ reviews }}</span>
                </div>
                <div>
                    <span @click="dec">-</span>
                    <span>{{ quantity }}</span>
                    <span @click="inc">+</span>
                </div>
            </div>
            <div class="border-b border-b-black border-dashed"></div>
            <div>
                <span>Colors:</span>
                <div>
                    <span @click="colorPicker('Orange')">Orange</span>
                    <span @click="colorPicker('red')">Red</span>
                    <span @click="colorPicker('white')">White</span>
                    <span @click="colorPicker('green')">Green</span>
                </div>
            </div>
            <div class="border-b border-b-black border-dashed"></div>
            <div>
                <span>Description:</span>
                <span>{{ desc }}</span>
            </div>
        </section>
    </main>
</template>

<script>

    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    export default {
        props: [
            "item_id"
        ],
        setup: (props) => {
            const store = useStore()
            console.log(props.item_id)

            const name = ref("")
            const reviews = ref("")
            const desc = ref("")
            const quantity = ref(1)
            const color = ref([])

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
                if(quantity.value == 0){
                    return
                } else {
                    quantity.value -= 1
                }
            }

            onMounted(() => {
                store.commit("screenControl", "derived")
            })

            // fetchItem()

            return {name, reviews, desc, quantity, inc, dec, colorPicker}
        }
    }

</script>