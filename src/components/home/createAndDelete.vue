<template>
  <div class="cad">
    <div style="margin-top: 200px; margin-left: 10px; margin-right: 10px">
      <h1 v-if="planAnzahl == 1">
        <b
          >Du hast {{ planAnzahl }} Sparplan für den du sparst.<br />
          Gehe auf die
          <i style="font-size: 50px; color: #42b983">Übersicht</i> um Details zu
          sehen.</b
        >
      </h1>
      <h1 v-else-if="planAnzahl >= 1">
        <b
          >Du hast {{ planAnzahl }} Sparpläne für die du sparst.<br />
          Gehe auf die <br />
          <i style="font-size: 35px; color: #42b983">Übersicht</i><br />
          um Details zu sehen.</b
        >
      </h1>
      <h1 v-else-if="planAnzahl <= 1">
        <b>
          Erstelle einen Sparplan und beginne noch heute für tolle Dinge zu
          sparen!
        </b>
      </h1>
    </div>
    <div style="margin: 10px">
      <btnCreate data-bs-toggle="modal" data-bs-target="#create" />
    </div>

    <!-- Modal create -->
    <div
      class="modal"
      id="create"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="staticBackdropLabel">
              <b>Sparplan hinzufügen</b>
            </h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div class="modal-body">
              <div style="margin-top: 20px">
                <label><b>Name deines Sparplans:</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Gib den Namen deines Sparplanes ein"
                  v-model="planName"
                  required
                />
              </div>
              <div style="margin-top: 20px">
                <label><b>Wofür möchtest du Sparen:</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Gib an Wofür du sparen möchtest"
                  v-model="planReason"
                  required
                />
              </div>
              <div style="margin-top: 20px">
                <label><b>Wie viel € möchtest du sparen:</b></label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Gib an wieviel € du sparen möchtest"
                  v-model.number="planValue"
                  required
                />
              </div>
              <div style="margin-top: 20px">
                <label><b>Wann startest du das Sparen:</b></label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Datum"
                  v-model="planStart"
                  required
                />
              </div>
              <div style="margin-top: 20px">
                <label><b>Wann möchtest du dein Ziel erreichen:</b></label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Datum"
                  v-model="planEnd"
                  required
                />
              </div>
              <div style="margin-top: 20px">
                <label><b>Hast du dafür bereits gespart:</b></label>
                <input
                  type="Number"
                  class="form-control"
                  placeholder="Wieviel € hast du schon zusammen"
                  v-model.number="planIsValue"
                  required
                />
              </div>
            </div>
            <div>
              <button type="button" class="cancel" data-bs-dismiss="modal">
                Abbrechen
              </button>
              <button
                type="submit"
                class=""
                data-bs-dismiss="modal"
                @click="addPlan()"
              >
                Plan erstellen
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- modal settings -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import btnCreate from "@/components/home/btnCreate.vue";
import btnDelete from "@/components/home/btnDelete.vue";
import { loadPlans, Plans, savePlans } from "../../API";
export default defineComponent({
  mounted() {
    this.plans = loadPlans();
    this.planAnzahl = this.plans.length;
  },
  data() {
    return {
      planAnzahl: 0,
      planName: "",
      planReason: "",
      planValue: 0,
      planStart: "",
      planEnd: "",
      planIsValue: 0,
      plans: [] as Plans[],
    };
  },
  methods: {
    addPlan() {
      this.plans.push({
        planName: this.planName,
        planReason: this.planReason,
        planValue: this.planValue,
        planStart: this.planStart,
        planEnd: this.planEnd,
        planIsValue: this.planIsValue,
        planProgress: (this.planIsValue * 100) / this.planValue,
      });
      this.planName = "";
      this.planReason = "";
      this.planValue = 0;
      this.planStart = "";
      this.planEnd = "";
      this.planIsValue = 0;

      console.log("plan erfolgreich erstellt");
      this.planAnzahl = this.plans.length;
      console.log(this.plans.length);
      savePlans(this.plans);
    },
    deletePlan(plan: any) {
      this.plans.splice(this.plans.indexOf(plan), 1);
      this.planAnzahl = this.plans.length;
      console.log("Plan erfolgreich gelöscht");
    },
    calcPlans() {
      this.planAnzahl = this.plans.length;
    },
  },

  components: {
    btnCreate,
  },
});
</script>
<style scoped>
* {
  font-family: Courier New;
}
/* MODAL STYLE */
.modal-header {
  background-color: #42b983;
  border: solid 5px #2b2b2b;
}
/* BTN STYLE */
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
.cancel {
  background-color: grey;
}
</style>
