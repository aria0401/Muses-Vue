<template>
  <header class="d-flex">
    <div class="nav-bar align-items-end container d-flex justify-content-center">
      <NavBar />
    </div>
  </header>
  <div class="page-wrap container mt-5 pt-3">
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

