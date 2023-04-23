<template>
  <div class="nav-bar">
    <NavBar />
  </div>
  <div class="page-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  data(){
        return{
            isLoaded: false,
        }
  },
  components: {
    NavBar,
  },
}
</script>

