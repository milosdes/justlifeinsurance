<template>

<div>





<section class="section">
<div class="container ">




      
 
<!--being contentheader-->
 
<div class="contentheader">
  
<div class="columns is-8 is-variable">
    <div class="column ">
        <h1 class="title is-3 headline">
        Life Insurance
      </h1>
       
       
     
    </div>
    <div class="column is-narrow">
       <ul>
    <li><small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/longtermcare">Long Term Care Insurance</nuxt-link></small></li>
</ul>
    </div>
</div>  
 <hr>

</div><!--end contentheader-->


<!--begin main columns-->

<div class="columns is-8 is-variable is-desktop">
     
     <div class="column is-two-thirds-desktop"> 
         
         
<!--begin contentblock what is it-->
         <div class="contentblock">

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
                     <h2 class="subtitle">
            A contract is established between you and an insurance company which guarantees a specified amount of money will be paid to the beneficiary (or beneficiaries) of your choice if you pass away.
            </h2>
            <p>
            The death benefit is typically tax-free and bypasses probate - this means the funds will be available to your beneficiaries quickly.
            </p>
            <p>

            You and your loved ones will have peace of mind knowing that, if you pass away, your beneficiaries will receive a cheque and be able to use the funds however they feel would <em> best serve them.</em>
            </p>
            </div> 
         </div>
            </div>
         </div>
        
<!--end contentblock what is it-->



<!--begin contentblock why is it important-->

<div class="contentblock">

<div class="columns is-8 is-variable reverse">
    
    <div class="column is-one-third">
       
        <div class="contentboxheader my-left">
             <img width="100px" src="~/assets/icons/quotation.svg" />
             <h1 class="title is-1">Why</h1>
             <h2 class="subtitle is-3 ">is it important?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="subtitle">
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
<!--end contentblock why is it important-->



<!--begin contentblock things to keep in mind-->

<div class="contentblock" >

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
            <h2 class="subtitle">
        Mortgage Insurance vs Life Insurance: </h2>
        <h2 class="subtitle">
People typically start to think about life insurance when they are about to take on debt. Purchasing a place to live and insuring a mortgage is a common reason for learning more about life insurance.
    </h2>
    <p>
        Mortgage insurance is a product that most lenders offer and it means that, if you pass away, the remaining balance on your mortgage is paid off. While this may sound the same, this is very different from Life Insurance. Most importantly, your beneficiaries have no control over what to do with the funds. 
    </p>
    </div> 
    </div>
   
   
</div>  
</div>
<!--end contentblock things to keep in mind-->



</div>

<div class="column is-narrow is-one-third-desktop">
    <div class="box my-sidebox">
        <span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
<font-awesome-icon :icon="['fas', 'adjust']"  />
        <h2 class="subtitle">Permanent Life Insurance</h2>
        
<p>
Permanent Life Insurance (also known as Wholelife Insurance or Universal Life Insurance) is a product that often includes features that make it attractive. It has the potential to grow and money put into the policy can often be accessed in the future.
</p>
<p>
First and foremost, these products are meant to protect those left behind in the event of your death. While they can be a powerful tool when utilized in estate/succession planning it is important to look at these policies as insurance products rather than investments.
</p>
<br>
<p>
    Features may include:
</p>
Cash Surrender Value - premiums paid into the policy can be accessed either by surrendering the policy (less recommended because of taxation) or taking a loan on the policy
<p>
    </p>
Limited Pay - payments are paid over a specified period of time after which the policy is considered paid up
<p>
Growth - the death benefit can increase over time based on the Insurer's rate of return.
</p>
    </div>
</div> 

</div> <!--end main columns-->





 
 
</div><!--end main container-->


    </section>

  
    </div>
</template>

<script>
export default {
  transition: "fadeOpacity"
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
