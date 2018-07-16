<template>
    <section class="section">
        <div class="container">
            <div class="my-textblock">
            <h1 class="title">Contact</h1>

            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Your name" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </div>
              <p class="help">Please enter your name.</p>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Your email" value=""
                          >
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help">Please enter a valid email address</p>
            </div>

            <div class="field">
              <label class="label">Message (optional)</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
            <br>
            <div class="field">
              <div class="control">
                <label class="checkbox label">
                  <input type="checkbox">
                  I would like to be contacted to receive further information.
                </label>
              </div>
            </div>

            <br>

            <div class="field is-grouped">
              <div class="control">
                <button @click="sendmail()" class="button is-primary is-outlined">Submit</button>
              </div>

            </div>

        </div>    
    </div>
  </section>
</template>



<script>
let axios = require('axios')
export default {
  data: function() {
    return {
      form: {
        email: ''
      }
    }
  },
  vuelidation: {
    data: {
      form: { 
        email: {
          required: true,
          email: true
        }
      }
    }
  },

  methods: {
    sendmail: function() {
      axios.post('/api/send', {
        to: 'ulf.michalek@gmail.com',
        subject: 'Using axios',
        text: 'works well',
        html: '<i>works well</i>'
      }).then(console.log).catch(console.error)
    }
  }

}



</script>



<style scoped>
.my-textblock {
  max-width: 800px;
}

.my-textblock ol {
  margin-top: 1em;
}

.my-textblock ol li {
  margin-left: 3em;
  margin-top: 0.1em;
  margin-bottom: 0.5em;
}

.my-textblock h2 {
    margin-top: 2em;
}
</style>


