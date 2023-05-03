<template>
    <div v-if="!isLoaded">
        <PageLoader />
    </div>
    <MuseSingle :muse="muse" :musePicture="musePicture" :paintings="paintings" @find-muse-picture="findMusePicture"/>
    <div v-if="paintings.length === 0">There are no items on this page.</div>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
import MuseSingle from "@/components/MuseSingle.vue";
import axios from 'axios';

export default {
    name: "MuseDetailsPage",
    components: {
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
        const response = await axios.get(`https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/?include[]=${this.$route.params.museId}`);
        const muse = response.data[0];
        this.muse = muse;
        this.paintings = muse.paintings.filter((item, index) => { return index != 0 ? item : null });
        this.musePicture = muse.paintings[0];
        this.isLoaded = true;
    },
    methods: {
        findMusePicture(id){
            const newPaintings = this.muse.paintings.filter(item => item.id != id);
            const newMusePicture = this.muse.paintings.filter(item => item.id == id);
            this.paintings = newPaintings;
            this.musePicture = newMusePicture[0];
        }
    }
}
</script>


