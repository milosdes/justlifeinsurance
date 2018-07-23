
<template>
    <section class="section">
        <div class="container">
            <h1 class="title">About this Page</h1>
            <hr>
            <br>
              <div class="columns">
                <div class="column is-one-third">
                    <div class="menu">
                        <ul class="menu-list">
                            <li><nuxt-link to="/about">Our Purpose</nuxt-link></li>
                            <li><nuxt-link to="/about/whoarewe" class="is-active">Who are we?</nuxt-link> </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds my-content">
                    <div v-html="Content.about.whoarewe.html">
                        {{ Content.about.whoarewe.html }}
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

.my-content ol {
  margin-top: 1em;
}

.my-content ol li {
  margin-left: 3em;
  margin-top: 0.1em;
  margin-bottom: 0.5em;
}

.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}
</style>



