<template>
    <router-link to="/">
    <div>
        <img :src="logo" class="logo"/>
    </div>
    </router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/olga">Olga</router-link>
    <router-link to="/marie-therese">Marie-Thérèse</router-link>
</template>

<script>
import logo from '@/assets/logo.svg';
export default{
    name: "NavBar",
    data (){
        return{
            logo,
        }
    }
}
</script>