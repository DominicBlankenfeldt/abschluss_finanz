<template>
  <div class="btnCreate">
    <button>Sparplan erstellen</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #42b983;
  border-radius: 10px;
  border: 5px solid #2b2b2b;
  display: inline-block;
  cursor: pointer;
  color: #2b2b2b;
  font-family: Courier New;
  font-size: 28px;
  font-weight: bold;
  padding: 32px 76px;
  text-decoration: none;
  text-shadow: 4px 4px 12px #42b983;
}
button:hover {
  background-color: #42b983;
  box-shadow: 7px 7px 5px 0px #46a15f;
  transform: scale(1.1);
}
</style>
