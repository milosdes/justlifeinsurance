<template>
    <section class="section">
        <div class="container">
            <horizontal-stepper :steps="demoSteps" @completed-step="completeStep" @active-step="isStepActive" @stepper-finished="alert">               
            </horizontal-stepper>
        </div>
    </section>
</template>

<script>
import HorizontalStepper from "vue-stepper";

// This components will have the content for each stepper step.
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";

export default {
  components: {
    HorizontalStepper
  },
  data() {
    return {
      demoSteps: [
        {
          icon: "mail",
          name: "first",
          title: "your information",
          subtitle: "name and email",
          component: StepOne,
          completed: false
        },
        {
          icon: "report_problem",
          name: "second",
          title: "next question",
          subtitle: "",
          component: StepTwo,
          completed: false
        }
      ]
    };
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert("end");
    }
  }
};
</script>
