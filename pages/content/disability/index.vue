<template>
<section class="section">
<div class="container">
<div class="columns">
    <div class="column is-one-third">
     
        <aside class="menu">
 
  
  <ul class="menu-list">
    
    <li>
      <a class="is-active">Disability</a>
      <ul>
        <li><a href="#" v-scroll-to="'#lifeinsurance-one'">What is it?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-two'">Why is this important?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-three'">Things to keep in mind</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-four'">Defining Occupations Classes</a></li>
      </ul>
    </li>
  </ul>
</aside>
       
      
    </div>
    <div class="column is-two-thirds">
       
  
<div id="lifeinsurance-one">
     <h1 class="title">What is it?</h1>
        <p>
            If your ability to work is impacted by injury or illness, Disability Insurance will provide a monthly benefit based on the options your choose or until you have recovered and are able to resume your responsibilities.
        </p>
        <p>
            While under the care of a physician, you have to wait a period of time (*elimination period*) between the incident causing you to stop working and when you start receiving benefits. After satisfying the elimination period, you will receive monthly benefits for as long as the *benefit period* you choose.
        </p>
        <p>
            Some disability contracts will provide partial benefits if you try to return to work but are unable to work full time or if your monthly income is still impacted by the injury or illness.
        </p>
</div>

<div id="lifeinsurance-two">
    <h1 class="title">Why is this important?</h1>
    <p>
        Being injured or ill is difficult on its own - not being able to work and bring in an income while injured or ill can make the situation feel overwhelming. 
    </p>
    <p>
        Having a policy which guarantees you will receive an income each month while you are unable to work gives you peace of mind knowing you and your loved ones will be able to maintain your lifestyle until you recover. 
    </p>
    <p>
        While things like *Workers Compensation*, *Employment Insurance* and *Canadian Pension Plan* can all provide assistance, qualifying for these assistance programs is not guaranteed and the length of time when you can claim benefits varies.
    </p>
</div>
<div id="lifeinsurance-three">
    <h1 class="title">Things to keep in mind</h1>
    <p>
        It is not possible to protect all of your income with Disability Insurance (the maximum is approximately 80%) and the income you declare must be provable via your tax statements or financial statements if you are incorporated.
    </p>
</div>

<div id="lifeinsurance-three">
    <h1 class="title">Defining Occupations Classes</h1>
    <p>
        
    </p>
</div>

       
    </div>
</div>
</div>
    </section>
</template>

<script>
export default {
  transition: "fadeOpacity",
  data: function() {
    return {
      myShowDiv: false
    };
  }
};
</script>

<style scoped>
.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}
.vue-affix {
  width: 250px;
}
</style>
