<template>
  <div class="settings" style="margin-left: 58px">
    <div class="balance">
      <h1>deine Bilanz:</h1>
      <h2>hier steht €</h2>
    </div>

    <div class="income">
      <h1>Einkommen</h1>
      <div>
        <label><b>Einkommen:</b></label>
        <input type="text" placeholder="Einkommen von ?" v-model="incomeWhat" />
        <label><b>Wieviel:</b></label>
        <input type="number" placeholder="€" v-model="incomeHowMuch" />
      </div>
      <button>Hinzufügen</button>
    </div>
    <div v-for="income in incomeList" v-bind:key="income">
      <label for="done" class="ms-3"><b>Was:</b>{{ income.incomeWhat }}</label>
      <label for="done" class="ms-3"
        ><b>Wieviel:</b> {{ income.incomeHowMuch }} €</label
      >
      <button id="trashcan" @click="deleteCheck(check)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div class="outcome">
      <h1>Ausgaben</h1>
      <div>
        <label><b>Ausgaben:</b></label>
        <input type="text" placeholder="Ausgaben für ?" v-model="outcomeWhat" />
        <label><b>Wieviel:</b></label>
        <input type="number" placeholder="€" v-model="outcomeHowMuch" />
      </div>
      <button>Hinzufügen</button>
    </div>
    <div v-for="outcome in outcomeList" v-bind:key="outcome">
      <label for="done" class="ms-3"
        ><b>Was:</b>{{ outcome.outcomeWhat }}</label
      >
      <label for="done" class="ms-3"
        ><b>Wieviel:</b> {{ outcome.outcomeHowMuch }} €</label
      >
      <button id="trashcan" @click="deleteCheck(check)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Options } from "vue-class-component";

export default defineComponent({
  data() {
    return {
      incomeWhat: "",
      incomeHowMuch: "",
      outcomeWhat: "",
      outcomeHowMuch: "",
      incomeList: [
        {
          incomeWhat: "test",
          incomeHowMuch: "",
        },
      ],
      outcomeList: [
        {
          outcomeWhat: "test2",
          outcomeHowMuch: "",
        },
      ],
    };
  },
  methods: {},
});
</script>

<style scoped>
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
