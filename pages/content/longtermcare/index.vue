<template>
<section class="section">
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
        <aside class="menu">
          <ul class="menu-list">
            
            <li>
              <a class="is-active">Disability</a>
              <ul>
                <li><a href="#" v-scroll-to="'#lifeinsurance-one'">What is it?</a></li>
                <li><a href="#" v-scroll-to="'#lifeinsurance-two'">Why is this important?</a></li>
                <li><a href="#" v-scroll-to="'#lifeinsurance-three'">Things to keep in mind</a></li>
              </ul>
            </li>
          </ul>
        </aside>  
    </div>
    <div class="column is-two-thirds">
      <div id="lifeinsurance-one">
        <h1 class="title">What is it?</h1>
        <p>
            A means of financial protection that becomes available if you are unable to care for yourself and require substantial assistance with at least 2 of the 6 <i>activities of daily living</i>.
        </p>
        <p>
            After a pre-determined <i>waiting period</i>, long term care contracts provide assistance in one of two ways; either you will receive a monthly benefit based on the coverage you chose or you will be reimbursed for eligible expenses that are outlined in your plan. You will be able to choose how long you wish to receive benefits for; either for a certain number of years or until you pass away.
        </p>
        <p>
            Whether you choose to move to a facility that provides the services you need, or you hire help and make changes to your home. Long term care plans allow you to choose the type of assistance you feel is best for your needs.
        </p>
      </div>
      <div id="lifeinsurance-two">
        <h1 class="title">Why is this important?</h1>
        <p>
        </p>
      </div>
      <div id="lifeinsurance-three">
        <h1 class="title">Things to keep in mind</h1>
        <p>
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
</template>

<script>
export default {
  transition: "fadeOpacity",
  data: function() {
    return {
      myShowDiv: false
    };
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
.vue-affix {
  width: 250px;
}
</style>
