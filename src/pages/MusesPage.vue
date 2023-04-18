<template class="container">
<h1>Muses</h1>
<div class="muses-grid">
    <div
    class="muse-item" 
    v-for="muse in muses" 
    :key="muse.id">
    <router-link :to="'/muses/' + muse.id">
        <img :src="muse.imageName" class="muses-grid-img" />
        <h3>{{ muse.name }}</h3>
    </router-link>
    </div>
</div>
</template>

<script>
import { muses } from "@/temp-data";

export default {
    name: "MusesPage",
    data(){
        return{
            muses,
        }
    }
}
</script>