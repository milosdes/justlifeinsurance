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
        <div class="navbar-end">
          <nuxt-link to="/about" class="navbar-item">
            About
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

    #navigation li {
      display: inline;
      margin: 30px;
    }    


</style>

