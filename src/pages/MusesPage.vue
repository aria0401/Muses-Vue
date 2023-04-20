<template class="container">
     <PageLoader />
    <h1>Muses</h1>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
</template>

<script>
import MusesList from "@/components/MusesList.vue";
import PageLoader from "@/components/PageLoader.vue";
import axios from 'axios';


export default {
    name: "MusesPage",
    components: {
        MusesList,
        PageLoader,
    },
    data(){
        return{
            muses: [],
        }
    },
    async created(){
       const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/');
       this.muses = response.data;  
    }
}
</script>