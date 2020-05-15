<template>
  <div class="favorit">
      <!-- <h1>This is a search page</h1> -->
    <div class="row my-5">
        <center>
        <div class="form-inline" style="width: 100%;">
        </div>
        </center>
    </div>
    <div class="row m-3">
        <div class="col-md-3" v-for="result in fav" :key="result.id" style="text-align: center;">
            <router-link :to="{name: 'Detail', params: {id: result.id}}">
            <div class="card" style="width: 15rem; height: 100%;">
                <img class="card-img-top" :src="result.picture">
                <div class="card-body">
                    <h5 class="card-title">{{result.name}}</h5>
                <span class="badge badge-pill badge-primary">{{result.category}}</span>
                </div>
            </div>
            </router-link>
        </div>
    </div>
    </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
const STORAGE_KEY = 'DATAFAVORIT'
export default {
  name: 'Favorit',
  data () {
    return {
      msg: 'Favorit',
      query: '',
      results: '',
      fav: []
    }
  },
  async created () {
    this.fav = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    console.log(this.fav)
  }
}
</script>
