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
                            <li><nuxt-link to="/content/thingstoknow/agentsrole">An Agent's Role</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/individualcoverage" class="is-active">Do I need my own coverage?</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <h1 class="title is-4">Do I need my own coverage?</h1>
                    <br>
                    <h2 class="subtitle">Group Insurance / Work Benefits</h2>
                    <p>Many employers and associations offer group insurance / benefits that may include some form of critical illness, disability or life insurance. While each plan is different, there is often a base amount of coverage with additional insurance available as an option.</p>
                    <p>There are differences between group coverage and having an independent contract but both offer protection to you and your loved ones. Understanding your group coverage is important when determining what forms and how much insurance to put in place.</p>
                    <p>If you are able to provide your advisor with your group benefit plan, they should be able to provide you with an overview outlining the coverage.</p>
                    <br>
                    <h2 class="subtitle">Mortgage Insurance</h2>
                    <p>Purchasing a home is a milestone that is as exciting as it is intimidating. It often includes taking on debt which should be properly protected against in case something unforeseen should happen to you.</p>
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
