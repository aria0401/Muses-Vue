<template class="container">
    <div class="muses-page">
        <h1 class="text-center  mb-3 mb-lg-5">Muses</h1>
        <div v-if="muses.length > 0" class="muses-page-grid">
            <div v-for="muse in muses" :key="muse.id" class="muses-item">
                <router-link :to="'/muses/' + muse.id">
                    <img :src="muse.image_url" class="mb-3"/>
                    {{ muse.muse_name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MusesPage",
    data(){
        return{
            muses: [],
        }
    },
    async created(){
        const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse');
        this.muses = response.data.reverse(); 
    }
}
</script>


