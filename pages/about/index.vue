
<template>
    <section class="section">
        <div class="container">
            <h1 class="title">About us</h1>
            <hr>
            <br>
              <div class="columns">
                <div class="column is-one-third">
                    <div class="menu">
                        <ul class="menu-list">
                            <li><nuxt-link to="/about" class="is-active">Our Purpose</nuxt-link></li>
                            <li><nuxt-link to="/about/whoarewe">Who are we?</nuxt-link> </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds my-content">
                    <div v-html="Content.about.ourpurpose.html">
                        {{ Content.about.ourpurpose.html }}
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



