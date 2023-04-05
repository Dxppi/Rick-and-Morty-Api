<template>
  <main class="main">
    <div class="main__wrapper">
      <h1 class="title-text">The Rick and Morty Wiki</h1>    
    </div>
    
    <div class="main__row">
      <input 
        class="select search row-item"
        type="text"
        v-model="search"
        placeholder="Filter by name..." >  
    </div>
    
    <div class="main__fieldWrapper">
      <div class="main__charactersField">
        <div v-for="character in filteredItems" :key="character.id" class="charactersField__card">
          <router-link :to='/character/+ character.id'>
          <img class="card__img" :src="character.image" alt="">
          <div class="card__content">
            <h2>{{character.name}}</h2>
            <span class="text-grey"> {{ character.species }} </span>
          </div> 
        </router-link>
        
        </div>
      </div>
      
        <button @click="nextPage()" class="loadMore"> <h3 class="loadMore-text">Load More</h3></button>
      
    </div>

    
  </main>
</template>


<script>
import axios from "axios"

export default {
  data() {
    return { 
      characters: [],
      search:'',
      dataForSearch: [],
      pageNumber: 1,
    }
  },
  computed: {
      filteredItems(){
        return this.characters.filter( item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());

        })
      },
  },

  
  methods:{
      nextPage(){
         this.pageNumber++;
         axios.get(`https://rickandmortyapi.com/api/character/?page=${this.pageNumber}`)
    .then (response => (
      (response.data.results.map(item=>this.characters.push(item)))))
    .catch(err => {
      console.log(err)
    })
      },
  },
  mounted() {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${this.pageNumber}`)
    .then (response => (
      this.characters = response.data.results))
    .catch(err => {
      console.log(err)
    })
  }

}
</script>