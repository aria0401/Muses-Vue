<template>
  <header class="d-flex">
    <div class="nav-bar align-items-end d-flex justify-content-center align-items-center">
      <NavBar />
    </div>
  </header>
  <div class="page-wrap container my-5 py-3 py-lg-5">
    <router-view></router-view>
  </div>
  <footer class="footer">
    <div class="container text-center">
      This is a school project from the Multimedia Design program at KEA.
    </div>
  </footer>
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

