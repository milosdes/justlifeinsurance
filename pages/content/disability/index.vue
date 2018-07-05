

<template>

<div>



    
  


<section class="section">
<div class="container">



<!--being contentheader-->
 
<div class="contentheader">
  
<div class="columns is-8 is-variable">
    <div class="column ">
        <h1 class="title is-3 headline">
        Disability Insurance
      </h1>
       
       
     
    </div>
    <div class="column is-narrow">
       <ul>
           <li><small><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small></li>
    
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
            If your ability to work is impacted by injury or illness, Disability Insurance will provide a monthly benefit based on the options your choose or until you have recovered and are able to resume your responsibilities.
       
            </h2>
           
           
        <p>
           While under the care of a physician, you have to wait a period of time (elimination period) between the incident causing you to stop working and when you start receiving benefits. After satisfying the elimination period, you will receive monthly benefits for as long as the benefit period you choose.
        </p>
        <p>
            Some disability contracts will provide partial benefits if you try to return to work but are unable to work full time or if your monthly income is still impacted by the injury or illness.
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
       Being injured or ill is difficult on its own - not being able to work and bring in an income while injured or ill can make the situation feel overwhelming.
       </h2>
  
       
    <p>
        Having a policy which guarantees you will receive an income each month while you are unable to work gives you peace of mind knowing that you and your loved ones will be able to maintain your lifestyle until you recover.
    </p>
    <p>
        While things like <em>Workers Compensation</em>, <em>Employment Insurance</em> and <em>Canadian Pension Plan</em> can all provide assistance, qualifying for these assistance programs is not guaranteed and the length of time you can receive benefits varies.
    </p>
    </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 2-->  





<!--begin contentblock 3-->  
<div class="contentblock" id="lifeinsurance-three">

<div class="columns is-8 is-variable">
    
    <div class="column is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
            <h2 class="subtitle is-3 ">Things to</h2>
             <h1 class="title is-1 has-text-weight-light">keep in <br> mind!</h1>
             
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="subtitle is-size-4">
                It is not possible to protect all of your income with Disability Insurance (the maximum is approximately 80%) and the income you declare must be provable via your tax statements or financial statements if you are incorporated.
       </h2>
    
    </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 3-->  


</div>

<div class="column is-narrow is-one-quarter">
    <div class="box my-sidebox">
        <h2 class="subtitle">Maximum Coverage</h2>
        
<p>
Protecting all of your income with disability insurance is not possible (generally 80% of your income is the most that can be insured). The sources of your income must be provided via tax receipts or financial statements in order to be insured.
</p>
<br>
<h2 class="subtitle">Occupation Classes</h2>
<p>
Insurance companies typically classify each type of occupation with a ranking from 1 to 4 based on the type of work activities normally undertaken. Occupations with a higher chance of injury (based on previous claim experience) are given a lower rank and subsequently charged more for coverage.
</p>

    </div>
</div> 

</div> <!--end main columns-->


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


