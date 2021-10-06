<template>
  <div>
    <quickPickClosed />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import quickPickClosed from "@/components/closed/quickPickClosed.vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {
    quickPickClosed,
  },
});
</script>

<style scoped>
* {
  font-family: Courier New;
}
</style>
