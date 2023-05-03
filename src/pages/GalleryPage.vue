<template class="container">
    <h1 class="text-center mb-3 mb-lg-5">Gallery</h1>
    <div v-if="!isLoaded">
        <PageLoader />
    </div>
    <div v-if="paintings.length > 0">
        <PaintingsList :paintings="paintings"/>
    </div>
</template>

<script>
import PaintingsList from "@/components/PaintingsList.vue";
import PageLoader from "@/components/PageLoader.vue";
import axios from 'axios';

export default {
    name: "GalleryPage",
    components: {
        PaintingsList,
        PageLoader,
    },
    data(){
        return{
            paintings: [],
            isLoaded: false,
        }
    },
    async created(){
        const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/paintings/?per_page=100');
        this.paintings = response.data; 
        setTimeout(function () {  this.isLoaded = true; }.bind(this), 600);
    }
}
</script>


