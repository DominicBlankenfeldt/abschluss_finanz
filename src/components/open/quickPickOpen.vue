<template>
  <div class="quickPickOpen">
    <div id="planviewer" v-for="plan in plans" v-bind:key="plan">
      <div>
        <h1>
          <b>{{ plan.planName }}</b>
        </h1>
      </div>
      <div>
        <div class="row">
          <span class="col-12"><b>Sparen für: </b>{{ plan.planReason }}</span>
          <span class="col-12"><b>Ziel: </b>{{ plan.planValue }}€</span>
        </div>
        <div class="progress" style="border: solid 1px">
          <div
            class="
              progress-bar progress-bar-striped progress-bar-animated
              bg-success
            "
            role="progressbar"
            :style="{ width: JSON.stringify(plan.planProgress) + '%' }"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ plan.planIsValue }} €
          </div>
        </div>
        <div class="row">
          <span class="col-12"><b>Gestartet: </b> {{ plan.planStart }}</span>
          <span class="col-12"><b>Geplant bis: </b> {{ plan.planEnd }}</span>
        </div>
        <form @submit.prevent="saveMoney(plan)">
          <label for="">Geld:</label>
          <input
            type="number"
            placeholder="€"
            v-model.number="saveMoneyValue"
          />
          <button type="submit">sparen</button>
        </form>
      </div>
      <button id="endBTN" @click="endPlan(plan)">Plan Beenden</button>
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
  computed: {},
  mounted() {
    this.plans = loadPlans();
    this.finishedPlans = loadFinishedPlans();
  },
  data() {
    return {
      saveMoneyValue: 0,
      finishedPlans: [] as Plans[],
      plans: [] as Plans[],
    };
  },
  methods: {
    endPlan(plan: any) {
      this.plans.splice(this.plans.indexOf(plan), 1);
      this.finishedPlans.push(plan);
      savePlans(this.plans);
      saveFinishedPlans(this.finishedPlans);

      console.log("Check erfolgreich beendet");
    },
    saveMoney(plan: Plans) {
      this.plans[this.plans.indexOf(plan)].planIsValue += this.saveMoneyValue;
      plan.planProgress = (plan.planIsValue * 100) / plan.planValue;
      savePlans(this.plans);
    },
  },
});
</script>

<style scoped lang="scss">
.quickPickOpen {
  margin-left: 60px;
}

#planviewer {
  background-color: #42b9834d;
  border: solid 3px #2b2b2b;
  border-radius: 5px;
  margin: 15px;
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
  background-color: #a7a6a6;
}
</style>
