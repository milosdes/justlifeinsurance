<template>
  <div >

         <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-beforeopen="beforeopen" @on-open="open" @on-beforeclose="beforeclose">
      <nav id="menu">
        <Menu />
      </nav>
      <main id="panel" class="panel">
        <header>
          <div id="menubutton">
            <a class="toggle-button">☰</a>
          </div>
        </header>
         <nuxt />
            <Footer />
      </main>
    </Slideout>


  </div>
</template>

<script>
import Menu from "~/components/menu.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Menu,
    Footer
  },

  methods: {
    close: function() {
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

.headline {
  font-family: "Lato", sans-serif;
}

.textpage {
  padding-left: 3%;
  padding-right: 3%;
}

.contentblock {
  margin-top: 2em;
  margin-bottom: 3em;
}

.contentblock h1,
h2 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.contentblock p {
  margin-bottom: 0.6em;
  font-size: 1.1em;
}

.contentboxheader {
  margin-bottom: 15px;
  margin-top: 15px;
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

@media screen and (min-width: 767px) {
  /* .contentblock {
    padding: 50px;
  }
  .contenttext {
  padding: 20px;
} */
  .textpage {
    padding-left: 12%;
    padding-right: 12%;
  }
}

.my-right {
  text-align: right;
}

.my-left {
  text-align: left;
}

@media screen and (max-width: 768px) {
  .contentboxheader {
    text-align: center;
  }
}

/* menu */

#menubutton {
  padding: 0.5em;
  font-size: 3em;
  color: #fff;
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
  background-image: url("../assets/images/background.png");

  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0.9;
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
</style>
