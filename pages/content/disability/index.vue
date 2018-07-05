

<template>

<div>



    
  


<section class="section">
<div class="container textpage">


      <h1 class="title is-3 has-text-weight-light headline">
        Disability Insurance
      </h1>
      <hr>
  <br>
    

<div id="my-listed-content">
      
  
<div class="contentblock" id="lifeinsurance-one">

<div class="columns is-8 is-variable">
    <div class="column is-narrow is-one-third">
       
        <div class="contentboxheader my-right">
             <img width="100px" src="~/assets/icons/quotation.svg" />
             <h1 class="title is-1 has-text-weight-light">What</h1>
             <h2 class="subtitle is-3 ">is it?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="is-size-4 subtitle">
            If your ability to work is impacted by injury or illness, Disability Insurance will provide a monthly benefit based on the options your choose or until you have recovered and are able to resume your responsibilities.
       
            </h2>
           
           
        <p>
            While under the care of a physician, you have to wait a period of time (*elimination period*) between the incident causing you to stop working and when you start receiving benefits. After satisfying the elimination period, you will receive monthly benefits for as long as the *benefit period* you choose.
        </p>
        <p>
            Some disability contracts will provide partial benefits if you try to return to work but are unable to work full time or if your monthly income is still impacted by the injury or illness.
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
             <h1 class="title is-1 has-text-weight-light">Why</h1>
             <h2 class="subtitle is-3 ">is this important?</h2>
        </div>
       
    </div>
    <div class="column is-two-thirds">
        <div class="contenttext">
            <h2 class="is-size-4 subtitle">
       Being injured or ill is difficult on its own - not being able to work and bring in an income while injured or ill can make the situation feel overwhelming. 
   
       </h2>
  
       
    <p>
        Having a policy which guarantees you will receive an income each month while you are unable to work gives you peace of mind knowing you and your loved ones will be able to maintain your lifestyle until you recover. 
    </p>
    <p>
        While things like *Workers Compensation*, *Employment Insurance* and *Canadian Pension Plan* can all provide assistance, qualifying for these assistance programs is not guaranteed and the length of time when you can claim benefits varies.
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

.reverse {
  flex-direction: row-reverse;
}



</style>


