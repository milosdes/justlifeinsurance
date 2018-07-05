<template>
  <div class="container">
  



  <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
         
        </a>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div @click="showNav = false" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-beginning">
          <nuxt-link to="/" class="navbar-item">
            Home
          </nuxt-link>
        </div>
        <div class="navbar-end">
          <br>
          <nuxt-link to="/content/lifeinsurance" class="navbar-item">
            Life Insurance
          </nuxt-link>
          <nuxt-link to="/content/criticalillness" class="navbar-item">
            Critical Illness Insurance
          </nuxt-link>
          <nuxt-link to="/content/disability" class="navbar-item">
            Disability Insurance
          </nuxt-link>
          <nuxt-link to="/content/longtermcare" class="navbar-item">
            Long Term Care Insurance
          </nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">
            Contact
          </nuxt-link>
        </div>
      </div>
    </nav>

  </div>

</template>

<script>

export default {
  data: function() {
    return {
      showNav: false
    }
  }
}
</script>


<style scoped>
    .header {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: center;
    } 

    .navbar {
      
    }

    #navigation li {
      display: inline;
      margin: 30px;
    }    







</style>

