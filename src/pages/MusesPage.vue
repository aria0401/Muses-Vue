<template class="container">
    <h1>Muses</h1>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
</template>

<script>
import { muses } from "@/temp-data";
import MusesList from "@/components/MusesList.vue";

export default {
    name: "MusesPage",
    components: {
        MusesList
    },
    data(){
        return{
            muses,
        }
    }
}
</script>