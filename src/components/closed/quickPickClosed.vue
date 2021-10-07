<template>
  <div class="quickPickOpen" style="padding: 15px">
    <div
      id="planviewer"
      v-for="finishedPlan in finishedPlans"
      v-bind:key="finishedPlan"
    >
      <div>
        <h1>
          <b>{{ finishedPlan.planName }}</b
          ><i style="color: red">[beendet]</i>
        </h1>
      </div>
      <div>
        <div class="row">
          <span class="col-12"
            ><b>Sparen für: </b>{{ finishedPlan.planReason }}</span
          >
          <span class="col-12"><b>Ziel: </b>{{ finishedPlan.planValue }}€</span>
        </div>
        <div class="progress" style="border: solid 1px">
          <div
            class="
              progress-bar progress-bar-striped progress-bar-animated
              bg-danger
            "
            role="progressbar"
            :style="{ width: JSON.stringify(finishedPlan.planProgress) + '%' }"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ finishedPlan.planIsValue }} €
          </div>
        </div>
        <div class="row">
          <span class="col-12"
            ><b>Gestartet: </b> {{ finishedPlan.planStart }}</span
          >
          <span class="col-12"
            ><b>Geplant bis: </b> {{ finishedPlan.planEnd }}</span
          >
        </div>
      </div>
      <button id="" @click="rePlan(finishedPlan)">Plan aktivieren</button>
      <button id="endBTN" @click="deletePlan(finishedPlan)">
        Plan löschen
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  loadPlans,
  savePlans,
  Plans,
  loadFinishedPlans,
  saveFinishedPlans,
} from "../../API";

export default defineComponent({
  mounted() {
    this.plans = loadPlans();
    this.finishedPlans = loadFinishedPlans();
  },
  data() {
    return {
      finishedPlans: [] as Plans[],
      plans: [] as Plans[],
    };
  },
  methods: {
    rePlan(plan: any) {
      this.finishedPlans.splice(this.finishedPlans.indexOf(plan), 1);
      this.plans.push(plan);
      saveFinishedPlans(this.finishedPlans);
      savePlans(this.plans);

      console.log("Check erfolgreich beendet");
    },
    // saveMoney() {

    // },

    deletePlan(plan: any) {
      this.finishedPlans.splice(this.finishedPlans.indexOf(plan), 1);
      saveFinishedPlans(this.finishedPlans);
    },
  },
});
</script>

<style scoped lang="scss">
.quickPickOpen {
  margin-left: 60px;
}

#planviewer {
  background-color: #3b3b3b4d;
  border: solid 3px #2b2b2b;
  border-radius: 5px;
}

button {
  background-color: #42b983;
  border-radius: 10px;
  border: 3px solid #2b2b2b;
  display: inline-block;
  cursor: pointer;
  color: #2b2b2b;
  font-family: Courier New;
  font-size: 20px;
  font-weight: bold;
  padding: 2px 5px;
  text-decoration: none;
  margin: 5px;
}
button:active {
  background-color: #42b983;
  transform: scale(1.1);
}
#endBTN {
  background-color: #b95042;
}
</style>
