<template>
  <div class="btnDelete">
    <button>Sparplan entfernen</button>
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
  background-color: #b95042;
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
}
button:active {
  background-color: #b95042;
  transform: scale(1.1);
}
</style>
