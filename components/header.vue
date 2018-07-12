<template>

  


  <nav class="navbar my-navbar is-transparent">
      <div class="navbar-brand">
        <div id="menubutton">
            <a class="toggle-button">
               <span class="icon is-large">
  <i class="fa fa-bars "></i>
</span>
            </a>
          </div>
        
        <nuxt-link class="navbar-item my-logo" to="/">
        
          <img src="../assets/images/logo.png" alt="justlifeinsurance.ca" width="250"  >
        </nuxt-link>
      </div>
      <div class="navbar-menu">
     
        <div class="navbar-end">
          <br>
          <nuxt-link to="/about" class="navbar-item">
            About
          </nuxt-link>
          <nuxt-link to="/privacy" class="navbar-item">
            Privacy
          </nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">
            Contact
          </nuxt-link>
        </div>
      </div>
    </nav>

  


</template>




<style scoped>
.my-navbar {
  padding-left: 1em;
  padding-right: 1em;
}

.my-logo img {
  max-height: 5rem;
  margin-left: 1.5em;
}

</style>

