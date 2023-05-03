<template>
    <div class="row">
        <img :src="isMusePicture.image_url" class="muse-single-img col-lg-6"/>
        <div class="col-6">
            <div v-html="muse.text"></div>
            <h2 class="mt-5 mb-4">Other pictures of {{ muse.muse_name }}</h2>
            <div class="muse-paintings row">
                <div v-for="painting in paintings" :key="painting.id" class="col-lg-2">
                    <img :src="painting.image_url" @click="updatePicture(painting.id)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "MuseSingle",
    props: ['muse', 'musePicture', 'paintings'],
    data(){
        return{
            isMusePicture: this.musePicture,
        }
    },
    methods: {
        updatePicture(id){
            
            const picture = this.paintings.find(el => el.id === id);
            this.isMusePicture = picture;

        }
    },

}
</script>