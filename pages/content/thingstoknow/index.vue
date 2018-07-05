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
                            <li><nuxt-link to="/content/thingstoknow/" class="is-active">Term or Permanent Insurance</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/insurancecompanies">Working with Insurance Companies</nuxt-link> </li>
                            <li><nuxt-link to="/content/thingstoknow/agentsrole">An Agent's Role</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/individualcoverage">Do I need my own coverage?</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <h1 class="title is-4">Term or Permanent Insurance</h1>
                    <br>
                    <h2 class="subtitle">Term Insurance </h2>
                    <p>Term insurance is the most cost effective type of insurance and should be used to provide protection against risks that have a foreseeable end date. After a certain age, term policies will expire and their protection will end. If the policy was never claimed, the premiums would have been spent to offset the insured risk.</p>
                    <p>Common reasons to purchase term insurance include; insuring a mortgage or making sure your children are protected until they are of age. Both these risks will end at some point (ie. when you pay off the balance of your mortgage or your children are old enough to support themselves) and the protection they afforded will no longer be necessary.</p>
                    <p>Term policies have a set price for a period of time (ie. 10, 20 or 30 years). After this first interval, the policy will automatically renew for a second interval at a higher price. This will continue until the policy expires when you reach a predetermined age.</p>
                    <br>
                    <h2 class="subtitle">Permanent Insurance</h2>
                    <p>Permanent Insurance refers to insurance products that stay in place until you claim on them, or you pass away. They have higher premiums than *term insurance* products because they do not have an expiration date.</p>
                </div>
            </div>
        </div>
    </section>
</template>

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
