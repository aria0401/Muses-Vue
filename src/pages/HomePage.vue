<template>
    <div class="home-page pt-lg-5">
        <div class="row justify-content-around">
            <div class="col-left col-md-6 col-lg-5 mb-4">
                <img :src="picasso" />
                <figcaption class="mt-3">Foto: George Stroud/Getty Images</figcaption>
            </div>
            <div class="col-right col-md-6 col-lg-5">
                <h1>Picasso's muses</h1>
                <p>"Muses" is about the women in Picasso's life and how they have influenced his art. Whether it is Olga's exploratory depictions or Dora's dramatic paintings, they can tell us a lot about Picasso—his style development and his view of his loves.</p>
                <router-link to="/gallery" class="artworks">See the artworks here...</router-link>
            </div>
        </div>
    </div>
</template>
    
<script>
import picasso from '@/assets/pablo-picasso.jpg';

export default {
    name: "HomePage",
    data(){
        return{
            picasso,
        }
    }
}
</script>