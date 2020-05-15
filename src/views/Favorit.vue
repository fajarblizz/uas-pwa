<template>
  <div class="container">
    <Favorit />
  </div>
</template>

<script>
// @ is an alias to /src
import Favorit from '@/components/Favorit.vue'

export default {
  name: 'Home',
  components: {
    Favorit
  }
}
</script>
