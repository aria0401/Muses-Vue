<template>
    <h1 class="">Olga</h1>
    <div v-if="!isLoaded">
        <PageLoader />
    </div>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
    <div v-if="muses.length === 0">There are no items on this page.</div>
</template>

<script>
import MusesList from "@/components/MusesList.vue";
import PageLoader from "@/components/PageLoader.vue";
import axios from 'axios';

export default {
    name: "OlgaPage",
    components: {
        MusesList,
        PageLoader
    },
    data (){
        return{
            muses: [],
            isLoaded: false,
        }
    },
    async created(){
       const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/');
       const olga = response.data;
       this.muses = olga.filter(muse => muse.muse_name === 'olga'); 
       setTimeout(function () {  this.isLoaded = true; }.bind(this), 800);
    }
}
</script>
