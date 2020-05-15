<template>
  <div class="text-center">
    <img alt="Vue logo" src="../assets/food.png">
    <HelloWorld msg="Welcome to Our Meals"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
