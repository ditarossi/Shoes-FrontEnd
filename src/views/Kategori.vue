<template>
  <div class="kategori">
    <list></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import list from "./Card.vue";

export default defineComponent({
    components :{
      list
    }
})
</script>

