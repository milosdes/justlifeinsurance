<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300|Hind+Guntur|Lato:300|Muli:400|Palanquin|Source+Sans+Pro:400|Tajawal');
@import url('https://fonts.googleapis.com/css?family=Nunito:300|Roboto:300');
 body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

h1, h2  {
  margin-top: 40px;
  font-family: 'Nunito', sans-serif;
} 
</style>
