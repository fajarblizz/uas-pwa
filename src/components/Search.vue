<template>
  <div class="search">
      <!-- <h1>This is a search page</h1> -->
    <div class="row my-5">
        <center>
        <div class="form-inline" style="width: 100%;">
            <div class="form-group mx-sm-4 mb-1" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Seach meals by name..." v-model="query">
            </div>
            <div class="form-group mx-sm-4 mb-1" style="width: 100%;">
            <button type="submit" class="btn btn-primary mb-2" @click="getResult(query)">Search</button>
            </div>
        </div>
        </center>
    </div>
    <div class="row m-3">
        <div class="col-md-3" v-for="result in results" :key="result.idMeal" style="text-align: center;">
          <button @click="addFav(result.idMeal,result.strMealThumb,result.strMeal,result.strCategory)">Favorit</button>
          <div class="card" style="width: 15rem; height: 100%;">
            <img class="card-img-top" :src="result.strMealThumb">
            <div class="card-body">
              <h5 class="card-title">{{result.strMeal}}</h5>
             <span class="badge badge-pill badge-primary">{{result.strCategory}}</span>
            </div>
          </div>`
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const STORAGE_KEY = 'DATAFAVORIT'
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: '',
      fav: []
    }
  },
  methods: {
    getResult (query) {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query).then(response => {
        console.log(response.data.meals)
        this.results = response.data.meals
      })
    },
    addFav (favId, favPict, favName, favCategory) {
      this.fav.push({ id: favId, picture: favPict, name: favName, category: favCategory })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fav))
      this.$toast.success('Added to favorites !', {
        theme: 'bubble',
        position: 'top-center',
        duration: '1500'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
