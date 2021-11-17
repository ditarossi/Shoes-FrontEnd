<template>
  <div class="home">
    <nav></nav>
    <slider></slider>
    <br>
    <br>
    <list></list>
    <br>
    <br>
    <footerweb></footerweb>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import list from "../components/Card.vue";
import slider from "./Slider.vue";
import footerweb from "../components/Footer.vue";
import nav from "../components/Navbar.vue";

@Options({
  components: {
    list,
    slider,
    footerweb,
    nav
  },
})
export default class Home extends Vue {}
</script>

<style>
.slide{
  width: 800px;
}
</style>
