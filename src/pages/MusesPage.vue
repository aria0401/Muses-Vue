<template class="container">
    <h1>Muses</h1>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
</template>

<script>
import MusesList from "@/components/MusesList.vue";
import axios from 'axios';


export default {
    name: "MusesPage",
    components: {
        MusesList,
    },
    data(){
        return{
            muses: [],
        }
    },
    async created(){
       const response = await axios.get('https://ariadna.dk/mios/WP/wp-json/wp/v2/muse/');
    //    console.log(response.data);
       this.muses = response.data;  
    }
}
</script>