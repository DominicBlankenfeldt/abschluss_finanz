<template>
  <div>
    <setupIncome />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import setupIncome from "@/components/settings/setupIncome.vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {
    setupIncome,
  },
});
</script>

<style scoped>
* {
  font-family: Courier New;
}
</style>
