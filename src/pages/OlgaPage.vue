<template>
    <h1>Olga</h1>
    <div class="muses-grid">
        <div
            class="muse-item" 
            v-for="muse in muses" 
            :key="muse.id">
            <img :src="muse.imageName" class="muses-grid-img"/>
        </div>
    </div>
</template>

<script>
import { muses } from "@/temp-data";
export default {
    name: "OlgaPage",
    data (){
        return{
            muses: muses.filter(muse => muse.museName === 'olga'),
        }
    }
}
</script>