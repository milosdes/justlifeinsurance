<template>
<footer class="footer">
    <div class="container">
        <div class="columns footermenu">
            <div class="column is-one-fourth sub">
                <ul>
                    <li>
                        <small><nuxt-link to="/content/lifeinsurance">Life Insurance</nuxt-link></small>
                    </li>
                    <li>
                        <small><nuxt-link to="/content/criticalillness">Critical Illness Insurance</nuxt-link></small>
                    </li>
                    <li>
                        <small>Disability Insurance</small>
                    </li>
                    <li>
                        <small>Long Term Care Insurance</small>
                    </li>
                </ul>
            </div>
            <div class="column is-one-fourth sub">
                <ul>
                    <li>
                        <small>Frequently Asked Questions</small>
                    </li>
                    <li>
                        <small>Important Points</small>
                    </li>
                    
                </ul>
            </div>
            <div class="column is-one-fourth sub">
                <ul>
                    <li>
                        <small>Legal</small>
                    </li>
                </ul>
            </div>
            <div class="column is-one-fourth sub">
                <ul>
                    <li>
                        <small>Contact</small>
                    </li>
                </ul>
            </div>
        </div>
       <br><br>
        <div id="copyright">
            <small>copyright 2018 by Justin Ng. All rights reserved.</small>
        </div>
    </div>
</footer>
</template>

<style scoped>
.sub {
    padding: 20px;



    border-right: solid #d1d1d154 1px;
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
    line-height: .9rem;
    
}

.footermenu li {
    margin: 5px;
}
#copyright {
    text-align: center;
    color: #d1d1d1;
}
</style>
