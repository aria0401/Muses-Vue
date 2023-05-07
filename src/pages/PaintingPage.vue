<template>
    <div v-if="painting" class="row">
        <div class="col-lg-6">
            <img :src="painting.image_url" />
        </div>
        <div class="col-lg-6">
            <h1>{{ painting.picture_name }}</h1>
            <p>{{ painting.muse_name ? 'Muse: ' +  painting.muse_name: '' }}</p>
            <p class="p-year"> {{ painting.year ?  painting.year : ''}}</p>
            <p class="p-tech"> {{ painting.technique ?  painting.technique : ''}}</p>
            <p>{{ painting.picture_name ?  '&copy; Pablo picasso' : ''}}</p>
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


    
