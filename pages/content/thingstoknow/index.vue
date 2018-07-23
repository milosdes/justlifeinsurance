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
                            <li><nuxt-link to="/content/thingstoknow/insurancecompanies">FAQ when dealing with Insurance Companies</nuxt-link> </li>
                            <li><nuxt-link to="/content/thingstoknow/agentsrole">An Agent's Role</nuxt-link></li>
                            <li><nuxt-link to="/content/thingstoknow/othercoverage">Other Coverage</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds my-2ndtier-textbox">
                    <div v-html="Content.thingstoknow.termorpermanent.html">
                        {{ Content.thingstoknow.termorpermanent.html }}
                    </div>
                </div>
            </div>
        </div>
    </section>
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
</style>
