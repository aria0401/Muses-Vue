<template>
    <div class="row">
        <img :src="musePicture.image_url" class="muse-single-img col-lg-6"/>
        <div v-html="muse.text" class="col-lg-6"></div>
    </div>
</template>
<script>
export default{
    name: "MuseSingle",
    props: ['muse', 'musePicture'],
}
</script>