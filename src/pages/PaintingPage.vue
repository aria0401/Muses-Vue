<template>
    <div v-if="painting" class="col-md-8 col-lg-6 col-xl-5 mx-auto">
        <div class="">
            <h1>{{ painting.picture_name }} {{ painting.year ? ' (' + painting.year + ')': ''}}</h1>
            <img :src="painting.image_url" class="mb-3"/>
        </div>
        <div class="">
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


    
