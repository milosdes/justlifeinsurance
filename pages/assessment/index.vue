<template>

<div>
<section class="section">
<div class="container textpage">

<transition name="slide-fade" mode="out-in">
  <div v-if="quiz[sectionValue].page!='lastpage'" class="my-progress ">
    <div class="my-questioncount-container">
      <h1 class="title has-text-weight-bold is-3 my-questioncount has-background-primary has-text-white"> {{ navigation.length }}</h1>
    </div>
    <progress class="progress is-primary is-small" :value="navigation.length" max="17">{{ navigation.length }}</progress>   
  </div>
</transition>

<transition name="slide-fade" mode="out-in">
  <div :key="quiz[sectionValue].question">
<h2 class="subtitle">{{ quiz[sectionValue].question }}</h2>





<div v-if="quiz[sectionValue].page==='lastpage'" class="my-assessment">
  
<h2 class="subtitle">These are topics which, based on your answers, are the most relevant to you.</h2>
<p><small>Please click on a subject to open it in a new window.</small></p>
  
 <div id="resultgraphs">
   <ol class="my-resultlist">
    <li class="has-text-weight-bold" :key="cat" v-for="cat in evalArraySorted"><a :href="cat.link" target="_blank">{{ cat.name }}</a>
    <div class="my-bar" :style="{ width: (cat.score / (evalArraySorted[0].score / 100)) + '%', opacity: (cat.score / (evalArraySorted[0].score / 1))*0.3 }" width="200px" ></div></li>
  </ol>
</div>
<br>
<p>If you wish, you can submit your results by filling out the contact form below. We will gladly reach out to you.</p>
<br>
<div class="my-form">
           <div v-if="!success.visible">

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
          <label class="label">Date of Birth</label>
          <div class="control has-icons-left has-icons-right">
            <input :class="{'is-success': $v.form.dob.isDate, 'is-danger': $v.form.dob.$error}" class="input" type="text" placeholder="YYYY-MM-DD" value="" v-model="form.dob">
            <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
            <span v-if="$v.form.dob.isDate" class="icon is-small is-right has-text-success"><i class="fa fa-check"></i></span>
            <!-- <span v-if="!$v.form.dob.isDate" class="icon is-small is-right has-text-warning"><i class="fa fa-exclamation-triangle"></i></span> -->
            <span v-if="$v.form.dob.$error" class="icon is-small is-right has-text-danger"><i class="fa fa-exclamation-triangle"></i></span>
          </div>
          <p v-if="!$v.form.dob.isDate" class="help">Please enter your date of birth in the this format: YYYY-MM-DD.</p>
          <span v-if="$v.form.dob.$error">
            <p v-if="!$v.form.dob.required" class="has-text-danger has-text-weight-bold">
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
            <span class="icon is-small is-right has-text-warning">
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
            <textarea class="textarea" placeholder="Anything you'd like to tell us or ask us?" v-model="form.message"></textarea>
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

<div v-else class="my-assessment">
<ul>
<li v-bind:key="op" v-for="op in quiz[sectionValue].options"> 
    <h2 v-if="op.headline" class="subtitle">{{ op.headline }}</h2>
    <label class="answerlabel" :class="quiz[sectionValue].type">
      <input v-if="quiz[sectionValue].type==='radio'" :type="quiz[sectionValue].type" :value="[op]" v-model="quiz[sectionValue].answer">
      <input v-if="quiz[sectionValue].type==='checkbox'" :type="quiz[sectionValue].type" :value="op" v-model="quiz[sectionValue].answer">
      <input v-if="quiz[sectionValue].type==='text'" :type="quiz[sectionValue].type" v-model="quiz[sectionValue].answer[0].text" placeholder="edit me">
      {{op.text}}
    </label>
    
</li>

</ul>




<br>

<div class="assessmentnav">
 
<ul>
  <li><a class="button is-primary is-outlined" v-on:click="back()" v-if="hasBack" href="#">Back</a></li>
  <li><a class="button is-primary is-outlined" v-on:click="select(quiz[sectionValue].answer[0].target, quiz[sectionValue].answer, quiz[sectionValue].question)" href="#">Next</a></li>
</ul>
<br>
<a v-if="quiz[sectionValue].skiptarget !== undefined" class="" v-on:click="skip(quiz[sectionValue].skiptarget, quiz[sectionValue].question)" href="#">Skip this question</a>

</div> 
</div>
</div>
</transition>


</div>
</section>
</div>

</template>








