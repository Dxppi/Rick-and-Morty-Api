<template>
    <main class="main">
        <div class="main__about">
            <h1 class="title-text">{{location.name}}</h1>
            <h2 class="subtitle-text">type: {{location.type}}</h2>
            <h2 class="subtitle-text">dimension: {{location.dimension}}</h2>
            
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
        </div>
</main>
</template>



<script>

import axios from 'axios';

export default {
    data(){
        return {
            location:[],
            id: this.$route.params.id,
            CharacterData:[],
            search: '',
            
        }
    },
    mounted(){
        return axios.get(`https://rickandmortyapi.com/api/location/${this.id}`)
        .then (response => {
            this.location = response.data,
            response.data.residents.map(item => axios.get(item).then(res => this.CharacterData.push(res.data)))
        })
        .catch(err => {
        console.log(err)
        })
        
    },
    computed: {
      filteredItems(){ 
        return this.CharacterData.filter( item => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());

        })
      }
    },
    

}
</script>

<style scoped>
    .main{
    height: 100%;
    }
    .main__about {
        margin-bottom: 50px;
    }
    .subtitle-text{  
        color: rgb(32, 35, 41);
        margin:0 auto;
        text-align: center;  
    }
    
    .title-text{
        color: rgb(32, 35, 41);
        margin:0 auto;
        margin-bottom: 2%;
        margin-top:5%;
        text-align: center;
    }
</style>
