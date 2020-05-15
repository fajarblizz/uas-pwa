<template>
  <div class="search container">
  <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'Search',
  components: {
    Search
  }
}
</script>
