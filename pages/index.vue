<template>
  <div>
 

<section class="hero ">
  

  <div class="hero-body my-hero">
   
    <div class="container">
      
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

      <div class="columns">

        <div class="column">
          <br>
          <h1 class="title has-text-weight-bold is-1 has-text-white deepshadow">
            Sometimes $#!+ happens
          </h1>
             <h2 class="subtitle is-4 has-text-white">
            Find out what can help and make informed decisions about life insurance.
          </h2>
        </div>

        <div class="column is-narrow is-one-third">
          <div id="assessmentbox" class="handwritten has-text-primary is-pulled-right">
            Not sure where to start?
            <br>
            We’ll help find the most relevant topics for you.
            <br>
            Click here to...
              <br> <br>
              <div id="assessmentbuttoncontainer">
                  <nuxt-link to="/assessment" class="button is-medium is-primary is-large assessmentbutton"><span class="icon"><i class="fa fa-bar-chart is-lg" aria-hidden="true"></i></span><span>take an assessment</span></nuxt-link>
              </div>     
          </div> 
        </div>
       
      </div>
      
      
    </div>
    
  </div>
</section>



<section class="my-section">
    <div class="container textpage">

   <div class="columns is-variable is-desktop">
     <div class="column is-one-quarter-desktop">
        <div id="didyouknow" class="handwritten">
         <h2 class="subtitle">Did you know life insurance actually refers to 4 distinct types of protection?</h2> 
        </div> 
     </div>
     <div class="column">

       

     


    <div class="columns is-variable is-6 my-contentrow">

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
    
    <div class="columns is-variable is-6 my-contentrow">
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
     </div>
   </div>

</section>

  </div>
</template>

<script>

export default {
  transition: "fadeOpacity"
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

#assessmentbox {
  width: 250px;
  height: 250px;
  background-color: white;
  box-shadow: 5px 5px 150px rgba(128, 128, 128, 0.479);
  font-size: 1.2em;
  border-radius: 9999px;
  padding: 2em;
  padding-top: 3em;

  margin-top: 1em;
  margin-left: 2em;
      -ms-transform: rotate(5deg); /* IE 9 */
    -webkit-transform: rotate(5deg); /* Safari */
    transform: rotate(5deg); /* Standard syntax */
}

#assessmentbuttoncontainer {
  margin-left: -6em;
       -ms-transform: rotate(-3deg); /* IE 9 */
    -webkit-transform: rotate(-3deg); /* Safari */
    transform: rotate(-3deg); /* Standard syntax */
}

.assessmentbutton {
  box-shadow: 5px 5px 15px grey;
}

#didyouknow h2 {
   color:  black;
}

#didyouknow {
  /* box-shadow: 15px 15px 35px rgba(128, 128, 128, 0.349); */
  /* background: #ffd000; */
  
  border-left: 20px solid #18d17b;
  border-right: 20px solid #18d165;
  
  border-radius: 295px 280px 275px 232px/360px 485px 194px 215px;
  max-width: 350px;
  margin-top: -6em;
  margin-left: -2em;
  margin-right: -2em;
  margin-bottom: -1.7em;
  position: relative;
  z-index: 1;
  padding: 1.5em;
 
  -ms-transform: rotate(-3deg); /* IE 9 */
  -webkit-transform: rotate(-3deg); /* Safari */
  transform: rotate(-3deg); /* Standard syntax */
}

.my-hero {
  content: "";
  display: block;
  background: #00ff6a8e;
  background: linear-gradient(
    180deg,
    #f2fff500 0%,
    rgba(20, 172, 86, 0.356) 20%,
    rgba(20, 172, 86, 0.37) 50%,
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

.my-contentrow {
  margin-bottom: 2em;
}

.catbox {
  border-left: 5px solid #05b96800;
  height: 100%;
  padding: 25px;
  background-color: #ffffffe0;
  box-shadow: 5px 10px 30px rgba(128, 128, 128, 0.5);
  transition: all ease 0.5s;
}

.catbox h1 {
  margin-top: 1.5em;
  transition: all ease 0.5s;
}

.columns {
  flex-wrap: wrap;
  align-items: stretch;
}
.catbox:hover {
  transform: translate(0,-0.5em);
  /* transform: scale(1.1,1.1); */
  /* border-left: 5px solid #05b968; */
  background-color: #fafafa;
  box-shadow: 5px 10px 30px rgb(128, 128, 128);
  transition: all ease 0.5s;
}

.catbox:hover ::before {
  box-shadow: 5px 15px 30px rgb(128, 128, 128);
  transition: all ease 0.5s;
  
}

.catbox:hover h1 {
  transform: translateX(0.5em);
  transition: all ease 0.5s;
}

/* .fold {
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

/* .fold:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-style: solid;
  border-width: 25px 25px 25px 25px;
  border-color: #dddddd #ffffff;
  transition: all ease 0.5s;
} */

/*
  on li hover make paper fold larger
*/
/* .fold:hover:before {
  border-width: 50px 50px 50px 50px;
  border-color: #eee #ffffff;
} */ */

.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}
</style>
