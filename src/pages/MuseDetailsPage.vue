<template>
    <div v-if="muse">
        <h1>{{ muse.picture_name }}</h1>
        <div>
            <img :src="muse.image_url" />
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>
    
<script>
import NotFoundPage from "./NotFoundPage.vue";
import axios from 'axios';


export default {
    name: "MuseDetailsPage",
    components: {
        NotFoundPage,
    },
    async created(){
       const response = await axios.get(`https://ariadna.dk/mios/WP/wp-json/wp/v2/muse?include[]=${this.$route.params.museId}`);
       this.muse = response.data[0]; 
    },
    data(){
        return{
            muse: {},
        }
    },
}
</script>