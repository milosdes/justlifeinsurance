<template>
<section class="section">
<div class="container">
<div class="columns">
    <div class="column is-one-third">
       
        <aside class="menu">
 
  
  <ul class="menu-list">
    
    <li>
      <a class="is-active">Critical Illness</a>
      <ul>
        <li><a href="#" v-scroll-to="'#lifeinsurance-one'">What is it?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-two'">Why is this important?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-three'">Things to keep in mind</a></li>
      </ul>
    </li>
  </ul>
</aside>
      
      
    </div>
    <div class="column is-two-thirds">
       
  
<div id="lifeinsurance-one">
     <h1 class="title">What is it?</h1>
    <p>Provides financial safety so you can focus on recovering should you be diagnosed with one of <i>24 different conditions</i> or receive partial benefits for specified early <i>intervention conditions</i>.</p>
    <p>
        A contract is established between you and an insurer that will pay you a specified benefit (typically tax-free) should you be diagnosed with a covered condition and satisfy the <i>survival period</i>.
    </p>
    <p>
        Whether you use the funds to pay for treatment, take time off work or spend time with loved ones, critical illness insurance allows you to make a decision based on what is best for you at that time.
    </p>
</div>

<div id="lifeinsurance-two">
    <h1 class="title">Why is this important?</h1>
    <p>
        Advances in modern medicine has allowed people to survive conditions that were fatal in the past. Unfortunately, recovering to the point of resuming daily life still takes time.
    </p>
    <p>
        Financial obligations don't pause during this process and patients are often forced to dip into their savings to make ends meet.
    </p>
    <p>
        This means that, after recovering, you may have to work longer than you previously expected to make up for the interruption in your financial plan.
    </p>
</div>
<div id="lifeinsurance-three">
    <h1 class="title">Things to keep in mind</h1>
    <p>
        Critical Illness contracts have very strict definitions in terms of what's covered and what needs to be satisfied to receive the benefit.
    </p>
    <p>
        The strict definitions mean that, if you satisfy the terms of the contract, the benefit is guaranteed to be paid out. However, it is possible that you are diagnosed with something that is not covered in the contract and thus would not receive a benefit. *If you have questions about covered conditions, make sure to ask to see a sample contract*.
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
