<template>
  <div>

         <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-beforeopen="beforeopen" @on-open="open" @on-beforeclose="beforeclose">
      <nav id="menu">
        <Menu />
      </nav>
      <main id="panel" class="panel">
        <Header />
        <!-- <header>
          <div id="menubutton">
            <a class="toggle-button">☰</a>
          </div>
        </header> -->
         <nuxt />
            <Footer />
      </main>
    </Slideout>


  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Menu from "~/components/menu.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Header,
    Menu,
    Footer
  },

  methods: {
    close: function(eve) {
      eve.preventDefault();
      this.$children[0].slideout.close();
    },
    beforeopen: function() {
      this.$children[0].slideout.panel.classList.add("panel-open");
    },
    open: function() {
      console.log("slideoutOpen");
      this.$children[0].slideout.panel.addEventListener("click", this.close);
      this.$children[0].slideout.menu.addEventListener("click", this.close);
    },
    beforeclose: function() {
      this.$children[0].slideout.panel.classList.remove("panel-open");
      this.$children[0].slideout.panel.removeEventListener("click", this.close);
      this.$children[0].slideout.menu.removeEventListener("click", this.close);
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Alegreya+Sans:300|Hind+Guntur|Lato:300,400,400i,700|Muli:400|Palanquin|Source+Sans+Pro:400|Tajawal");
@import url("https://fonts.googleapis.com/css?family=Nunito:300|Roboto:300");
@import url("https://fonts.googleapis.com/css?family=Tajawal:300,400");
@import url("https://fonts.googleapis.com/css?family=Abhaya+Libre");

@import url("https://fonts.googleapis.com/css?family=Lora");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");

body {
  /* font-family: 'Open Sans', sans-serif; 
  font-family: 'Lato', sans-serif; 
  */
  font-family: "Lato", sans-serif;
  font-size: 17px;
}

h1 {
  margin-top: 10px;
  margin-right: 20px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  /* 
  font-family: 'Lora', serif;
  font-family: 'Abhaya Libre', serif; 
  */
}

/* .contentheader {
  margin-bottom: 5em;
  background: rgb(184, 255, 200);
  background: linear-gradient(
    132deg,
    rgb(242, 255, 245) 0%,
    rgb(188, 255, 197) 46%,
    rgba(207, 241, 255, 0.479) 100%
  );
  overflow: visible;
  padding-left: 50em;
  margin-left: -50em;
  padding-right: 50em;
  margin-right: -50em;
  padding-top: 50em;
  margin-top: -50em;
} */

.contentblock {
  margin-top: 1em;
  margin-bottom: 1em;
}

.contentblock h1,
h2 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.contentblock p {
  margin-bottom: 0.6em;
}

.contentboxheader {
  margin-bottom: 15px;
  margin-top: 10px;
}

.contentboxheader .title {
  word-break: keep-all;
  line-height: 1em;
}

.contentboxheader .subtitle {
  word-break: keep-all;
  line-height: 0.8em;
}

/* .contentboxheader {
text-align: center;
  width: 200px;
	height: 200px;
	background: #fffdf4c4;
	-moz-border-radius: 100px;
	-webkit-border-radius: 100px;
  border-radius: 100px;
  margin: auto;
} */

.contenttext {
  padding-top: 2.2em;
}

.gradientbg {
  background: rgb(184, 255, 200);
  background: linear-gradient(
    132deg,
    rgba(242, 255, 245, 0.219) 0%,
    rgba(235, 255, 250, 0.336) 46%,
    rgba(207, 241, 255, 0.26) 100%
  );
}

@media screen and (min-width: 767px) {
  .contentblock {
    padding: 50px;
  }
  .contenttext {
    padding: 0px;
  }

  .textpage {
    padding-left: 50px;
    padding-right: 50px;
  }
}

.my-right {
  text-align: right;
}

.my-left {
  text-align: left;
}

.my-sidebox {
  margin-top: 7em;
  margin-left: 1em;
  margin-right: 1em;
 font-size: 0.9em;
/*   background-image: url("../assets/images/background2.png");
  background-repeat: no-repeat;
  background-position-y: -100px; */
}

.my-sidebox p {
  margin-top: 0.6em;
 
}

@media screen and (max-width: 768px) {
  .contentboxheader {
    text-align: center;
  }
}

/* menu */

#menubutton {
  font-size: 3em;
  color: #fff;
  opacity: 0.6;
}

/* slideout */

body {
  width: 100%;
  height: 100%;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: transform;
  background-color: #fff; /* A background-color is required */
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

#panel {
  position: relative;
}

#panel::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
/* 
  background-image: url("../assets/images/background2.png");
  background-repeat: no-repeat;
 */
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
}

.panel:before {
  content: "";
  display: block;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.5s ease-in-out;
}

.panel-open:before {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}




.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}

</style>
