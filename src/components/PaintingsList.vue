<template>
    <div class="muses-grid">
        <div
        class="muse-item" 
        v-for="painting in paintings" 
        :key="painting.id">
        <router-link :to="'/gallery/' + painting.id">
            <img :src="painting.image.guid" class="muse-grid-img" />
        </router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: "PaintingsList",
    props: {
        paintings: {
            type:Array,
            required: true
        }
    },
}
</script>



