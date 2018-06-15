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
@import url('https://fonts.googleapis.com/css?family=Tajawal:300,400');
@import url('https://fonts.googleapis.com/css?family=Abhaya+Libre');


body {
  font-family: 'Lato', sans-serif;
  font-size: 17px;
}



h1, h2  {
  margin-top: 10px;
  margin-right: 20px;
  font-weight: 200;
  font-family: 'Abhaya Libre', serif;
} 



.hero h1 {
 
  font-weight: 100;
  font-size: 600px;
}

.contentblock {
  margin: 12px;
}

.contentblock h1, h2 {
  margin-top:0px;
  margin-bottom: 0px;
}

.contentblock p {
  margin-bottom: 0.6em;
}

.contentboxheader {
  
}

.contentboxheader {
text-align: center;
  width: 200px;
	height: 200px;
	background: #fffdf4c4;
	-moz-border-radius: 100px;
	-webkit-border-radius: 100px;
  border-radius: 100px;
  margin: auto;
}


.contenttext {
  padding: 20px;
}
</style>