<script>
import moment from 'moment'
import { required, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
let axios = require('axios')
const isDate = (value) => moment(value, 'YYYY-MM-DD', true).isValid()

export default {
  transition: "fadeOpacity",
 

  data: function() {
    return {
      navigation: [{ section: "Q1", answer: "" }],
      answerchain: [],

      form: {
        dob: '',
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
      sending: false,
      


      quiz: {
       
       Q1: {
          question:
            "Which type(s) of insurance would you confidently say you have a good understanding of?",
          type: "checkbox",
          skiptarget: "Q2",
          options: [
            { text: "​Critical Illness Insurance", target: "Q2", eval: [{insurancecategory: "criticalillness", value: (-1)}] },
            { text: "​Disability Insurance",target: "Q2", eval: [{insurancecategory: "disability", value: (-1)}]},   
            { text: "​Life Insurance", target: "Q2", eval: [{insurancecategory: "lifeinsurance", value: (-1)}] },
            { text: "​Long Term Care Insurance", target: "Q2", eval: [{insurancecategory: "longtermcare", value: (-1)}] },
            { text: "None of the above", target: "Q2" }
          ],
          answer: []
        },
        Q2: {
          question:
            "Do you have any insurance policies that are currently in force? (Either through a group plan or an independent contract)",
          type: "radio",
          skiptarget: "Q3",
          options: [
            { text: "​Yes", target: "Q2a" },
            { text: "​No", target: "Q3" },
            { text: "​I don’t know", target: "Q3" }
          ],
          answer: []
        },
        Q2a: {
          question:
            "What type(s) of insurance do you have in force? (check all that apply)",
          type: "checkbox",
          options: [
            { text: "​​Critical Illness Insurance", target: "Q2b" },
            { text: "​​Disability Insurance", target: "Q2b" },
            { text: "​​Life Insurance", target: "Q2b" },
            { text: "​​​Long Term Care Insurance", target: "Q2b" }
          ],
          answer: []
        },
        Q2b: {
          question:
            "Do you understand what is covered under your current policy?",
          type: "radio",
          options: [
            { text: "​​Yes", target: "Q3" },
            { text: "​​No", target: "Q3" },
          ],
          answer: []
        },
        Q3: {
          question:
            "Which of the following best describes your current marital / relationship status? ",
          type: "radio",
          skiptarget: "Q4",
          options: [
            { text: "Single", target: "Q4" },
            {text: "In a committed relationship",target: "Q4"},
            { text: "Divorced", target: "Q4" },
            { text: "Widowed", target: "Q4" },
            { text: "Other", target: "Q4" }
          ],
          answer: []
        },
        Q4: {
          question: "Is anyone dependent on you at this time?",
          type: "radio",
          skiptarget: "Q5",
          options: [
            { text: "Yes", target: "Q4a", eval: [{insurancecategory: "lifeinsurance", value: (+1)}] },
            { text: "No", target: "Q5", eval: [{insurancecategory: "lifeinsurance", value: (-1)}] }
          ],
          answer: []
        },
        Q4a: {
          question: "Who is dependent on you?",
          type: "checkbox",
          options: [
            { text: "A partner", target: "Q5" },
            { text: "One or more children", target: "Q5" },
            { text: "Parent(s) or grandparent(s)", target: "Q5" },
            { text: "Other", target: "Q5" }
          ],
          answer: []
        },
        Q5: {
          question: "Which statement best describes your current financial situation at this time? (check all that apply)",
          type: "checkbox",
          skiptarget: "Q6",
          options: [
            { text: "​I have more debt / liability than assets", target: "Q6", eval: [{insurancecategory: "lifeinsurance", value: (+1)}]},
            { text:"​I have more assets than debt / liability", target: "Q6", eval: [{insurancecategory: "criticalillness", value: (+1)}]},
            { text:"​My assets and liabilities are close to being equal", target: "Q6", eval: [{insurancecategory: "disability", value: (+1)}]}
          ],
          answer: []
        },
        Q6: {
          question: "In the near future, do you expect your liability to:",
          type: "checkbox",
          skiptarget: "Q7",
          options: [
            { text: "​Decrease", target: "Q7"},
            { text:"​Increase", target: "Q7"},
            { text:"​​Stay the same", target: "Q7"}
          ],
          answer: []
        },
        Q7: {
          question: "​What type of savings / investment vehicle have you used in the past?",
          type: "checkbox",
          skiptarget: "Q8",
          options: [
            { text: "​Chequing / savings accounts at your bank", target: "Q8"},
            { text:"Non-registered investments", target: "Q8"},
            { text:"RRSP", target: "Q8"},
            { text:"TFSA", target: "Q8"},
            { text:"​​Other", target: "Q8"},
            { text:"​​I don’t know", target: "Q8"}
          ],
          answer: []
        },
        Q8: {
          question:
            "On average, at the end of each month, my net worth:",
          type: "radio",
          skiptarget: "Q9",
          options: [
            { text: "Decreases (the ending balance in my bank account is less than it was at the beginning of the month)",
              target: "Q9" },
            { text: "Increases (the ending balance in my bank account is greater than it was at the beginning of the month)", 
              target: "Q9",
              eval: [{insurancecategory: "termandpermanent", value: (+1)}] },
            { text: "Stays about the same",
              target: "Q9"},
            { text: "I don't know",
              target: "Q9"}
          ],
          answer: []
        },
        Q9: {
          question: "Occupationally - within the next 5 years do you expect to: (Check all that apply)",
          type: "checkbox",
          skiptarget: "Q10",
          options: [
            { text: "Change employment / careers", target: "Q10",
              eval: [{insurancecategory: "othercoverage", value: (+1)}] },
            { text: "Enter the workforce", target: "Q10" },
            { text: "Retire", target: "Q10",
              eval: [{insurancecategory: "othercoverage", value: (+1)}] },
            { text: "Start a business", target: "Q10" },
            { text: "Other", target: "Q10" }
          ],
          answer: []
        },
        Q10: {
          question: "Personally - within the next 5 years do you expect to: (Check all that apply)",
          type: "checkbox",
          skiptarget: "Q11",
          options: [
            { text: "​Care for a parent", target: "Q11",
              eval: [{insurancecategory: "longtermcare", value: (+1)}] },
            { text: "​​Get married", target: "Q11",
              eval: [{insurancecategory: "lifeinsurance", value: (+1)}] },
            { text: "​Start a family", target: "Q11",
              eval: [{insurancecategory: "lifeinsurance", value: (+1)}] },
            { text: "Other", target: "Q11" }
          ],
          answer: []
        },
         Q11: {
          question: "​Financially - within the next 5 years do you expect to: (Check all that apply)",
          type: "checkbox",
          skiptarget: "Q12",
          options: [
            { text: "​​Buy a property", target: "Q12" },
            { text: "​​​Sell a property", target: "Q12" },
            { text: "​Pay off a loan", target: "Q12" },
            { text: "Buy a business", target: "Q12" },
            { text: "​​Sell a business", target: "Q12" },
            { text: "​Other", target: "Q12" }
          ],
          answer: []
        },
        Q12: {
          question: "​​If something happened and you were incapable of working – how long would you be able to use your savings to maintain your lifestyle?",
          type: "radio",
          skiptarget: "Q13",
          options: [
            { text: "​​​Less than 3 months", target: "Q13",
              eval: [{insurancecategory: "disability", value: (+1)}] },
            { text: "​​​Between 3 – 6 months", target: "Q13" },
            { text: "​Up to a year", target: "Q13" }
          ],
          answer: []
        },
        Q13: {
          question: "​​​If something happened and you could not get out of bed without assistance – is there someone that would be able to take care of you?",
          type: "radio",
          skiptarget: "Q14",
          options: [
            { text: "​​​Yes", target: "Q14" },
            { text: "​​​No", target: "Q14",
              eval: [{insurancecategory: "longtermcare", value: (+1)}, {insurancecategory: "criticalillness", value: (+1)} ] },
            { text: "​​I don’t know", target: "Q14" }
          ],
          answer: []
        },
        Q14: {
          question: "​​​How much would you be able to comfortably put aside for insurance each month?",
          type: "radio",
          skiptarget: "Q15",
          options: [
            { text: "​​​Under $50", target: "Q15" },
            { text: "​​​​$51 - $100", target: "Q15" },
            { text: "​​​$100 - $250", target: "Q15" },
            { text: "​​​I’m comfortable spending any amount of money as long as the product makes sense", target: "Q15" }
          ],
          answer: []
        },
        Q15: {
          question: "​​​​​What is your gender?",
          type: "radio",
          skiptarget: "Q16",
          options: [
            { text: "​​​​Male", target: "Q16" },
            { text: "​​​​Female", target: "Q16" },
            { text: "​​​​Other", target: "Q16" }
          ],
          answer: []
        },
        Q16: {
          question: "​​​​Do you smoke cigarettes?",
          type: "radio",
          skiptarget: "Q17",
          options: [
            { text: "​​​​Yes", target: "Q17" },
            { text: "No", target: "Q17" }     
          ],
          answer: []
        },
        Q17: {
          page: "lastpage",
          question: "Your Results"
        }
      }
    };
  },

mixins: [validationMixin],
  
  validations: {
      form: { 
        dob: {
          required,
          isDate (value) {
            return isDate(value)
          }
        },   
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
        Date of Birt: ${this.form.dob}
        Email: ${this.form.email}
        Message:
        ${this.form.message}
        Questionnaire results:
      `;
      this.answerchain.forEach(navAnswer => {
        text += navAnswer.question + "\n";
        navAnswer.answer.forEach(element => {
          text += element.text + "\n";
        });
        text += "\n";
      });
      let html = `
        <p><b>From:</b> ${this.form.name}</p>
        <p><b>Email:</b> ${this.form.email}</p>
        <p><b>Date of Birth:</b> ${this.form.dob}</p>
        <hr>
        <p><b>Message:</b></p>
        <p><i>${this.form.message}</i></p>
        <hr>
        <p><b>Questionnaire Results:</b></p>
      `;
      this.answerchain.forEach(navAnswer => {
        html += `<p> ${navAnswer.question}</p> <ul>`;
        navAnswer.answer.forEach(element => {
          html += `<li> ${element.text} </li>`;
        });
        html += `</ul>`;
      });
      this.sending = true
      axios.post('/api/send', {
        to: 'justin@justlifeinsurance.ca',
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
    },





    select: function(target, answer, question) {
      this.navigation.push({ section: target, answer: answer });
      this.answerchain.push({ question: question, answer: answer });
     
      // answer.forEach(a => {
      //   if (a.eval!==undefined) {
      //     this.compoundeval[a.eval.insurancecategory] += a.eval.value;
      //   }
      //   else {
      //     console.log("no eval")
      //   }
      // });
      
 
    },
    skip: function(target, question) {
      this.navigation.push({ section: target });
      this.answerchain.push({ question: question, answer: [{text: "N/A"}] });
     
    },
    back: function() {
      this.navigation.pop();
      this.answerchain.pop();
    },
    outputFile: function() {
      this.quiz.push(options);
    }
  },
  computed: {
    //computed: derived value of navigation in this case
    lastNavigation: function() {
      return this.navigation[this.navigation.length - 1]; //length: property of the array
    },
    hasBack: function() {
      return this.navigation.length > 1;
    },
    sectionValue: function() {
      //{section:"lifeins", value:"yes"}
      return this.lastNavigation.section;
    },
    compoundEval: function() {
      let result = {lifeinsurance: 2, criticalillness: 2, disability: 2, longtermcare: 2, othercoverage: 2, termandpermanent: 2};
      this.answerchain.forEach(sectionresponse => {
        sectionresponse.answer.forEach(answer => {
          if (answer.eval!==undefined) {
            answer.eval.forEach(element => {
              result[element.insurancecategory] += element.value;
            });
          }
          else {
            console.log("no eval")
          }
        });
      });
      return result;
    },
    evalArraySorted: function() {
      let resultArray = [{category: "lifeinsurance", name: "Life Insurance", link: "/content/lifeinsurance", score: 0}, {category: "criticalillness", name: "Critical Illness Insurance", link: "/content/criticalillness", score: 0}, {category: "disability", name: "Disability Insurance", link: "/content/disability", score: 0}, {category: "longtermcare", name: "Long Term Care Insurance", link: "/content/longtermcare", score: 0}, {category: "othercoverage", name: "Other Coverage", link: "", score: 0}, {category: "termandpermanent", name: "Term and Permanent Insurance", link: "/content/thingstoknow", score: 0}];
      resultArray.forEach(element => {
        element.score = this.compoundEval[element.category];
      });
      resultArray.sort(function(a, b) {
        return b.score - a.score;
      });
      return resultArray;
    }

   
  }
};
</script>


<style scoped>

.progress::-webkit-progress-value {
  transition: width 0.5s ease;
}

/* .my-questioncount-container {
  margin-left: auto;
  margin-right: auto;
} */

.my-questioncount {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 42px;
  margin-bottom: 0.4em;
  width: 50px;
  height: 50px;
  /* border: 1px solid #000000; */
  border-radius: 9999px;
  padding-top: 7px;
  text-align: center;
}

.my-progress {
  margin-bottom: 3em;
  opacity: 0.5;
  
}

.my-bar {
  height: 25px;
  border-radius: 5px;
  background-color: #0000ff;
  position: relative;
  box-shadow: 0px 5px 30px #00000098;
}

.my-form {
  margin-left: 1em;
  max-width: 800px;
}

.my-resultlist {
  margin-left: 1em;
}

.assessmentnav ul li {
  display: inline;
  margin: 5px;
}

.answerprint {
  margin-left: 1.5em;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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

