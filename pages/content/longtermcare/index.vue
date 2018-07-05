
<template>

<div>



    
  


<section class="section">
<div class="container textpage">


      <h1 class="title is-3 has-text-weight-light headline">
        Long Term Care Insurance
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
            A means of financial protection that becomes available if you are unable to care for yourself and require substantial assistance with at least 2 of the 6 <i>activities of daily living</i>.
       
            </h2>
            
           
        <p>
            After a pre-determined <i>waiting period</i>, long term care contracts provide assistance in one of two ways; either you will receive a monthly benefit based on the coverage you chose or you will be reimbursed for eligible expenses that are outlined in your plan. You will be able to choose how long you wish to receive benefits for; either for a certain number of years or until you pass away.
        </p>
        <p>
            Whether you choose to move to a facility that provides the services you need, or you hire help and make changes to your home. Long term care plans allow you to choose the type of assistance you feel is best for your needs.
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
     </h2>
   
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
      </h2>
   
    </div> 
    </div>
   
</div>  

</div>




<br>

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

