<template>
    <div v-html="muse.text"></div>
    <img :src="musePicture.image_url" class="muse-single-img"/>
</template>
<script>
export default{
    name: "MuseSingle",
    props: ['muse', 'musePicture'],
}
</script>