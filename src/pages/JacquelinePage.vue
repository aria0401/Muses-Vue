<template>
    <div v-if="!isLoaded">
        <PageLoader />
    </div>
    <MuseSingle :muse="muse" :musePicture="musePicture"/>
    <div v-if="paintings.length > 0">
        <PaintingsList :paintings="paintings"/>
    </div>
    <div v-if="paintings.length === 0">There are no items on this page.</div>
</template>

<script>
import PaintingsList from "@/components/PaintingsList.vue";
import PageLoader from "@/components/PageLoader.vue";
import MuseSingle from "@/components/MuseSingle.vue";
import axios from 'axios';

export default {
    name: "JacquelinePage",
    components: {
        PaintingsList,
        PageLoader,
        MuseSingle,
    },
    data (){
        return{
            paintings: [],
            muse: {},
            musePicture: {},
            isLoaded: false,
        }
    },
    async created(){
        // get paintings
        const res_paintings = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/paintings/?per_page=100');
        const data = res_paintings.data;
        const paintings = data.filter(painting => painting.muse_name === 'jacqueline');
        this.paintings = paintings; 
        this.musePicture = paintings.shift();
        // get muse
        const res_muse = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/?include[]=202');
        const muse = res_muse.data;
        this.muse = muse[0];
        this.isLoaded = true;
    }
}
</script>


