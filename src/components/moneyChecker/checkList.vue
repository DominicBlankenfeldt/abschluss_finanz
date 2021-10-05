<template>
  <div id="checkList">
    <div id="checkAdd">
      <h1>Checkliste</h1>
      <form @submit.prevent="addCheck()" class="" action="">
        <div class="mb-3 row">
          <label class="col-sm-2"><b>Was:</b></label>
          <div class="col-sm-10">
            <input
              type="text"
              class=""
              placeholder="Grund"
              v-model="inputWhat"
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2"><b>Wieviel:</b></label>
          <div class="col-sm-10">
            <input
              type="number"
              class=""
              placeholder="€"
              v-model="inputHowMuch"
              required
              min="1"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2"><b>Bis Wann:</b></label>
          <div class="col-sm-10">
            <input type="date" class="" v-model="inputWhen" required />
          </div>
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
      <button @click="calcSum()">test</button>
      <button @click="savePayed()">Bezahlung Speichern</button>
    </div>
    <div class="">
      <div class="" v-for="check in checks" v-bind:key="check">
        <div class="">
          <label><b>Bezahlt</b></label>
          <input
            name="done"
            class="ms-3"
            type="checkbox"
            v-model="check.payed"
          />
          <label for="done" class="ms-3"><b>Was:</b> {{ check.what }}</label>
          <label for="done" class="ms-3"
            ><b>Wieviel:</b> {{ check.howMuch }} €</label
          >
          <label for="done" class="ms-3"
            ><b>Bis Wann:</b> {{ check.when }}</label
          >
        </div>
        <div>
          <button class="" id="trashcan" @click="deleteCheck(check)">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  loadChecks,
  saveChecks,
  Checks,
  saveSumChecks,
  loadSumChecks,
} from "../../API";

export default defineComponent({
  mounted() {
    this.checks = loadChecks();
    this.checksSum = loadSumChecks();
  },
  data() {
    return {
      checksSum: 0,
      payed: false,
      inputWhat: "",
      inputWhen: "",
      inputHowMuch: 0,
      checks: [] as Checks[],
    };
  },
  methods: {
    deleteCheck(check: any) {
      this.checks.splice(this.checks.indexOf(check), 1);
      console.log("Check erfolgreich gelöscht");
      this.calcSum();
      saveChecks(this.checks);
    },
    addCheck() {
      this.checks.push({
        what: this.inputWhat,
        howMuch: this.inputHowMuch,
        when: this.inputWhen,
        payed: this.payed,
      });
      this.inputWhat = "";
      this.inputHowMuch = 0;
      this.inputWhen = "";

      saveChecks(this.checks);
      this.calcSum();

      console.log("Check erfolgreich erstellt");
    },
    savePayed() {
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

<style scoped lang="scss">
h1 {
  font-weight: bold;
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
#checkAdd {
  border: 2px solid #2b2b2b;
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
#settings {
  background-color: #a7a6a6;
  border: 2px solid #2b2b2b;
  border-radius: 5px;
  border: 3px solid #2b2b2b;
  display: inline-block;
  cursor: pointer;
  color: #2b2b2b;
  font-family: Courier New;
  font-size: 35px;
  padding: 2px 5px;
  margin: 5px;
}
#trashcan:active {
  background-color: #b95042;
  transform: scale(1.1);
}
#settings:active {
  background-color: #a7a6a6;
  transform: scale(1.1);
}
#checkList {
  margin-left: 58px;
}
</style>
