<template>
    <h1>Olga</h1>
    <div v-if="muses.length > 0">
        <MusesList :muses="muses"/>
    </div>
    <div v-if="muses.length === 0">Olga no tiene fotos.</div>
</template>

<script>
import { muses } from "@/temp-data";
import MusesList from "@/components/MusesList.vue";

export default {
    name: "OlgaPage",
    components: {
        MusesList
    },
    data (){
        return{
            muses: muses.filter(muse => muse.museName === 'olga'),
        }
    }
}
</script>