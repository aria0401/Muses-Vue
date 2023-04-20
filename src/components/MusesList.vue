<template>
    <div class="muses-grid">
        <div
        class="muse-item" 
        v-for="muse in muses" 
        :key="muse.id">
        <router-link :to="'/muses/' + muse.id">
            <img :src="muse.image.guid" class="muse-grid-img" />
            <!-- <h3>{{ muse.picture_name }}</h3> -->
        </router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: "MusesList",
    props: ['muses'],
}
</script>