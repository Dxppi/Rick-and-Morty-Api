<template>
    <main class="main">
      <router-link to="/"><div class="goBack"><h1 class="goBack-text">← Back</h1></div> </router-link>
        <img class="main__logo" src="../assets/rick-and-morty2 1.svg" alt="logo">
        <div class="main__row">
          <input 
            class="select search row-item"
            type="text"
            
            v-model="search"
            placeholder="Filter by name..." >  
        </div>
        <div class="main__fieldWrapper">
          <div class="main__charactersField">
            
              <div v-for="episode in filteredItems" :key="episode.id" class="charactersField__card">
                <router-link :to='/episode/+ episode.id'>
                  <div class="card__content">
                    <h1>{{episode.name}}</h1>
                    <p class="text-grey">{{episode.air_date}}</p>
                    <h2>{{episode.episode}}</h2>    
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
      episodes: [],
      search:'',
      pageNumber: 1
    };
  },
  computed: {
      filteredItems(){
        return this.episodes.filter( item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());

        })
      },     
  },
  methods:{
      nextPage(){
         this.pageNumber++;
         axios.get(`https://rickandmortyapi.com/api/episode/?page=${this.pageNumber}`)
    .then (response => (
      (response.data.results.map(item=>this.episodes.push(item)))))
    .catch(err => {
      console.log(err)
    })
      },
  },

  mounted(){
    return axios.get("https://rickandmortyapi.com/api/episode")
    .then (response => (
      this.episodes = response.data.results ))
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