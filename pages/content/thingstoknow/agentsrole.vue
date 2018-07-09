<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Things to know</h1>
            <hr>
            <br>
              <div class="columns">
                <div class="column is-one-third">
                    <div class="menu">
                        <ul class="menu-list">
                            <li><nuxt-link to="/content/thingstoknow/">Term or Permanent Insurance</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/insurancecompanies">Working with Insurance Companies</nuxt-link> </li>
                            <li><nuxt-link to="/content/thingstoknow/agentsrole" class="is-active">An Agent's Role</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/individualcoverage">Do I need my own coverage?</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <h1 class="title is-4">An Agent's Role</h1>
                    <br>
                    <h2 class="subtitle">The importance of an agent</h2>
                    <p>The role of an insurance agent is to educate and provide advice so you can feel confident in the decision you make. Life insurance can be a confusing subject with a vast catalog of products all of which can sound attractive.</p>
                    <p>Advisors should provide you with a basic understanding of the 4 main types of insurance and make recommendations relevant to your circumstance. They will be able to provide insight into the industry and will be the ones who liaise between you and the insurance company.</p>
                    <p>If you feel like you are being pushed in one direction or another, stop and think whether the advice is sound or if it may be better to work with someone else. While an agent may have strong feelings about one thing or another - whatever you choose will impact you and your loved ones. The choice is always yours and you need to feel comfortable with whatever you choose. </p>
                    <br>
                    <h2 class="subtitle">How are agents paid?</h2>
                    <p>An agent is paid a commission by the insurer based on the annual premium paid on a policy. The commission is included in the premiums which means that the price you pay will be the same whether you choose to work with one agent or another.</p>
                    <p>Generally, an agent will receive a larger commission the first year a policy is put in place with a much smaller trailer commission paid for the subsequent years that the policy is in force for. Agents may also receive non-monetary benefits such as conference credits for putting a certain number of policies in place. </p>
                    <p>If a policy is cancelled within two years of being put in place, an agent must refund some or all of the commission collected. This is to ensure that agent recommendations and advice never stem from the compensation or benefits they receive. When choosing an insurance company for a policy, an agent should be making suggestions based on your needs. If there is a conflict of interest, it should be addressed by the agent.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    transition: "fadeOpacity"
}
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
</style>
