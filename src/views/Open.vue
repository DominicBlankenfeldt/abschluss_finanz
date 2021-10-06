<template>
  <div>
    <quickPickOpen />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import quickPickOpen from "@/components/open/quickPickOpen.vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {
    quickPickOpen,
  },
});
</script>

<style scoped>
* {
  font-family: Courier New;
}
</style>
