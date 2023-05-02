<template>
    <div v-if="painting">
        <h1>{{ painting.picture_name }}</h1>
        <div>
            <img :src="painting.image_url" />
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
    name: "PaintingPage",
    components: {
        NotFoundPage,
    },
    async created(){
       const response = await axios.get(`https://ariadna.dk/mios/WP/wp-json/wp/v2/paintings?include[]=${this.$route.params.paintingId}`);
       this.painting = response.data[0]; 
    },
    data(){
        return{
            painting: {},
        }
    },
}
</script>


    
