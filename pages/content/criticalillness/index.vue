


<template>

<div>



    
  


<section class="section">
<div class="container">

 
<!--being contentheader-->
 
<div class="contentheader">
  
<div class="columns is-8 is-variable">
    <div class="column ">
        <h1 class="title is-3 headline">
        Critical Illness Insurance
      </h1>
       
       
     
    </div>
    <div class="column is-narrow">
       <ul>
    <li><small><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/longtermcare">Long Term Care Insurance</nuxt-link></small></li>
</ul>
    </div>
</div>  
 <hr>

</div><!--end contentheader-->

    

<div id="my-listed-content">



<!--begin main columns-->

<div class="my-listed-content columns is-8 is-variable">
     
     <div class="column is-three-quarters">     

<!--begin contentblock 1--> 
<div class="contentblock">

<div class="columns is-8 is-variable">
    <div class="column is-narrow is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
             <h1 class="title is-1">What</h1>
             <h2 class="subtitle is-3 ">is it?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="subtitle">
           Provides financial safety so you can focus on recovering should you be diagnosed with one of <em>24 different conditions</em> or receive partial benefits for specified <em>early intervention conditions</em>.
            </h2>
        <p>  
        A contract is established between you and an insurer that will pay you a specified benefit (typically tax-free) should you be diagnosed with a covered condition and satisfy the <em>survival period</em>.
    </p>
    <p>
        Whether you use the funds to pay for treatment, take time off work or spend time with loved ones, critical illness insurance allows you to make a decision based on what is best for you at that time.
    </p>  
    </div> 
    </div>
</div>   
   
</div><!--end contentblock 1--> 


<!--begin contentblock 2--> 
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
        Advances in modern medicine has allowed people to survive conditions that were fatal in the past. Unfortunately, recovering to the point of resuming daily life still takes time.
   
       </h2>
 
      
    <p>
        Financial obligations don't pause during this process and patients are often forced to dip into their savings to make ends meet.
    </p>
    <p>
        This means that, after recovering, you may have to work longer than you previously expected to make up for the interruption in your financial plan.
    </p>
    </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 2--> 





<!--begin contentblock 3--> 
<div class="contentblock">

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
         Critical Illness contracts have very strict definitions in terms of what's covered and what needs to be satisfied to receive the benefit.
    
         </h2>
     
       
    <p>
        The strict definitions mean that, if you satisfy the terms of the contract, the benefit is guaranteed to be paid out. However, it is possible that you are diagnosed with something that is not covered in the contract and thus would not receive a benefit.  
    </p>
    <p>
        <i>If you have questions about covered conditions, make sure to ask to see a sample contract</i>.
    </p>
    </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 3--> 



</div>




<div class="column is-narrow is-one-quarter">
    <div class="box my-sidebox">
        <h2 class="subtitle">Things to keep in mind</h2>
        
<p>
Critical Illness contracts have very strict definitions in terms of what's covered and what needs to be satisfied to receive the benefit.
</p>
<p>
The strict definitions mean that, if you satisfy the terms of the contract, the benefit is guaranteed to be paid out. However, it is possible that you are diagnosed with something that is not covered in the contract and thus would not receive a benefit. <em>If you have questions about covered conditions, make sure to ask to see a sample contract</em>.

</p>

    </div>
</div> 

</div>
</div> <!--end main columns-->

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




