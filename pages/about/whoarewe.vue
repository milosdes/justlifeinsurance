
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
                    <h1 class="title">Who are we?</h1>
                    <br>
                    <p>To be perfectly honest – it’s actually just me (my name’s Justin). I’m glad you found your way to this site and hopefully you gain something from your time here.</p>
                    <br>
                    <p>I’ve had my life insurance license since 2013 and it always frustrated me how dense and difficult to understand everything related to life insurance is. This site is my attempt to help people understand the basics of life insurance so they can figure out their own needs.</p>
                    <p>I know that the insurance industry has a stigma attached to it – I’ve dealt with that preconception ever since I got my license. I sincerely believe that life insurance products can help and the protection they afford can be extremely valuable when needed. </p>
                    <p>My advice would be to try your best to understand the basics and remember that, whether it’s for yourself or your loved ones, the purpose of insurance should always be protection.</p>
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



