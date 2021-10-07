<template>
  <div class="quickPick" style="padding: 15px">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { loadPlans, savePlans, Plans } from "../../API";

export default defineComponent({
  mounted() {
    this.plans = loadPlans();
  },
  data() {
    return {
      plans: [] as Plans[],
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
.quickPick {
  margin-left: 60px;
}

#planviewer {
  background-color: #42b9834d;
  border: solid 3px #2b2b2b;
  border-radius: 5px;
}
#planviewer:active {
  transform: scale(1.02);
}
</style>
