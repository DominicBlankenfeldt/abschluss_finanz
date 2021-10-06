<template>
  <div>
    <quickPick />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import quickPick from "@/components/overview/quickPick.vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {
    quickPick,
  },
});
</script>

<style scoped>
* {
  font-family: Courier New;
}
</style>
