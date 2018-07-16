<template>
    <section class="section">
        <div class="container">
            <div class="my-textblock">
            <h1 class="title">Contact</h1>

            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Your name" value="" v-model="form_name">
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
                <input class="input" type="email" placeholder="Your email" value="" v-model="form_email">
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
                <textarea class="textarea" placeholder="Textarea" v-model="form_message"></textarea>
              </div>
            </div>
            <br>
            <div class="field">
              <div class="control">
                <label class="checkbox label">
                  <input type="checkbox" v-model="form_moreinfo">
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
      let subject = `${this.form_name} is getting in touch`;
      let text = `
        From: ${this.form_name}
        Email: ${this.form_email}
        He wants to receive futher information: ${this.form_moreinfo?'Yes':'No'}
        Message:
        ${this.form_message}
      `;
      let html = `
        <p><b>From:</b> ${this.form_name}</p>
        <p><b>Email:</b> ${this.form_email}</p>
        <p><b>He wants to receive futher information:</b> ${this.form_moreinfo?'Yes':'No'}</p>
        <hr>
        <p><b>Message:</b></p>
        <p><i>${this.form_message}</i></p>
      `;


      axios.post('/api/send', {
        to: 'waldo@itsgoodcompany.com',
        subject,
        text,
        html
      }).then(console.log).catch(console.error);
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


