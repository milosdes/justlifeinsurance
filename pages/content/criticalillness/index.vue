


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

    

 <social-sharing url="https://www.justlifeinsurance.ca/content/criticalillness"
                      title="Critical Illness Insurance"
                      description="Focus on recovering or spending your time on the important things if you are diagnosed with a critical illness."
                      quote="Focus on recovering or spending your time on the important things if you are diagnosed with a critical illness."
                      hashtags="Critical Illness Insurance,Insurance"
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
            <h2 class="subtitle" v-html="Content.criticalillness.whatisit.headparagraph">{{ Content.criticalillness.whatisit.headparagraph }}</h2>
            <p :key="p" v-for="p in Content.criticalillness.whatisit.paragraphs" v-html="p">{{ p }}</p>
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
            <h2 class="subtitle" v-html="Content.criticalillness.whyisitimportant.headparagraph">{{ Content.criticalillness.whatisit.headparagraph }}</h2>
            <p :key="p" v-for="p in Content.criticalillness.whyisitimportant.paragraphs" v-html="p">{{ p }}</p>
        </div> 
    </div>
   
</div>  

</div>
<!--end contentblock 2--> 





<!--begin contentblock 3--> 
<!-- <div class="contentblock">

<div class="columns is-8 is-variable">
    
    <div class="column is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
            <h2 class="subtitle is-3 ">Things to</h2>
             <h1 class="title is-1">keep in <br> mind!</h1> 
        </div>
       
    </div>
    <div class="column is-two-thirds">
        
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
        <h2 class="subtitle" v-html="Content.criticalillness.sidebox.headline">{{ Content.lifeinsurance.sidebox.headline }}</h2>
        <p :key="p" v-for="p in Content.criticalillness.sidebox.paragraphs" v-html="p">{{ p }}</p>         
    </div>
</div> 

</div> <!--end main columns-->

<hr>
<div class="footnotes">
    <ul>
        <li>
            <sup id="fn1">1. Survival Period is typically 30 days.</sup>
        </li>
        <li>
            <sup id="fn2">2. 
                Early Intervention conditions
                <ul class="my-footnotelist">
                    <li>Chronic lymphocytic leukemia (CLL) Rai stage 0</li>
                    <li>Coronary angioplasty</li>
                    <li>Ductal carcinoma in situ of the breast</li>
                    <li>Papillary or follicular thyroid cancer stage T1</li>
                    <li>Stage A (T1a or T1b) prostate cancer</li>
                    <li>Stage 1 malignant melanoma</li>
                </ul>

                Covered conditions
                <ul class="my-footnotelist">
                    <li>Aortic surgery</li>
                    <li>Aplastic anemia</li>
                    <li>Bacterial meningitis</li>
                    <li>Benign brain tumour</li>
                    <li>Blindness</li>
                    <li>Cancer (life threatening)</li>
                    <li>Coma</li>
                    <li>Coronary artery bypass surgery</li>
                    <li>Deafness</li>
                    <li>Dementia, including Alzheimer’s disease</li>
                    <li>Heart attack</li>
                    <li>Heart valve replacement or repair</li>
                    <li>Kidney failure</li>
                    <li>Loss of limbs</li>
                    <li>Loss of speech</li>
                    <li>Major organ failure (on waiting list)</li>
                    <li>Major organ transplant</li>
                    <li>Motor neuron disease</li>
                    <li>Multiple sclerosis</li>
                    <li>Occupational HIV infection</li>
                    <li>Paralysis</li>
                    <li>Parkinson’s disease and specifed atypical parkinsonian disorders</li>
                    <li>Severe burns</li>
                    <li>Stroke</li>
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




