<template>
    <main class="main">
      <router-link to="/"><div class="goBack"><h1 class="goBack-text">← Back</h1></div> </router-link>
        <img class="main__logo" src="../assets/portal.svg" alt="logo">
        <div class="main__row">
          <input 
            class="select search row-item"
            type="text"
            v-model="search"
            placeholder="Filter by name..." >  
        </div>
        <div class="main__fieldWrapper">
          <div class="main__charactersField">
            
              <div v-for="location in filteredItems" :key="location.id" class="charactersField__card">
                <router-link :to='/location/+ location.id'>
                  <div class="card__content">
                    <h2>{{location.name}}</h2>
                    <p class="text-grey">{{location.type}}</p>   
                  </div> 
                </router-link>
              </div>
              
            </div>>
            <button @click="nextPage()" class="loadMore"> <h3 class="loadMore-text">Load More</h3></button>
        </div>

    </main>


</template>


<script>
import axios from 'axios';


export default {
  data() {
    return {
      locations: [],
      search:'',
      pageNumber:1
    };
  },
  computed: {
      filteredItems(){
        return this.locations.filter( item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());

        })
      },     
  },
  methods:{
      nextPage(){
         this.pageNumber++;
         axios.get(`https://rickandmortyapi.com/api/location/?page=${this.pageNumber}`)
    .then (response => (
      (response.data.results.map(item=>this.locations.push(item)))))
    .catch(err => {
      console.log(err)
    })
      },
  },
  mounted(){
    return axios.get("https://rickandmortyapi.com/api/location")
    .then (response => (
      this.locations = response.data.results ))
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

.main{
  min-height: 100%;
}
.main__logo{
  
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
.card__content{
  text-align: center;
  padding:80px 0;
}

</style>