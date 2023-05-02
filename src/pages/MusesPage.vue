<template class="container">
    <div class="muses-page">
        <h1>Muses</h1>
        <div v-if="muses.length > 0" class="muses-page-grid">
            <div v-for="muse in muses" :key="muse.id" class="muses-item">
                <router-link :to="'/muses/' + muse.id">
                    <img :src="muse.image_url" />
                    {{ muse.title.rendered }}
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
        this.muses = response.data; 
        console.log(response.data);
    }
}
</script>


