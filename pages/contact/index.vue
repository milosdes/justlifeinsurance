<template>
 <section class="section">
  <div class="container">
   <div class="my-textblock">
      <h1 class="title">Contact</h1>

      <div v-if="!success.visible">

        <p>If you would like to be contacted and receive further information, please fill out the form below.</p>
        <br>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input :class="{'is-success': !$v.form.name.$invalid, 'is-danger': $v.form.name.$error}" class="input" type="text" placeholder="Your name" value="" v-model="form.name">
            <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
            <span v-if="!$v.form.name.$invalid" class="icon is-small is-right has-text-success"><i class="fa fa-check"></i></span>
            <span v-if="$v.form.name.$error" class="icon is-small is-right has-text-danger"><i class="fa fa-exclamation-triangle"></i></span>
          </div>
          <p v-if="$v.form.name.$invalid" class="help">Please enter your name.</p>
          <span v-if="$v.form.name.$error">
        <p v-if="!$v.form.name.required" class="has-text-danger has-text-weight-bold">
          This field is required.
        </p>
      </span>
          </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input :class="{'is-success': !$v.form.email.$invalid, 'is-danger': $v.form.email.$error}" class="input" type="email" placeholder="Your email" value="" v-model="form.email">
            <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right has-text-danger">
            <i v-if="!$v.form.email.email" class="fa fa-exclamation-triangle"></i>
            </span>
            <span v-if="$v.form.email.$error" class="icon is-small is-right has-text-danger"><i class="fa fa-exclamation-triangle"></i></span>
            <span v-if="!$v.form.email.$invalid" class="icon is-small is-right has-text-success"><i class="fa fa-check"></i></span>
          </div>
          <p v-if="!$v.form.email.email" class="help">Please enter a valid email address</p>
          <p v-if="!$v.form.email.required" class="help">Please enter your email address.</p>
          <span v-if="$v.form.email.$error">
        <p v-if="!$v.form.email.required" class="has-text-danger has-text-weight-bold">
          This field is required.
        </p>
      </span>
        </div>

        <div class="field">
          <label class="label">Message (optional)</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea" v-model="form.message"></textarea>
          </div>
        </div>

       

        <br>

        <div v-if="warningmsg.visible">
          <article class="message is-warning">
          <div class="message-body">
            {{warningmsg.text}}
          </div>
          </article>
          <br>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="sendmail()" class="button is-primary is-outlined"
            v-if="!sending">Submit</button>

            <button class="button is-loading"
            v-if="sending">Submit</button>
          </div>
        </div>
      </div>

      <div v-if="success.visible">
        <h2 class="subtitle">Success. Thank you for reaching out.</h2>
        <p>We will get back to you shortly. In the meantime, we hope the resources on this site serve you well. Click <nuxt-link to="/">here</nuxt-link> to return to the home page.</p>
        <br><br><br><br>
      </div>
   </div>
  </div>
 </section>
</template>



<script>
import { required, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate';
let axios = require('axios')

export default {
  data: function() {
    return {
      form: {
        email: '',
        name: '',
        message: '',
        moreinfo: true
      },
      warningmsg: {
          visible: false,
          text: ''
      },
      success: {
          visible: false
      },
      sending: false
    }
  },
  mixins: [validationMixin],
  
  validations: {
      form: { 
        name: {
          required
        },
        email: {
          required,
          email
        }
      }
    
  },

  methods: {
    sendmail: function() {
      this.$v.$touch();
      let subject = `${this.form.name} is getting in touch`;
      let text = `
        From: ${this.form.name}
        Email: ${this.form.email}
        He wants to receive futher information: ${this.form.moreinfo?'Yes':'No'}
        Message:
        ${this.form.message}
      `;
      let html = `
        <p><b>From:</b> ${this.form.name}</p>
        <p><b>Email:</b> ${this.form.email}</p>
        <p><b>He wants to receive futher information:</b> ${this.form.moreinfo?'Yes':'No'}</p>
        <hr>
        <p><b>Message:</b></p>
        <p><i>${this.form.message}</i></p>
      `;

      this.sending = true
      axios.post('/api/send', {
        to: 'waldo@itsgoodcompany.com',
        subject,
        text,
        html
      }).then((res) => {
        this.sending = false
          if (res.data.ok === true) {
            this.showSuccess()
          } else {
          this.showWarningMsg('Sorry, cannot send mail. Try again.')
          }
      }).catch((res) => {
        this.sending = false
          console.error(res)
          this.showWarningMsg('Sorry, cannot send mail. Try again.')
      });
    },
    showSuccess: function() {
      this.success.visible = true
    },
    showWarningMsg: function(text) {
      this.warningmsg.visible = true
      this.warningmsg.text = text
    }
  },
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
