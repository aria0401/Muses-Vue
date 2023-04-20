<template>
    <h1 class="">Olga</h1>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
    <div v-if="muses.length === 0">Olga no tiene fotos.</div>
</template>

<script>
import MusesList from "@/components/MusesList.vue";
import axios from 'axios';
import 'animate.css';

export default {
    name: "OlgaPage",
    components: {
        MusesList,
    },
    data (){
        return{
            muses: [],
        }
    },
    async created(){
       const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/');
       const olga = response.data;
       this.muses = olga.filter(muse => muse.muse_name === 'olga'); 
    }
}
</script>
