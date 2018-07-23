
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
                <h2 class="subtitle" v-html="Content.longtermcare.whatisit.headparagraph">{{ Content.longtermcare.whatisit.headparagraph }}</h2>
                <p :key="p" v-for="p in Content.longtermcare.whatisit.paragraphs" v-html="p">{{ p }}</p>
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
                <h2 class="subtitle">{{ Content.longtermcare.whyisitimportant.headparagraph }}</h2>
                <p :key="p" v-for="p in Content.longtermcare.whyisitimportant.paragraphs" v-html="p">{{ p }}</p>
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
        <h2 class="subtitle" v-html="Content.longtermcare.sidebox.headline">{{ Content.lifeinsurance.sidebox.headline }}</h2>
        <p :key="p" v-for="p in Content.longtermcare.sidebox.paragraphs" v-html="p">{{ p }}</p>         
    </div>
</div> 

</div> <!--end main columns-->

<hr>
<div class="footnotes">
    <ul>
        <li>
            <sup id="fn1">1. Activities of daily living include:
                <ul class="my-footnotelist">
                    <li>bathing</li>
                    <li>dressing</li>
                    <li>toileting (going to and from the toilet)</li>
                    <li>transferring (moving from a chair or out of bed)</li>
                    <li>maintaining continence (controlling bodily functions)</li>
                    <li>eating</li>
                </ul>
</sup>
        </li>
       
    </ul>
</div>



</div>

    </section>

  
    </div>
</template>

<script>

import Content from "~/static/content.json";

export default {
  
  transition: "fadeOpacity",
    data: function() {
        return {
            Content
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

