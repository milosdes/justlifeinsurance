<template>

<div>
<section class="section">
<div class="container ">

<!--begin contentheader-->
<div class="contentheader">
  
<div class="columns is-8 is-variable">
    <div class="column">
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

<social-sharing url="https://www.justlifeinsurance.ca/content/lifeinsurance"
                      title="Life Insurance"
                      description="Make sure finances won't be a concern for your loved ones in the event of your death."
                      quote="Make sure finances won't be a concern for your loved ones in the event of your death."
                      hashtags="lifeinsurance,insurance"
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
                <h2 class="subtitle">{{ Content.lifeinsurance.whatisit.headparagraph }}</h2>
                <p :key="p" v-for="p in Content.lifeinsurance.whatisit.paragraphs" v-html="p">{{ p }}</p>
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
                <h2 class="subtitle">{{ Content.lifeinsurance.whyisitimportant.headparagraph }}</h2>
                <p :key="p" v-for="p in Content.lifeinsurance.whyisitimportant.paragraphs" v-html="p">{{ p }}</p>
            </div> 
        </div>
    </div>  
</div>
<!--end contentblock why is it important-->



<!--begin contentblock things to keep in mind-->
<!-- <div class="contentblock" >
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
                <h2 class="subtitle" v-html="Content.lifeinsurance.thingstokeepinmind.headparagraph">{{ Content.lifeinsurance.thingstokeepinmind.headparagraph }}</h2>
                <p :key="p" v-for="p in Content.lifeinsurance.thingstokeepinmind.paragraphs" v-html="p">{{ p }}</p>  
            </div> 
        </div> 
    </div>  
</div> -->
<!--end contentblock things to keep in mind-->



</div>

<div class="column is-narrow is-one-third-desktop">
    <div class="box my-sidebox">
        <span class="icon is-large is-pulled-right">
            <i class="fa fa-info-circle fa-2x"></i>
        </span>
        <h2 class="subtitle" v-html="Content.lifeinsurance.sidebox.headline">{{ Content.lifeinsurance.sidebox.headline }}</h2>
        <p :key="p" v-for="p in Content.lifeinsurance.sidebox.paragraphs" v-html="p">{{ p }}</p>         
    </div>
</div> 

</div> <!--end main columns-->

<hr>
<div class="footnotes">
    <ul>
        <li>
            <sup id="fn1">1. Probate - the process of taking a will to a court to confirm its legal validity.</sup>
        </li>
        <li>
            <sup id="fn2">2. Examples of life insurance uses include paying for; outstanding liabilities or a mortgage, last expenses and funeral costs, childcare or funding the education of any dependents.</sup>
        </li>
    </ul>
</div>
 
</div><!--end main container-->


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
