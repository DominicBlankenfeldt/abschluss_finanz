<template>
  <div>
    <CheckList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CheckList from "@/components/moneyChecker/checkList.vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {
    CheckList,
  },
});
</script>

<style scoped>
* {
  font-family: Courier New;
}
</style>
