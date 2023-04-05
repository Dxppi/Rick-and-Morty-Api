<template>
    <main class="main"> 
      <router-link to="/"><div class="goBack"><h1 class="goBack-text">← Back</h1></div> </router-link>
        <div class="main__titleHero">
            <img :src="character.image" alt="" class="main-img">
            <h1 class='title-text'>{{character.name}}</h1>
        </div> 
        <div class="main__titles text-grey">
             <h1>Information</h1>
        </div> 

        

      <div class="wrapper">
        <div class="main__contentWrapper">
          <div class="line"></div>
            <div class="contentWrapper__left">
                <div class="contentWrapper__left-column">
                  <div class="column-item">
                    <h3>Gender</h3>
                    <p class="text-blue">{{character.gender}}</p>
                  </div>
                  <div class="column-item">
                    <h3>Status</h3>
                    <p class="text-blue">{{character.status}}</p>
                  </div>
                  <div class="column-item">
                    <h3>Gender</h3>
                    <p class="text-blue">{{character.species}}</p>
                  </div>
                  
                </div>
            </div>

            <div class="line"></div>
            
          <div class="contentWrapper__left">
            <div class="contentWrapper__right-column">
                  
                  <div class="column-item">
                    <h3>Origin</h3>
                    <p class="text-blue">{{character.origin?.name}}</p>
                  </div>
                  <div class="column-item">
                    <h3 v-if="character.type">Type</h3>
                    <p class="text-blue">{{character.type}}</p>
                  </div>
                  <router-link :to='/location/ + locationId'>
                    <div class="column-item url">
                      <h3>Location</h3>
                      <p class="text-blue">{{character.location?.name}}</p>
                    </div>
                  </router-link>
                </div>
            </div>
            <div class="line"></div>
        </div>
      </div> 
    </main>
    
</template> 

<style scoped>

  .main{
    height: 100%;
  }
    .main-img{
        display: flex;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        border-radius: 50%;
        
    }
    .title-text{
        color: rgb(32, 35, 41);
    }
  
    .main__titleHero{
        display: flex;
        width: 50%;
        margin: 0 auto;
        margin-top:30px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap:16px;
      }
      
      .main__titles{
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        padding: 30px 0
        
      }

      .wrapper{
        background-color: rgb(39, 43, 51);
        padding-bottom: 80px;
        height:60vh;
      }
      .main__contentWrapper{
        
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding-top: 5%
        
      }

      .line{
        display: flex;
        width: 100%;
      }

      .contentWrapper__left{
        display: flex;
        width: 100%;
        
        
      }
      
    .contentWrapper__left-column{
      
        display: flex;
        width: 100%;
        flex-direction: column;
        gap:10px;
        
      }
    
    .column-item{

      color: white;
      width: 100%;
      letter-spacing: 0.15px;
      box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.2)
      
    }

    .url focus, .url:hover{
      color: orange;
    }
    .contentWrapper__right-column{
      display: flex;
      flex-direction: column;
      gap:10px;
      width: 100%;
      text-align: left;
      
    }
    
    
    .text-blue{
      color: #6E798C
    }

</style>




<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: this.$route.params.id,
      character: [],
      locationId: [],
    };
  },
  mounted(){
    return axios.get(`https://rickandmortyapi.com/api/character/${this.id}`)
    .then (response => (
      this.character = response.data,
      axios.get(response.data.location.url).then(res => this.locationId = res.data.id)
    ))
    .catch(err => {
      console.log(err)
    })
  }
}
</script>