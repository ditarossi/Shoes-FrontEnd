<template>
  <div class="kategori">
    <nav></nav>
    <list></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import list from "../components/Card.vue";
//import nav from "../components/Navbar.vue";

export default defineComponent({
    components :{
      list,
    }
})
</script>

