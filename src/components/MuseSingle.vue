<template>
    <div class="row col-lg-10 mx-auto">
        <div class="d-none d-md-block col-lg-5">
            <img :src="musePicture.image_url" class="muse-single-img-lg"/>
            <p class="picture-name text-capitalize">{{ musePicture.picture_name }} {{ musePicture.year ? ' (' + musePicture.year + ')': ''}}</p>
        </div>
        <div class="col-lg-7 px-xl-5">
            <div v-html="muse.text"></div>
            <div class="d-md-none">
                <img :src="musePicture.image_url" class="muse-single-img-lg"/>
                <p class="picture-name text-capitalize">{{ musePicture.picture_name }} {{ musePicture.year ? ' (' + musePicture.year + ')': ''}}</p>
            </div>
            <h2 class="mt-5 mb-4">Other pictures of {{ muse.muse_name }}</h2>
            <div class="muse-paintings row">
                <div v-for="painting in paintings" :key="painting.id" class="col-4 col-md-3 ">
                    <img :src="painting.image_url" @click="updatePicture(painting.id)" class="muse-single-img-sm"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    name: "MuseSingle",
    props: {
        muse: {
            type: Object,
            required: true,
        },
        musePicture:{
            type: Object,
            required: true,
        },
        paintings:{
            type: Array,
            required: true
        }
    },
    methods: {
        updatePicture(id){     
            this.$emit('find-muse-picture', id);
        },
    },
}


</script>