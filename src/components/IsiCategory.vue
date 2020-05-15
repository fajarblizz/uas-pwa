!<template>
  <div class="Category">
    <div class="container my-2" v-if="listCategory">
      <div class="row mt-4" v-for="(data, index) in kategoriRow" :key="index">
        <div class="col-md-3" v-for="(datas, index) in data" :key="index">
          <router-link :to="{ name: 'Detail', params: { id: datas.idMeal } }">
            <img :src="datas.strMealThumb" class="img-thumbnail" />
            <hr />
            <p>{{ datas.strMeal }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios'
var chunk = require('chunk')
export default {
  name: 'IsiCategory',
  data () {
    return { listCategory: null, error: null, loading: null }
  },
  created () {
    if (this.$route.params.id) {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php', {
          params: {
            c: this.$route.params.id
          }
        })
        .then(response => {
          this.listCategory = response.data.meals
        })
        .catch(error => {
          console.log(error)
          this.error = error.toString()
        })
        .finally(() => (this.loading = false))
    }
  },
  computed: {
    kategoriRow () {
      return chunk(this.listCategory, 4)
    }
  }
}
</script>

<style>
</style>
