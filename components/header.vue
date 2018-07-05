<template>

  


  <nav class="navbar my-navbar is-transparent">
      <div class="navbar-brand">
        <div id="menubutton">
            <a class="toggle-button">☰</a>
          </div>
        
        <nuxt-link class="navbar-item my-logo" to="/">
         JustLifeInsurance.ca
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

.my-logo {
  font-family: "Abhaya Libre", serif;
  font-size: 1.3em;
}
</style>

