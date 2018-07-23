

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

     
    

 <social-sharing url="https://www.justlifeinsurance.ca/content/longtermcare"
                      title="Long Term Care Insurance"
                      description="Supplements or replaces your income if your ability to work is impacted."
                      quote="Supplements or replaces your income if your ability to work is impacted."
                      hashtags="disabilityinsurance, insurance"
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
            <h2 class="subtitle">{{ Content.disability.whatisit.headparagraph }}</h2>
            <p :key="p" v-for="p in Content.disability.whatisit.paragraphs" v-html="p">{{ p }}</p>
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
            <h2 class="subtitle">{{ Content.disability.whyisitimportant.headparagraph }}</h2>
            <p :key="p" v-for="p in Content.disability.whyisitimportant.paragraphs" v-html="p">{{ p }}</p>
        </div>  
    </div>
   
</div>  

</div>
<!--end contentblock 2-->  





<!--begin contentblock 3-->  
<!-- <div class="contentblock" id="lifeinsurance-three">

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
                It is not possible to protect all of your income with Disability Insurance (the maximum is approximately 80%) and the income you declare must be provable via your tax statements or financial statements if you are incorporated.
       </h2>
    
    </div> 
    </div>
   
</div>  

</div> -->
<!--end contentblock 3-->  


</div>

<div class="column is-narrow is-one-third-desktop">
    <div class="box my-sidebox">
        <span class="icon is-large is-pulled-right">
            <i class="fa fa-info-circle fa-2x"></i>
        </span>
        <h2 class="subtitle" v-html="Content.disability.sidebox.headline">{{ Content.lifeinsurance.sidebox.headline }}</h2>
        <p :key="p" v-for="p in Content.disability.sidebox.paragraphs" v-html="p">{{ p }}</p>         
  

    </div>
</div> 

</div> <!--end main columns-->


<hr>
<div class="footnotes">
    <ul>
        <li>
            <sup id="fn1">1. The Elimination Period can be as short as 30 days or longer than 120 days. Shorter waits will result in higher premiums because you will be able to claim more often.</sup>
        </li>
        <li>
            <sup id="fn2">2. Benefit Periods can range from 1 year, 2 years, 5 years or up to age 65 depending on the company and occupation you work in.</sup>
        </li>
        <li>
            <sup id="fn3">3. Workers Compensation only protects you if the illness or injury was work related. <br>

(see <a href="https://www.worksafebc.com/en/claims/benefits-services/determining-eligibility" target="_blank">https://www.worksafebc.com/en/claims/benefits-services/determining-eligibility</a>)</sup>
        </li>
        <li>
            <sup id="fn4">4. Employment Insurance has a maximum benefit period of 52 weeks.
            <br>
            (see <a href="https://www.canada.ca/en/services/benefits/ei/ei-sickness/after-applying.html" target="_blank">https://www.canada.ca/en/services/benefits/ei/ei-sickness/after-applying.html</a>)
            </sup>
        </li>
        <li>
            <sup id="fn5">5. Canada Pension Plan defines disability "a medical condition that is severe and prolonged. Severe means that you have a mental or physical disability that regularly stops you from doing any type of substantially gainful work. Prolonged means your disability is likely to be long-term and of indefinite duration or is likely to result in death."
            <br>
            (see <a href="https://www.canada.ca/en/employment-social-development/programs/pensions/reports/disability-benefits.html" target="_blank">https://www.canada.ca/en/employment-social-development/programs/pensions/reports/disability-benefits.html</a>)
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


.reverse {
  flex-direction: row-reverse;
}
</style>


