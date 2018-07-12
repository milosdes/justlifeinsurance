<template>

<div>
<section class="section">
<div class="container textpage">


<transition name="slide-fade" mode="out-in">
  <div :key="quiz[sectionValue].question">
<h2 class="title">{{ quiz[sectionValue].question }}</h2>





<div v-if="quiz[sectionValue].page==='lastpage'" :key="finalpage" class="my-assessment">
  <ul>
    <li :key="navAnswer" v-for="navAnswer in answerchain">
      <p>{{ navAnswer.question }}</p>
      <p class="answerprint" :key="item" v-for="item in navAnswer.answer">"{{ item.text }} {{ item.additionalText }}"</p>
      <br>
    </li>
  </ul>
<br>
  <div class="assessmentnav">
  <ul>
  <li><a class="button" v-on:click="back()" v-if="hasBack" href="#">BACK</a></li>
  <li><a class="button" v-on:click="select(quiz[sectionValue].answer[0].target, quiz[sectionValue].answer, quiz[sectionValue].question)" href="#">SUBMIT</a></li>
  </ul>
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


</div>

<br>

<div class="assessmentnav">
<ul>
  <li><a class="button is-primary is-outlined" v-on:click="back()" v-if="hasBack" href="#">BACK</a></li>
  <li><a class="button is-primary is-outlined" v-on:click="select(quiz[sectionValue].answer[0].target, quiz[sectionValue].answer, quiz[sectionValue].question)" href="#">NEXT</a></li>
</ul>
</div> 
</div>
</transition>


<br>

{{ compoundEval }}
<br>
<p v-bind:key="aaa" v-for="aaa in quiz[sectionValue].answer">
  {{ aaa.eval }}
</p>

</div>
</section>
</div>

</template>

<script>
export default {
  transition: "fadeOpacity",
  components: {},

  data: function() {
    return {
      navigation: [{ section: "Q1", answer: "" }],
      answerchain: [],
      

      quiz: {
        Q1: {
          question:
            "Which of the following best describes your current marital status? ",
          type: "radio",
          options: [
            { text: "Single", target: "Q2", eval: {insurancecategory: "lifeinsurance", value: (+1) } },
            {
              text: "In a committed relationship",
              target: "Q2"
            },
            { text: "Divorced", target: "Q2" },
            { text: "Widowed", target: "Q2" },
            { text: "Other", target: "Q2" }
          ],
          answer: []
        },
        Q2: {
          question: "Do you have anyone who is dependent on you?",
          type: "radio",
          options: [
            { text: "Yes", target: "Q3a" },
            { text: "No", target: "Q3b" }
          ],
          answer: []
        },
        Q3a: {
          question: "Who is dependent on you?",
          type: "checkbox",
          options: [
            { text: "A partner", target: "Q4a" },
            { text: "One or more children", target: "Q4a" },
            { text: "Parent(s) or grandparent(s)", target: "Q4a" },
            { text: "Other", target: "Q4a" }
          ],
          answer: []
        },
        Q3b: {
          question: "Do you think this could change in the near future?",
          type: "radio",
          options: [
            {
              text:
                "Yes, there is a possibility that I will have someone dependent on me.",
              target: "Q4b"
            },
            { text: "No, I don't expect this to change.", target: "Q4b" }
          ],
          answer: []
        },
        Q4a: {
          question: "Why are you interested in learning about life insurance?",
          type: "checkbox",
          options: [
            {
              text:
                "I want to make sure my dependents are taken care of if something happens to me.",
              target: "Q5"
            },
            {
              text:
                "In case something happens to me and my current way of life is affected.",
              target: "Q5"
            },
            {
              text:
                "I'm worried about something happening to someone close to me.",
              target: "Q5"
            }
          ],
          answer: []
        },
        Q4b: {
          question: "Why are you interested in learning about life insurance?",
          type: "checkbox",
          options: [
            {
              text:
                "In case something happens to me and my current way of life is affected.",
              target: "Q5",
              eval: {insurancecategory: "lifeinsurance", value: (-2)}
            },
            {
              text:
                "I'm worried about something happening to someone close to me.",
              target: "Q5",
              eval: {insurancecategory: "lifeinsurance", value: (+10)}
            }
          ],
          answer: []
        },
        Q5: {
          question: "Where would you say you are financially at this time?",
          type: "radio",
          options: [
            { text: "I currently have some debt/liability", target: "Q6a" },
            {
              text:
                "I expect to take on some debt/liability in the near future",
              target: "Q7"
            },
            { text: "I have some money set aside", target: "Q6b" }
          ],
          answer: []
        },
        Q6a: {
          question:
            "Do you think your debt/liability will be increasing or decreasing?",
          type: "radio",
          options: [
            { text: "I think it will be increasing", target: "Q7" },
            { text: "I think it will be decreasing", target: "Q7" }
          ],
          answer: []
        },
        Q6b: {
          question: "What form are your savings in?",
          type: "radio",
          options: [
            { text: "RRSP", target: "Q7" },
            { text: "TFSA", target: "Q7" },
            { text: "Non-registered savings", target: "Q7" },
            { text: "Other", target: "Q7" },
            { text: "I don't know", target: "Q7" }
          ],
          answer: []
        },
        Q7: {
          question: "Do you have any insurance policies currently in force?",
          type: "radio",
          options: [
            { text: "Yes", target: "Q7a" },
            { text: "No", target: "Q8" },
            { text: "I'm not sure", target: "Q8" }
          ],
          answer: []
        },
        Q7a: {
          question: "Which insurance policies do you have in force?",
          type: "checkbox",
          options: [
            {
              text: "Life",
              target: "Q7aa",
              additionalText: "(Independent contract)",
              headline: "Independent contract with an insurer:"
            },
            {
              text: "Critical Illness",
              target: "Q7aa",
              additionalText: "(Independent contract)"
            },
            {
              text: "Disability",
              target: "Q7aa",
              additionalText: "(Independent contract)"
            },
            {
              text: "Long Term Care",
              target: "Q7aa",
              additionalText: "(Independent contract)"
            },
            {
              text: "Life",
              target: "Q7aa",
              additionalText: "(Group or work coverage)",
              headline: "Group or coverage through work:"
            },
            {
              text: "Critical Illness",
              target: "Q7aa",
              additionalText: "(Group or work coverage)"
            },
            {
              text: "Disability",
              target: "Q7aa",
              additionalText: "(Group or work coverage)"
            },
            {
              text: "Long Term Care",
              target: "Q7aa",
              additionalText: "(Group or work coverage)"
            }
          ],
          answer: []
        },
        Q7aa: {
          question:
            "Do you feel like you have a good understanding of what you are covered for?",
          type: "radio",
          options: [
            { text: "Yes", target: "Q8" },
            { text: "No", target: "Q8" }
          ],
          answer: []
        },
        Q8: {
          question: "Your contact information",
          type: "text",
          options: [
            {
              text: "",
              target: "Q6",
              headline: "Please fill in your contact information"
            }
          ],
          answer: [{ text: "", target: "Q9" }]
        },
        Q9: {
          page: "lastpage",
          question: "Would you like to submit the following information?"
        }
      }
    };
  },
  methods: {
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
      let result = {lifeinsurance: 0, criticalillness: 0, disability: 0, longtermcare: 0};
      this.answerchain.forEach(sectionresponse => {
        sectionresponse.answer.forEach(answer => {
          if (answer.eval!==undefined) {
            result[answer.eval.insurancecategory] += answer.eval.value;
          }
          else {
            console.log("no eval")
          }
        });
      });
      return result;
    }
  }
};
</script>


<style scoped>



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

