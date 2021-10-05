<template>
  <div class="settings" style="margin-left: 58px">
    <div class="balance">
      <h1>deine Bilanz:</h1>
      <h2>hier steht €</h2>
    </div>

    <div class="income">
      <h1>Einkommen</h1>
      <form @submit.prevent="addIncome()" action="">
        <div>
          <label><b>Einkommen:</b></label>
          <input
            type="text"
            placeholder="Einkommen von ?"
            v-model="incomeWhat"
            required
          />
          <label><b>Wieviel:</b></label>
          <input
            type="number"
            placeholder="€"
            v-model="incomeHowMuch"
            required
            min="1"
          />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
    <div v-for="income in incomeList" v-bind:key="income">
      <label for="done" class="ms-3"><b>Was:</b>{{ income.incomeWhat }}</label>
      <label for="done" class="ms-3"
        ><b>Wieviel:</b> {{ income.incomeHowMuch }} €</label
      >
      <button id="trashcan" @click="deleteIncome(income)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div class="outcome">
      <h1>Ausgaben</h1>
      <form @submit.prevent="addOutcome()" action="">
        <div>
          <label><b>Ausgaben:</b></label>
          <input
            type="text"
            placeholder="Ausgaben für ?"
            v-model="outcomeWhat"
            required
          />
          <label><b>Wieviel:</b></label>
          <input
            type="number"
            placeholder="€"
            v-model="outcomeHowMuch"
            required
            min="1"
          />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
    <div v-for="outcome in outcomeList" v-bind:key="outcome">
      <label for="done" class="ms-3"
        ><b>Was:</b>{{ outcome.outcomeWhat }}</label
      >
      <label for="done" class="ms-3"
        ><b>Wieviel:</b> {{ outcome.outcomeHowMuch }} €</label
      >
      <button id="trashcan" @click="deleteOutcome(outcome)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div v-for="check in checks" v-bind:key="check">
      <label for="done" class="ms-3"><b>Was:</b>{{ check.what }}</label>
      <label for="done" class="ms-3"
        ><b>Wieviel:</b> {{ check.howMuch }} €</label
      >
      <button id="trashcan" @click="deleteCheck(check)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Options } from "vue-class-component";
import {
  loadIncome,
  saveIncome,
  loadOutcome,
  saveOutcome,
  loadChecks,
  saveChecks,
  saveSumChecks,
  loadSumChecks,
} from "../../API";

export default defineComponent({
  mounted() {
    this.checks = loadChecks();
    this.incomeList = loadIncome();
    this.outcomeList = loadOutcome();
    this.checksSum = loadSumChecks();
  },
  data() {
    return {
      checksSum: 0,
      incomeWhat: "",
      incomeHowMuch: Number,
      outcomeWhat: "",
      outcomeHowMuch: Number,
      incomeList: [],
      outcomeList: [],
      checks: [],
    };
  },
  methods: {
    addIncome() {
      this.incomeList.push({
        incomeWhat: this.incomeWhat,
        incomeHowMuch: this.incomeHowMuch,
      });
      this.incomeWhat = "";
      this.incomeHowMuch = 0;

      saveIncome(this.incomeList);

      console.log("Einkommen erfolgreich erstellt");
    },
    deleteIncome(income) {
      this.incomeList.splice(this.incomeList.indexOf(income), 1);
      saveIncome(this.incomeList);
      console.log("Einkommen erfolgreich gelöscht");
    },
    addOutcome() {
      this.outcomeList.push({
        outcomeWhat: this.outcomeWhat,
        outcomeHowMuch: this.outcomeHowMuch,
      });
      this.outcomeHowMuch = 0;
      this.outcomeWhat = "";

      saveOutcome(this.outcomeList);

      console.log("Ausgaben erfolgreich erstellt");
    },
    deleteOutcome(outcome) {
      this.outcomeList.splice(this.outcomeList.indexOf(outcome), 1);
      saveOutcome(this.outcomeList);
      console.log("Ausgaben erfolgreich gelöscht");
    },
    deleteCheck(check: any) {
      this.checks.splice(this.checks.indexOf(check), 1);
      console.log("Check erfolgreich gelöscht");
      this.calcSum();
      saveChecks(this.checks);
    },
    calcSum() {
      this.checksSum = 0;
      for (let sum of this.checks) {
        this.checksSum += sum.howMuch;
      }
      console.log(this.checksSum);
      saveSumChecks(this.checksSum);
    },
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}
.income {
  border: 2px solid #2b2b2b;
  margin-bottom: 10px;
  margin-top: 10px;
}
.outcome {
  border: 2px solid #2b2b2b;
  margin-bottom: 10px;
  margin-top: 10px;
}
.balance {
  border: 2px solid #2b2b2b;
  margin-bottom: 10px;
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
input {
  margin: 5px;
}
#trashcan {
  background-color: #b95042;
  border: 2px solid #2b2b2b;
  border-radius: 5px;
  border: 3px solid #2b2b2b;
  display: inline-block;
  cursor: pointer;
  color: #2b2b2b;
  font-family: Courier New;
  font-size: 20px;
  padding: 2px 5px;
  margin: 5px;
}
#trashcan:active {
  background-color: #b95042;
  transform: scale(1.1);
}
</style>
