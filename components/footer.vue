<template>
<footer class="footer">
    <div class="container">
        <div class="columns footermenu">
            <div class="column is-one-quarter sub">
                <h2 class="is-6">Insurance</h2>
                <br>
                <ul>
                    <li>
                        <small><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></small>
                    </li>
                    <li>
                        <small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small>
                    </li>
                    <li>
                        <small><nuxt-link to="/content/disability">Disability Insurance</nuxt-link></small>
                    </li>
                    <li>
                        <small><nuxt-link to="/content/longtermcare">Long Term Care Insurance</nuxt-link></small>
                    </li>
                    <br>
                    <li><small><nuxt-link to="/content/thingstoknow">Things to know</nuxt-link></small></li>
                    <li><small><nuxt-link to="/assessment">Take an assessment</nuxt-link></small></li>
                </ul>
            </div>
            <div class="column is-one-quarter sub">
                <h2 class="is-6">General</h2>
                <br>
                <ul>
                    <li>
                        <small><nuxt-link to="/about">About this page</nuxt-link></small>
                    </li>
                    <li>
                        <small><nuxt-link to="/privacy">Privacy</nuxt-link></small>
                    </li>
                    <li><small><nuxt-link to "/termsofuse">Terms of use</nuxt-link></small></li>
                    <li><small><nuxt-link to="/contact">Contact</nuxt-link></small></li>
                </ul>
            </div>
            <div class="column is-one-half sub">
                <div id="copyright">
            <small>copyright 2018 by Justin Ng. All rights reserved.</small>
        </div>
            </div>
           
        </div>
       <br><br>
       
    </div>
</footer>
</template>

<style scoped>
.sub {
  padding: 20px;
  border-right: solid #d1d1d154 1px;
}

.sub:nth-last-child(2) {
  border: 0px;
}
.sub:last-child {
  border: 0px;
}

.sub ul {
  margin-left: auto;
  margin-right: auto;
}
.footermenu {
  margin: 10px;
  line-height: 0.9rem;
}

.footermenu li {
  margin: 5px;
}
#copyright {
  text-align: right;
  color: #d1d1d1;
}
</style>
