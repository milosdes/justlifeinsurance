<template>

<div>





<section class="section">
<div class="container textpage">




      
 

 
<div class="contentblock" id="lifeinsurance-one">
  
      

<div class="columns is-8 is-variable">
    <div class="column is-narrow">
        <h1 class="title is-2 has-text-weight-light headline">
        Life Insurance
      </h1>
        <hr>
       
     
    </div>
    <div class="column">
       <ul class="is-pulled-right">
    <li><small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/longtermcare">Long Term Care Insurance</nuxt-link></small></li>
</ul>
    </div>
</div>   
</div>



<div id="my-listed-content">
      
  
<div class="contentblock" id="lifeinsurance-one">

<div class="columns is-8 is-variable">
    <div class="column is-narrow is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
             <h1 class="title is-1">What</h1>
             <h2 class="subtitle is-3">is it?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="is-size-4 subtitle">
            A contract is established between you and an insurance company which guarantees a specified amount of money will be paid to the beneficiary (or beneficiaries) of your choice if you pass away. 
            </h2>
            <p>
            There are different ways to structure the policy but the death benefit is normally tax-free and bypasses *probate* - this means that the funds will be available to your beneficiaries quickly. 

            You and your loved ones will have peace of mind knowing that, if you pass away, your beneficiaries will receive a cheque and be able to use the funds however they feel would *best serve them*.
            </p>
    </div> 
    </div>
</div>   
   
</div>


<div class="contentblock" id="lifeinsurance-two">

<div class="columns is-8 is-variable reverse">
    
    <div class="column is-one-third">
       
        <div class="contentboxheader my-left">
             <img width="100px" src="~/assets/icons/quotation.svg" />
             <h1 class="title is-1">Why</h1>
             <h2 class="subtitle is-3 ">is this important?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="is-size-4 subtitle">
        If you start your working career at age 25 and planned to work until 65 (40 years) making $25,000 per year, you would have made $1,000,000 in your lifetime.
    </h2>
    <p>
This highly simplified example highlights one thing - your ability to generate income is a great asset and, if you were to pass away unexpectedly, your dependents would have to find alternative sources to make up for the loss of your income.
    </p>
    <p>
Purchasing life insurance is one way to ensure the people you care about have some form of protection in case something happens to you.
    </p>
    </div> 
    </div>
   
</div>  

</div>







<div class="contentblock" id="lifeinsurance-three">

<div class="columns is-8 is-variable">
    
    <div class="column is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
            <h2 class="subtitle is-3 ">Things to</h2>
             <h1 class="title is-1">keep in <br> mind!</h1>
             
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="subtitle is-size-4">
        Mortgage Insurance vs Life Insurance:
People typically start to think about life insurance when they are about to take on debt. Purchasing a place to live and insuring a mortgage is a common reason for learning more about life insurance.
    </h2>
    <p>
        Mortgage insurance is a product that most lenders offer and it means that, if you pass away, the remaining balance on your mortgage is paid off. While this may sound the same, this is very different from Life Insurance. Most importantly, your beneficiaries have no control over what to do with the funds. 
    </p>
    </div> 
    </div>
   
</div>  

</div>




<br>


<div class="contentblock" id="lifeinsurance-four">
    <div class="contentboxheader">
        <h1 class="title is-size-1">Permanent Life Insurance</h1>
   
    </div>
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
      isShow: false
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
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

.reverse {
  flex-direction: row-reverse;
}
</style>
