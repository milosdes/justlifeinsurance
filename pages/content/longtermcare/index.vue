
<template>

<div>



    
  


<section class="section">
<div class="container">




<!--being contentheader-->
 
<div class="contentheader">
  
<div class="columns is-8 is-variable">
    <div class="column ">
        <h1 class="title is-3 headline">
        Long Term Care Insurance
      </h1>
       
       
     
    </div>
    <div class="column is-narrow">
       <ul>
    <li><small><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small></li>
    <li><small><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></small></li>
    
</ul>
    </div>
</div>  
 <hr>

</div><!--end contentheader-->



 <social-sharing url="https://www.justlifeinsurance.ca/content/longtermcare"
                      title="Long Term Care Insurance"
                      description="Makes it easier to ask for help if you can no longer live independently."
                      quote="Makes it easier to ask for help if you can no longer live independently."
                      hashtags="Long Term Care Insurance, Long Term Care, Insurance"
                      inline-template>
  <div class="my-social-bar">
      <a href="#"><network network="facebook">
        <i class="fa fa-facebook fa-lg"></i>
      </network></a>
      <a href="#"><network network="linkedin">
        <i class="fa fa-linkedin fa-lg"></i>
      </network></a>
      <a href="#"><network network="twitter">
        <i class="fa fa-twitter fa-lg"></i>
      </network></a>
      <a href="#"><network network="whatsapp">
        <i class="fa fa-whatsapp fa-lg"></i>
      </network></a>
  </div>
</social-sharing>


<!--begin main columns-->

<div class="my-listed-content columns is-8 is-variable is-desktop">
     
     <div class="column is-two-thirds-desktop"> 
      
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
            A means of financial protection that becomes available if you are unable to care for yourself and require substantial assistance with at least 2 of the 6 activities of daily living.
            </h2>
            
           
        <p>
            After a pre-determined waiting period, long term care contracts provide assistance in one of two ways; either you will receive a monthly benefit based on the coverage you chose or you will be reimbursed for eligible expenses that are outlined in your plan. You will be able to choose how long you wish to receive benefits for; either for a certain number of years or until you pass away.
        </p>
        <p>
            Whether you choose to move to a facility that provides the services you need or you hire help and make changes to your home - long term care plans allow you to choose the type of assistance you feel is best for your needs.
        </p>
    </div> 
    </div>
</div>   
   
</div>
<!--end contentblock 1--> 

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
                Most people have faith in government programs and willingly rely on them to be available if they need help in the future. While there is undoubtedly some protection afforded by the Canadian government, there is no guarantee that eligibility requirements will be met or that sufficient funds will be available when you need them.
     </h2>
   <p>
       Having an independent contract with an insurer guarantees; how long you will wait before receiving benefits, how much you will be eligible to receive and how long you will receive benefits for.
   </p>
   <p>
       By removing the unknowns, you will be able to properly plan your retirement knowing that the help you need will be available if you need it.
   </p>
    </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 2--> 


</div>

<div class="column is-narrow is-one-third-desktop">
    <div class="box my-sidebox">
          <span class="icon is-large is-pulled-right">
  <i class="fa fa-info-circle fa-2x"></i>
</span>
        <h2 class="subtitle">Things to keep in mind</h2>
        <br>
<p>
Family and friends are often able to provide assistance if the need arises but some conditions may persist for long periods of time. While they may be happy to help, these caregivers are required to make large sacrifices.
</p>
<p>
Other than the amount of time required, informal caregivers likely lack the training or know-how to confidently provide the care needed. They may not say so, but there will be a certain amount of stress and anxiety if they need to shoulder the responsibility of caring for a loved one.
</p>

    </div>
</div> 

</div> <!--end main columns-->



<br>


</div>

    </section>

  
    </div>
</template>

<script>
import Social from "~/components/social.vue";


export default {
    components: {
        Social
    },
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

