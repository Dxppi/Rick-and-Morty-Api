<template>
    <main class="main">
        <div class="main__about">
            <h1 class="title-text">{{location.name}}</h1>
            <h2 class="subtitle-text">{{location.type}}</h2>
            <h2 class="subtitle-text">{{location.dimension}}</h2>
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
            search: ''

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
          return item.name.toLowerCase().includes(this.search);

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
        font-family: Roboto,sans-serif;
        line-height: 100%;
        font-weight: 300;
        color: rgb(32, 35, 41);
        font-size: 2vw;
        margin:0 auto;
        text-align: center;
        
    }
    @media (max-width: 1000px) {
        .subtitle-text{
          font-family: Roboto,sans-serif;
          line-height: 100%;
          font-weight: 500;
          color: rgb(32, 35, 41);
          font-size: 8vw;
                  
        }
      }
    .title-text{
        font-family: Roboto,sans-serif;
        line-height: 100%;
        font-weight: 300;
        color: rgb(32, 35, 41);
        font-size: 4vw;
        margin:0 auto;
        margin-bottom: 2%;
        margin-top:5%;
        text-align: center;
    }
    @media (max-width: 1000px) {
      .title-text{
        font-family: Roboto,sans-serif;
        line-height: 100%;
        font-weight: 500;
        color: rgb(32, 35, 41);
        font-size: 10vw;
                
      }
    }
</style>
