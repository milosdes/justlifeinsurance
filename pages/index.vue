<template>
  <div>
 
<section class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1">
        $#!% happens in life
      </h1>
      <h2 class="subtitle is-4">
        Learn more so you can make an informed decision about life insurance.
      </h2>
        <nuxt-link to="/questionnaire" class="button is-rounded float is-pulled-right">Click here for an assessment</nuxt-link>
    </div>
  </div>
</section>



  <section class="section">
    <div class="container">

    <div class="columns">
      <div class="column">
          <nuxt-link to="/content/lifeinsurance">
          <div class="catbox">
            <i class="fa-check-square-o"></i>
            <h2 class="title is-size-3">Life Insurance</h2> 
            <p>
              Providing financial security to the ones you leave behind in the event of your death.
            </p>                
          </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/criticalillness">
        <div class="catbox">  
          <h2 class="title is-size-3">Critical Illness Insurance</h2> 
          <p>
            Allowing you to focus on recovering if you are diagnosed with one of twenty four covered conditions (cancer, heart attack and stroke being the most common).
          </p>            
        </div>
        </nuxt-link>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <nuxt-link to="/content/disability">
        <div class="catbox">         
          <h2 class="title">Disability Insurance</h2> 
          <p>
            Supplements or replaces your monthly income if you are unable to work.
          </p>            
        </div>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/content/longtermcare">
        <div class="catbox">
          <h2 class="title">Long Term Care Insurance</h2> 
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
.catbox {
  height: 100%;
  padding: 20px;
  background-color: #eeeeee33;
}

.columns {
    flex-wrap: wrap;
    align-items: stretch;
}
.catbox:hover {
  background-color: #c5c5c517;
}
</style>
