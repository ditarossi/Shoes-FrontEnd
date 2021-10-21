<template>
  <div class="home">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in slide" :key="slide">
        <img :src="slide" class="slide"/>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
    <card></card>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import card from "./Card.vue"

@Options({
  data(){
    return{
      slide:[
        "https://picsum.photos/1024/480/?image=52",
        "https://picsum.photos/1024/480/?image=54",
        "https://picsum.photos/1024/480/?image=58",
        "https://picsum.photos/1024/480/?image=55"
      ],
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    card
  },
})
export default class Home extends Vue {}
</script>

<style>
.slide{
  width: 800px;
}
</style>
