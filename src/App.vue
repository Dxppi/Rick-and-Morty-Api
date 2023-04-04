<template>

  <header class="header">  
      <div class="container">
        <div class="container__logo">
          <router-link to="/"><img src="./assets/logo-black 1.svg" alt="logo"></router-link>
        </div>
        <div class="container__menu">
          
          <ul>   
              <li class="container__menu-item"><router-link to="/">Characters</router-link></li>
              <li class="container__menu-item"><router-link to="/locations">Locations</router-link></li>
              <li class="container__menu-item"><router-link to="/episodes">Episodes</router-link></li>
          </ul>
          
        </div>
      </div>
  </header>
    
  
  
    <router-view></router-view>
  </template>
  
  
  
  