<template>

    <aside class="menu my-side-menu">
 
  <ul class="menu-list">
     
    <li><nuxt-link to="/"> <span class="icon is-large">
  <i class="fa fa-home fa-2x"></i>
</span>Home</nuxt-link></li>
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
  <br>
  <p class="menu-label">
    Additional Information
  </p>
  <ul class="menu-list">
    <li><nuxt-link to="/content/thingstoknow">Things to know</nuxt-link></li>
    <li><nuxt-link to="/assessment">Take an assessment</nuxt-link> </li>
  </ul>

  <br>
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><nuxt-link to="/about">About us</nuxt-link></li>
    <li><nuxt-link to="/privacy">Privacy</nuxt-link> </li>
    <li><nuxt-link to="/termsofuse">Terms of use</nuxt-link></li>
    <li><nuxt-link to="/contact">Contact</nuxt-link> </li>
 
  </ul>
  
</aside>

</template>

<style scoped>
.my-side-menu {
  padding: 20px;
}
</style>
