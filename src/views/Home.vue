<template>
  <div class="home">
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
import list from "./Card.vue";
import slider from "./Slider.vue";
import footerweb from "./Footer.vue";

@Options({
  components: {
    list,
    slider,
    footerweb
  },
})
export default class Home extends Vue {}
</script>

<style>
.slide{
  width: 800px;
}
</style>
