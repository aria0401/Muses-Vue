<template>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/" class="a-logo">
    <div>
        <img :src="`${publicPath}/assets/logo.svg`" class="logo"/>
        <!-- <img :src="logo" class="logo"/> -->
    </div>
    </router-link>
    <router-link to="/muses">Muses</router-link>

</template>

<script>
// import logo from '@/assets/logo.svg';
export default{
    name: "NavBar",
    data (){
        return{
            // logo,
            publicPath: process.env.BASE_URL,
        }
    }
}
</script>