<template>
  <div>
 
<section class="hero is-bold">
  <div class="hero-body my-hero">
    <div class="container textpage">
      <h1 class="title has-text-weight-bold is-1">
        $#!% <br> Happens <br> In Life
      </h1>
      <h2 class="subtitle is-4">
        Learn more so you can make an informed decision about life insurance.
      </h2>
        <nuxt-link to="/assessment" class="button is-rounded float is-pulled-right">Click here for an assessment</nuxt-link>
    </div>
  </div>
</section>



  <section class="section">
    <div class="container textpage">

    <div class="columns is-variable is-6">
      <div class="column">
          <nuxt-link to="/content/lifeinsurance">
          <div class="catbox fold">
            
            <h1 class="title is-size-3">Life Insurance</h1> 
            <p>
              Providing financial security to the ones you leave behind in the event of your death.
            </p>                
          </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/criticalillness">
        <div class="catbox fold">  
          <h1 class="title is-size-3 ">Critical Illness Insurance</h1> 
          <p>
            Allowing you to focus on recovering if you are diagnosed with one of twenty four covered conditions (cancer, heart attack and stroke being the most common).
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
            Supplements or replaces your monthly income if you are unable to work.
          </p>            
        </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/longtermcare">
        <div class="catbox fold">
          <h1 class="title">Long Term Care Insurance</h1> 
            <p>
              Allows you to get help if you aren't able to live independently.
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
  components: {
    Logo
  },

  data: function() {
    return {
      test: "my-test"
    };
  }
};
</script>

<style>
.my-hero {
  background-image: url("");
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
  box-shadow: 5px 10px #cfcfcf;
}

.fold {
  padding: 25px 25px;
  position: relative;
  font-size: 90%;
  text-decoration: none;
  color: #999;
  background: #ffffff;
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
  border-color: #dddddd #ffffff00;
  transition: all ease 0.5s;
}

/*
  on li hover make paper fold larger
*/
.fold:hover:before {
  border-width: 0 50px 50px 0;
  border-color: #eee #ffffff;
}
</style>
