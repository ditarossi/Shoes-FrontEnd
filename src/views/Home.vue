<template>
  <div class="home">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

@Options({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
export default class Home extends Vue {}
</script>
