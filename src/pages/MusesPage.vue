<template class="container">
    <h1>Muses</h1>
    <div v-if="muses.length > 0">
        <div v-for="muse in muses" :key="muse.id">
            <router-link :to="'/muses/' + muse.id">
                {{ muse.title.rendered }}
            </router-link>
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
        // console.log(response.data);
    }
}
</script>


