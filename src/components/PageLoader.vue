<template>
    <div class="page-loader" v-if="!isLoaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>
export default{
    name: "PageLoader",
    data(){
        return{
            isLoaded: false,
        }
    },
    mounted(){
        document.onreadystatechange = () => {
            if(document.readyState == "complete"){
                this.isLoaded = true;
            }
        }
    }
}
</script>


