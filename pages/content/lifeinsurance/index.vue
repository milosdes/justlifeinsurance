<template>
<section class="section">
<div class="container">
<div class="columns">
   
   
    <aside class="column menu">
 <affix class="sidebar-menu" relative-element-selector="#my-listed-content" :offset="{ top: 40, bottom: 40 }">
  
  <ul class="menu-list">
    
    <li>
      <a class="is-active">Life Insurance</a>
      <ul>
        <li><a href="#" v-scroll-to="'#lifeinsurance-two'">What is it?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-three'">Why is this important?</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-four'">Things to keep in mind</a></li>
        <li><a href="#" v-scroll-to="'#lifeinsurance-five'">Permanent Life Insurance</a></li>
      </ul>
    </li>
  </ul>
 </affix>
</aside>
      
   
    <div class="column is-two-thirds">
        <div id="my-listed-content">
       <div id="lifeinsurance-one">
       <h1 class="title">Life Insurance</h1>
        <p class="subtitle">
            A tool that can be utilized to provide peace of mind for the ones you care about in the event of your death.
        </p>
        <p>
            A contract is established between you and an Insurance Company which guarantees a specified amount of money will be paid to the beneficiary (or beneficiaries) of your choice if you pass away. There are different ways to structure the policy but the death benefit is normally tax-free and bypasses probate - this means your beneficiaries will receive the funds quickly.
            Your beneficiaries will receive a cheque and be able to use the funds however they feel would best serve them.
        </p>
    </div> 
  
<div id="lifeinsurance-two">
     <h1 class="title">What is it?</h1>
    <p>
        A contract is established between you and an insurance company which guarantees a specified amount of money will be paid to the beneficiary (or beneficiaries) of your choice if you pass away. 

There are different ways to structure the policy but the death benefit is normally tax-free and bypasses *probate* - this means that the funds will be available to your beneficiaries quickly. 

You and your loved ones will have peace of mind knowing that, if you pass away, your beneficiaries will receive a cheque and be able to use the funds however they feel would *best serve them*.
    </p>
</div>

<div id="lifeinsurance-three">
    <h1 class="title">Why is this important?</h1>
    <p class="is-italic">
        If you start your working career at age 25 and planned to work until 65 (40 years) making $25,000 per year, you would have made $1,000,000 in your lifetime.
    </p>
    <p>
This highly simplified example highlights one thing - your ability to generate income is a great asset and, if you were to pass away unexpectedly, your dependents would have to find alternative sources to make up for the loss of your income.
    </p>
    <p>
Purchasing life insurance is one way to ensure the people you care about have some form of protection in case something happens to you.
    </p>
</div>
<div id="lifeinsurance-four">
    <h1 class="title">Things to keep in mind</h1>
    <p>
        Mortgage Insurance vs Life Insurance:
People typically start to think about life insurance when they are about to take on debt. Purchasing a place to live and insuring a mortgage is a common reason for learning more about life insurance.
    </p>
    <p>
        Mortgage insurance is a product that most lenders offer and it means that, if you pass away, the remaining balance on your mortgage is paid off. While this may sound the same, this is very different from Life Insurance. Most importantly, your beneficiaries have no control over what to do with the funds. 
    </p>
</div>
<div id="lifeinsurance-five">
    <h1 class="title">Permanent Life Insurance</h1>
    <p>
        Permanent Life Insurance (also known as Wholelife Insurance or sometimes Universal Life Insurance) is a product that many people are familiar with. Unlike Term Insurance, it ensures that the people you care for will receive something when you pass away, whether that happens when you are 50 years old or 100 years old.
    </p>
    <p>
        This type of policy has a lot of features that make it attractive but it is important to look at this product as <i>Insurance first</i>. It can be a very powerful tool when utilized in estate/succession planning but it should not be looked at as an investment product even though it resembles one.
    </p>
</div>
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
