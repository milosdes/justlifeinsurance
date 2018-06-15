<template>

<div>



    
  


<section class="section">
<div class="container">


      <h1 class="title is-1 has-text-weight-light">
        Life Insurance
      </h1>
      <hr>
  <br>
        <div id="my-listed-content">
      
  
<div class="contentblock" id="lifeinsurance-one">

<div class="columns">
    <div class="column is-one-third has-text-right">
        <img width="100px" src="~/assets/icons/quotation.svg" />
        <div class="contentboxheader">
             <h1 class="title is-1 has-text-weight-light">What</h1>
             <h2 class="subtitle is-3 ">is it?</h2>
        </div>
       
    </div>
    <div class="column is-half">
        <div class="contenttext">
            <p class=" has-text-weight-bold">
            A contract is established between you and an insurance company which guarantees a specified amount of money will be paid to the beneficiary (or beneficiaries) of your choice if you pass away. 
            </p>
            <p>
            There are different ways to structure the policy but the death benefit is normally tax-free and bypasses *probate* - this means that the funds will be available to your beneficiaries quickly. 

            You and your loved ones will have peace of mind knowing that, if you pass away, your beneficiaries will receive a cheque and be able to use the funds however they feel would *best serve them*.
            </p>
    </div> 
    </div>
</div>   
   
</div>


<div class="contentblock" id="lifeinsurance-two">

<div class="columns">
    
   
    <div class="column is-half is-offset-2">
        <div class="contenttext">
            <p class="has-text-weight-bold">
        If you start your working career at age 25 and planned to work until 65 (40 years) making $25,000 per year, you would have made $1,000,000 in your lifetime.
    </p>
    <p>
This highly simplified example highlights one thing - your ability to generate income is a great asset and, if you were to pass away unexpectedly, your dependents would have to find alternative sources to make up for the loss of your income.
    </p>
    <p>
Purchasing life insurance is one way to ensure the people you care about have some form of protection in case something happens to you.
    </p>
    </div> 
    </div>
    <div class="column is-one-third has-text-centered">
        <img width="100px" src="~/assets/icons/quotation.svg" />
        <div class="contentboxheader">
             <h1 class="title is-1 has-text-weight-light">Why</h1>
             <h2 class="subtitle is-3 ">is this important?</h2>
        </div>
       
    </div>
</div>  

</div>

<div id="lifeinsurance-three">
    <h1 class="title">Why is this important?</h1>
    
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


    </section>

  
    </div>
</template>

<script>

export default {



  transition: "fadeOpacity",
  data: function() {
    return {
      isShow: false,
    };
  },
  methods: {
      toggle() {
          this.isShow = !this.isShow;
      },
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



</style>
