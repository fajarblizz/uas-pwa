!<template>
  <div>
    <div class="container my-2" v-if="detail">
      <div
        class="row justify-content-md-center mt-5 pt-3"
        v-for="(data, index) in detail"
        :key="index"
      >
        <div class="col-md-4">
          <img :src="data.strMealThumb" :alt="data.strMeal" class="img-thumbnail" />
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h4>
                {{data.strMeal}}
                <span class="badge badge-success">{{data.strArea}}</span>
                <span class="badge badge-warning">{{data.strCategory}}</span>
              </h4>
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0 text-left">
                <pre> {{data.strInstructions}}</pre>
              </blockquote>
              <a :href="data.strYoutube">
                Link Videos on
                <span class="badge badge-danger">Youtube</span>
              </a>
            </div>
          </div>
          <hr class="divider" />
          <div class="alert alert-light">
            <h5 class="alert-heading">Ingredient</h5>
            <h6 class="font-weight-light mb-0"></h6>
            <div class="row">
              <div class="col-md-auto" v-for="(n, index) in 20" :key="index">
                <div v-if="data['strIngredient' + n] != ''">
                  <h6>
                    {{ data['strIngredient' + n] }}
                    <span class="badge badge-primary">
                      {{
                      data['strMeasure' + n]
                      }}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return { detail: [], error: null, loading: [] }
  },
  created () {
    if (this.$route.params.id) {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
          params: {
            i: this.$route.params.id
          }
        })
        .then(response => {
          this.detail = response.data.meals
        })
        .catch(error => {
          console.log(error)
          this.error = error.toString()
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style>
</style>
