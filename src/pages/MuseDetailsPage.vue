<template>
    <div v-if="muse">
        <h1>{{ muse.name }}</h1>
        <div>
            <img :src="muse.imageName" />
        </div>
    </div>
    <div v-else>
        <NotFoundPage />
    </div>
</template>
    
<script>
import { muses } from "@/temp-data";
import NotFoundPage from "./NotFoundPage.vue";
export default {
    name: "MuseDetailsPage",
    components: {
        NotFoundPage,
    },
    data(){
        return{
            muse: muses.find(muse => muse.id === this.$route.params.museId )
        }
    }
}
</script>