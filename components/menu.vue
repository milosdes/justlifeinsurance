<template>
    <aside class="menu my-side-menu">
 
  <ul class="menu-list">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <br>
  </ul>
  <p class="menu-label">
    Insurance Types
  </p>
  <ul class="menu-list">
    <li><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></li>
    <li><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link> </li>
    <li><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></li>
    <li><nuxt-link to="/content/longtermcare">Long Term Care Insurance</nuxt-link></li>
   
  </ul>
  
</aside>
</template>

<style scoped>
.my-side-menu {
  padding: 20px;
}
</style>
