<template>
  <div>
 

<section class="hero ">
  

  <div class="hero-body my-hero">
   
    <div class="container">
      

      <div class="columns">
        <div class="column">
          <br>
          <h1 class="title has-text-weight-bold is-1 has-text-white deepshadow">
            $#!% Happens In Life
          </h1>
             <h2 class="subtitle is-4 has-text-white">
            Helping you make informed decisions about life insurance.
          </h2>
          
          <div> Click here to...</div>
          <nuxt-link to="/assessment" class="button is-medium is-primary is-inverted"><span class="icon"><i class="fa fa-bar-chart is-lg" aria-hidden="true"></i></span><span>take an assessment</span></nuxt-link>
        </div>
        <div class="column is-narrow">
          
        
        <div id="my-hero-social">
       <social-sharing url="https://www.justlifeinsurance.ca/"
                      title="Just Life Insurance"
                      description="Helping you make informed decisions about life insurance."
                      quote="Helping you make informed decisions about life insurance."
                      hashtags="Life Insurance,Insurance"
                      inline-template>
  <div class="my-social-bar ">
      <a href="#"><network network="facebook">
        <i class="fa fa-facebook fa-lg"></i>
      </network></a>
      <a href="#"><network network="linkedin">
        <i class="fa fa-linkedin fa-lg"></i>
      </network></a>
      <a href="#"><network network="twitter">
        <i class="fa fa-twitter fa-lg"></i>
      </network></a>
      <a href="#"><network network="whatsapp">
        <i class="fa fa-whatsapp fa-lg"></i>
      </network></a>
  </div>
</social-sharing>
</div>
        </div>
       
         
      </div>
      
    </div>
  </div>
</section>



  <section class="my-section">
    <div class="container textpage">
      

    <div class="columns is-variable is-6">
      <div class="column">
          <nuxt-link to="/content/lifeinsurance">
          <div class="catbox fold">
            
            <h1 class="title is-size-3">Life Insurance</h1> 
            <p>
              Make sure finances won't be a concern for your loved ones in the event of your death.
            </p>                
          </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/criticalillness">
        <div class="catbox fold">  
          <h1 class="title is-size-3 ">Critical Illness Insurance</h1> 
          <p>
            Focus on recovering or spending your time on the important things if you are diagnosed with a critical illness.
          </p>            
        </div>
        </nuxt-link>
      </div>
    </div>
    <div class="columns is-variable is-6">
      <div class="column">
        <nuxt-link to="/content/disability">
        <div class="catbox fold">         
          <h1 class="title">Disability Insurance</h1> 
          <p>
            Supplements or replaces your income if your ability to work is impacted.
          </p>            
        </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/longtermcare">
        <div class="catbox fold">
          <h1 class="title">Long Term Care Insurance</h1> 
            <p>
              Makes it easier to ask for help if you can no longer live independently.
            </p>                 
        </div>
        </nuxt-link>
      </div>
    </div>
  </div>

  </section>

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  transition: "fadeOpacity",
  components: {
    Logo
  }
};
</script>

<style scoped>

.deepshadow {
    color: #e0dfdc;
    letter-spacing: -0.03em;
    text-shadow:
     
      3px 3px 0px rgba(0, 110, 74, 0.4);
  }

#my-hero-social {
  text-align: right;
  position: relative;
  top: 0;
}

/* .my-hero {
  position: relative;
} */


.my-hero {
  content: "";
  display: block;
  background: #09ff00;
  background: linear-gradient(
    180deg,
    #f2fff500 0%,
    rgba(20, 172, 114, 0.425) 30%,
    rgba(20, 172, 114, 0.452) 50%,
    rgba(20, 177, 138, 0) 100%
  );
  
}

.my-hero::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  
  background-position-y: bottom;
  background-position-x: 60%;
  height: 100%;
  width: 100%;
  z-index: -1;
}



.my-section {
 /*  background-color: white; */
  padding: 2em;
}

.catbox {
  height: 100%;
  padding: 20px;
  background-color: #ffffffe0;
  
}

.columns {
  flex-wrap: wrap;
  align-items: stretch;
}
.catbox:hover {
  background-color: #fafafa;
  box-shadow:  0px 10px #cfcfcf;
}

.fold {
  padding: 25px 25px;
  position: relative;
  text-decoration: none;
  color: #999;
  background: #fafafa;
  transition: all ease 0.5s;
}

/*
  paper fold corner
*/

.fold:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-style: solid;
  border-width: 0 25px 25px 0;
  border-color: #dddddd #ffffff;
  transition: all ease 0.5s;
}

/*
  on li hover make paper fold larger
*/
.fold:hover:before {
  border-width: 0 50px 50px 0;
  border-color: #eee #ffffff;
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
