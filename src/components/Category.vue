<template>
  <div class="container my-2">
    <div class="row mt-4" v-for="(data, index) in kategoriRow" :key="index">
      <div class="col-md-3" v-for="(datas, index) in data" :key="index">
        <router-link :to="{ name: 'Come', params: { id: datas.strCategory } }">
          <img :src="datas.strCategoryThumb" class="img-thumbnail" />
          <hr />
          <p>{{ datas.strCategory }}</p>
          <pre>{{ datas.strCategoryDescription.slice(0, 100) }}</pre>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
var chunk = require('chunk')
export default {
  name: 'Category',
  data () {
    return {
      kategori: [],
      error: [],
      loading: []
    }
  },
  created () {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        this.kategori = response.data.categories
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  },
  computed: {
    kategoriRow () {
      return chunk(this.kategori, 4)
    }
  }
}
</script>

<style></style>
