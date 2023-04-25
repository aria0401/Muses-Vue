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
    name: "MarieTheresePage",
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
        const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/?include[]=197');
        const muse = response.data[0];
        this.muse = muse;
        this.paintings = muse.paintings;
        this.musePicture = muse.paintings.shift();
        this.isLoaded = true;
    }
}
</script>


