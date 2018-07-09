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
                            <li><nuxt-link to="/content/thingstoknow/insurancecompanies" class="is-active">Working with Insurance Companies</nuxt-link> </li>
                            <li><nuxt-link to="/content/thingstoknow/agentsrole">An Agent's Role</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/individualcoverage">Do I need my own coverage?</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <h1 class="title is-4">Working with Insurance Companies</h1>
                    <br>
                    <h2 class="subtitle">How are premiums calculated?</h2>
                    <p>The cost of insurance is calculated based on an Insurance Company's risk in extending coverage to the insured. Factors such as being a smoker, age, current health and family history are all taken into consideration. </p>
                    <p>While higher risk individuals may have to pay more for coverage, healthier individuals may be offered better pricing because of the lower risk they pose.</p>
                    <p><em>If Person A is a smoker, that person is more likely to develop health complications than Person B who is not a smoker (all other things remaining equal). Because of this risk, Person A would have to pay higher premiums.</em></p>
                    <br>
                    <h2 class="subtitle">The underwriting process</h2>
                    <p>The process of determining whether an insurance company will offer coverage to an individual is called underwriting. This includes questions about an individual's family and personal medical history, lifestyle and current employment.</p>
                    <p>Depending on the amount of coverage and the answers to the questions above, insurance companies may ask for more detailed information. Medical underwriting such as urinalysis, blood profiles or attending physician's statements are common as insurers must determine their risk prior to making a decision.</p>
                    <br>
                    <h2 class="subtitle">What is insurability?</h2>
                    <p>Whether or not a company is willing to extend coverage to an individual is called a person's insurability. Insurability is a snapshot of a person's *current* health and will change over time.</p>
                    <p>Putting a policy in place when an applicant is young and relatively healthy is important because that contract cannot be rescinded by an insurance company even if a person's health changes in the future.</p>
                    <p>As long as the policy premiums are paid and the questions in the application were answered honestly - that contract will remain in force.</p>
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

</style>
