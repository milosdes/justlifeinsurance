
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
                            <li><nuxt-link to="/about" class="is-active">Our Purpose</nuxt-link></li>
                            <li><nuxt-link to="/about/whoarewe">Who are we?</nuxt-link> </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-two-thirds my-content">
                    <h1 class="title">Our Purpose</h1>
                    <br>
                    <h2 class="subtitle">This website is meant to explain the principles of life insurance in a simplified and understandable way. The hope is to give users the knowledge necessary to make an informed decision about their needs and whether insurance should be considered.</h2>
                    <br>
                    <p>There were three assumptions made when creating this website:
                    <ol>
                        <li> Life insurance can help - it can make a difference for individuals, families and friends during difficult times.</li>
                        <li> Each person should decide for themselves - but they need to understand the basics before an informed decision can be made.</li>
                        <li> Form does not matter - if there is a need, the structure of the solution is not important.</li>
                    </ol>
                    </p>
                    <br>
                    <p>The importance of working with a good advisor cannot be understated, they will provide insight into the industry and help you find the best fit. Find someone who spends the time to understand your situation before recommending solutions and educate yourself so are confident in the solutions being implemented.</p>
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



